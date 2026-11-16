/**
 * Estimated progress while the AI works (user-testing issue #3).
 * Based on live measurements: about 46 s for 4 resumes and 62 s for 6.
 * The bar never reaches 100% until the real result arrives.
 */
export const PROGRESS_STEPS = [
  "Removing personal details",
  "Extracting the job's requirements",
  "Checking each resume for evidence",
  "Scoring and ranking candidates",
] as const;

export function estimateSeconds(candidates: number): number {
  return 12 + 8 * Math.max(1, candidates);
}

export function progressState(elapsedSec: number, candidates: number): { percent: number; step: number; estimate: number } {
  const estimate = estimateSeconds(candidates);
  const ratio = Math.max(0, elapsedSec) / estimate;
  const percent = Math.min(95, Math.round(ratio * 100));
  const step = ratio < 0.08 ? 0 : ratio < 0.25 ? 1 : ratio < 0.85 ? 2 : 3;
  return { percent, step, estimate };
}
