import { LIMITS } from "./schema";

export interface DraftLike {
  key: string;
  label: string;
  resumeText: string;
}

export interface UploadedFile {
  name: string;
  text: string;
}

/** "02-resume-good-fit.txt" -> "02 resume good fit" (max 40 chars) */
export function labelFromFilename(name: string): string {
  const base = name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
  return (base || "Candidate").slice(0, LIMITS.labelMax);
}

/**
 * Puts several uploaded resumes into the candidate list in one go
 * (user-testing issue #2). Empty boxes are filled first, then new boxes are
 * added up to the 8-candidate limit. Files beyond the limit are reported as skipped.
 */
export function mergeUploadedResumes<T extends DraftLike>(
  existing: T[],
  files: UploadedFile[],
  makeDraft: (position: number) => T,
  max: number = LIMITS.candidatesMax,
): { candidates: T[]; added: number; skipped: string[] } {
  const candidates = [...existing];
  const skipped: string[] = [];
  let added = 0;

  for (const file of files) {
    const text = file.text.slice(0, LIMITS.resumeMax);
    const label = labelFromFilename(file.name);
    const emptyIdx = candidates.findIndex((c) => c.resumeText.trim() === "");
    if (emptyIdx >= 0) {
      candidates[emptyIdx] = { ...candidates[emptyIdx], label, resumeText: text };
      added++;
    } else if (candidates.length < max) {
      candidates.push({ ...makeDraft(candidates.length + 1), label, resumeText: text });
      added++;
    } else {
      skipped.push(file.name);
    }
  }
  return { candidates, added, skipped };
}
