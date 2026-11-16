import { describe, expect, it } from "vitest";
import { labelFromFilename, mergeUploadedResumes, type DraftLike } from "@/lib/bulkUpload";
import { estimateSeconds, progressState } from "@/lib/progress";

let n = 0;
const make = (pos: number): DraftLike => ({ key: `k${n++}`, label: `Applicant ${pos}`, resumeText: "" });
const file = (name: string) => ({ name, text: `resume text for ${name}` });

describe("bulk upload (user-testing issue #2)", () => {
  it("turns file names into readable labels", () => {
    expect(labelFromFilename("02-resume-good-fit_with-data.txt")).toBe("02 resume good fit with data");
    expect(labelFromFilename(".txt")).toBe("Candidate");
    expect(labelFromFilename("x".repeat(60) + ".txt")).toHaveLength(40);
  });

  it("fills empty boxes first, then adds new ones", () => {
    const start = [make(1), make(2)];
    const r = mergeUploadedResumes(start, [file("a.txt"), file("b.txt"), file("c.txt")], make);
    expect(r.added).toBe(3);
    expect(r.candidates).toHaveLength(3);
    expect(r.candidates.map((c) => c.label)).toEqual(["a", "b", "c"]);
    expect(r.candidates[0].key).toBe(start[0].key); // reused the empty box
  });

  it("keeps boxes that already have text and stops at the 8-candidate limit", () => {
    const start = [{ ...make(1), resumeText: "already pasted" }];
    const files = Array.from({ length: 9 }, (_, i) => file(`r${i}.txt`));
    const r = mergeUploadedResumes(start, files, make);
    expect(r.candidates).toHaveLength(8);
    expect(r.candidates[0].resumeText).toBe("already pasted");
    expect(r.added).toBe(7);
    expect(r.skipped).toEqual(["r7.txt", "r8.txt"]);
  });
});

describe("progress indicator (user-testing issue #3)", () => {
  it("estimates time from the number of candidates (matches live measurements)", () => {
    expect(estimateSeconds(4)).toBe(44); // measured 46 s
    expect(estimateSeconds(6)).toBe(60); // measured 62 s
  });

  it("moves through the steps and never shows 100% before the result arrives", () => {
    expect(progressState(0, 4)).toMatchObject({ percent: 0, step: 0 });
    expect(progressState(20, 4).step).toBe(2);
    expect(progressState(40, 4).step).toBe(3);
    expect(progressState(500, 4).percent).toBe(95);
  });
});
