/**
 * Backlink outreach tracker for EaseFIT.
 *
 * Persists entries to lib/seo/backlinks.json (Node.js context).
 * Falls back to in-memory only when the file system is unavailable
 * (e.g. browser context or static export at runtime).
 *
 * Typical usage — run as a one-off Node script:
 *   import { addBacklink, getBacklinks } from "@/lib/seo/backlinks";
 *   addBacklink({ url: "/gym-management-software", source: "https://fitnessblog.com/tools", status: "pending" });
 *   console.log(getBacklinks());
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type BacklinkStatus = "pending" | "live";

export type BacklinkEntry = {
	/** Path on ease.fit being linked to (e.g. "/gym-management-software"). */
	url: string;
	/** External domain or full URL providing the backlink. */
	source: string;
	status: BacklinkStatus;
	/** ISO-8601 timestamp set automatically on creation. */
	addedAt: string;
	/** Optional free-text outreach note (contact name, thread link, etc.). */
	notes?: string;
};

export type BacklinkSummary = {
	total: number;
	live: number;
	pending: number;
	liveUrls: string[];
};

// ─── Storage ──────────────────────────────────────────────────────────────────

const STORE_FILE = "lib/seo/backlinks.json";

function resolvePath(): string | null {
	try {
		const path = require("path") as typeof import("path");
		return path.resolve(process.cwd(), STORE_FILE);
	} catch {
		return null;
	}
}

function readFile(): BacklinkEntry[] {
	try {
		const fs = require("fs") as typeof import("fs");
		const absPath = resolvePath();
		if (!absPath) return [];
		const raw = fs.readFileSync(absPath, "utf-8");
		return JSON.parse(raw) as BacklinkEntry[];
	} catch {
		return [];
	}
}

function writeFile(entries: BacklinkEntry[]): void {
	try {
		const fs = require("fs") as typeof import("fs");
		const absPath = resolvePath();
		if (!absPath) return;
		fs.writeFileSync(absPath, JSON.stringify(entries, null, 2) + "\n", "utf-8");
	} catch {
		// silently no-op in browser / static-export runtime
	}
}

// Lazy in-memory cache — loaded once per process from the JSON file.
let _cache: BacklinkEntry[] | null = null;

function store(): BacklinkEntry[] {
	if (_cache === null) _cache = readFile();
	return _cache;
}

function persist(): void {
	writeFile(store());
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Add a new backlink entry or update the status of an existing one.
 * Deduplicated on (url + source). Returns the final stored entry.
 */
export function addBacklink(
	entry: Omit<BacklinkEntry, "addedAt"> & { notes?: string },
): BacklinkEntry {
	const entries = store();
	const existing = entries.find(
		(e) => e.url === entry.url && e.source === entry.source,
	);

	if (existing) {
		existing.status = entry.status;
		if (entry.notes !== undefined) existing.notes = entry.notes;
		persist();
		return existing;
	}

	const created: BacklinkEntry = {
		url: entry.url,
		source: entry.source,
		status: entry.status,
		addedAt: new Date().toISOString(),
		...(entry.notes !== undefined && { notes: entry.notes }),
	};

	entries.push(created);
	persist();
	return created;
}

/**
 * Return all backlinks, optionally filtered by status.
 *
 *   getBacklinks()           // all entries
 *   getBacklinks("live")     // only confirmed live links
 *   getBacklinks("pending")  // outreach in progress
 */
export function getBacklinks(status?: BacklinkStatus): BacklinkEntry[] {
	const entries = store();
	if (status) return entries.filter((e) => e.status === status);
	return [...entries];
}

/**
 * Flip the status of an existing entry. Returns true if found and updated.
 *
 *   updateBacklinkStatus("/pricing", "https://fitnessblog.com", "live");
 */
export function updateBacklinkStatus(
	url: string,
	source: string,
	status: BacklinkStatus,
): boolean {
	const entry = store().find((e) => e.url === url && e.source === source);
	if (!entry) return false;
	entry.status = status;
	persist();
	return true;
}

/**
 * Remove a backlink entry. Returns true if found and removed.
 */
export function removeBacklink(url: string, source: string): boolean {
	const entries = store();
	const idx = entries.findIndex((e) => e.url === url && e.source === source);
	if (idx === -1) return false;
	entries.splice(idx, 1);
	persist();
	return true;
}

/**
 * Snapshot counts and live source list — useful for dev logging and reporting.
 */
export function getBacklinkSummary(): BacklinkSummary {
	const entries = store();
	const live = entries.filter((e) => e.status === "live");
	return {
		total: entries.length,
		live: live.length,
		pending: entries.filter((e) => e.status === "pending").length,
		liveUrls: live.map((e) => e.source),
	};
}
