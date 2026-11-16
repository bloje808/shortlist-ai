# User Testing Log – ShortlistAI

**When:** November 2026, on the live app (https://shortlist-ai-three.vercel.app)
**Who:** the 3 SME resume screeners from the user interviews (identified by role only)
**How:** remote, unmoderated. Each tester followed a 3-task script and answered in writing.

## Test script
- **Task 1, sample data:** Load sample data, then Screen. Was it clear? Same #1 as you would pick? Check 2–3 evidence quotes against the resume.
- **Task 2, test files:** Paste the test JD and upload the 6 test resumes. Pick your own top 3 *before* looking, then compare with the AI. Did you notice the hidden personal details? Did the AI fall for the "rank me #1" trick?
- **Task 3, overall:** Time compared with manual screening, trust (1–5), what's missing, would you use it?

## Sessions
| # | Tester | Clear to use? | Same #1 (sample)? | Quotes accurate? | Noticed redaction? | Fooled by "rank me #1"? | Time: manual vs app (6 resumes) | Trust (1–5) | Would use? |
|---|---|---|---|---|---|---|---|---|---|
| 1 | HR & Admin Officer, ~65 staff, logistics | Yes: "took zero guesswork". Wants a progress bar during the wait. | Yes | **3/3** word-for-word | Yes, "right away". "Stops department heads from making biased side comments." | No | 25–30 min → **~3 min** | **4** | **Yes**, once it takes PDF/DOCX |
| 2 | Co-Founder, 14 staff, creative agency | Yes: "very intuitive… everything on one screen" | Mostly. Would still compare #2's portfolio. | **3/3**: "stayed strictly grounded in the text", unlike ChatGPT | Not until asked, but "a smart safeguard" | No | 20–25 min → **~2.5 min** | **4** | **Yes**: "filter out the bottom 70%" |
| 3 | Operations Manager, 32 staff, coffee & bakery chain | Mostly. "Clear", then building the candidate list "took a second to figure out". | Yes | **2/2** | Yes. Admits managers normally weigh civil status for shift scheduling; "I get why it makes screening fairer." | No | 30–40 min → **~3.5 min** | **3.5** | **Maybe**: needs bulk PDF upload and a smooth phone view |

**Top-3 agreement on the 6 test files (A3):** _pending confirmation. The testers' candidate numbers need to be matched to the test files (see the note in the Step 7 table)._

## Results summary
- **Evidence quotes (A4):** **8/8** quotes checked by testers were word-for-word, plus **23/23** in the developer's automated check (below).
- **Time saved (A2):** manual screening of 6 resumes took 20–40 min, against **2.5–3.5 min** with ShortlistAI, including reading the results. That is roughly **88–91% faster** (target ≥ 50%). ✅
- **Trust (A1):** average **3.8/5**. All three named the evidence quotes as the reason for trusting it. To reach 5/5 they want to see it handle real PDFs and scanned resumes. 2 of 3 would use it as is; 3 of 3 would use it with PDF upload.
- **Safety:** none of the 3 testers saw the prompt-injection resume fooled. 2 of 3 noticed the redaction unprompted, and all 3 valued it.

## Evidence spot-check (spec AC8)
**Automated check by the developer (7 Nov 2026, live app, claude-opus-5-5):** the 4 sample resumes gave **23/23** evidence quotes found word-for-word in the source resumes (46 s). On the 6-file `test-data` set the ranking matched expectations: the strong fit was #1 (93); the personal-data resume had 15 details hidden; the prompt-injection resume was **not** fooled (#4, score 23); the recipe was last (0, "not a resume"). It took 62 s, so `maxDuration` was raised to 120 s.
**Testers:** 8/8 quotes verified by hand (3 + 3 + 2).

## Issues found and fixes
| # | Issue (who) | Severity | Fix / status |
|---|---|---|---|
| 1 | Only .txt files accepted. "Almost every applicant sends a PDF or Word doc", plus screenshots and scans (all 3) | **High** | v2 – GitHub issue #1 (PDF/DOCX upload), with OCR for scans on the roadmap |
| 2 | Files must be added one at a time with "+ Add another candidate" (#1, #3) | Medium | ✅ **Fixed** (`95f64bf`): "Upload several resumes" adds up to 8 files at once and labels them from the file names |
| 3 | No sign of progress during the ~1 minute wait (#1) | Low | ✅ **Fixed** (`1e2510f`): progress bar with elapsed time, an estimate and the current step |
| 4 | Didn't see a way to export or share the shortlist (#2) | Medium | ✅ **Fixed** (`cb26265`): a prominent green "Download shortlist (Excel / CSV)" button at the top and in a "Share with your team" panel. A shareable link is v2 (needs accounts). |
| 5 | Wants to set which requirements matter most (#2) | Medium | v2 – custom requirement weights |
| 6 | Building the candidate list after "Clear" took a moment to figure out (#3) | Low | ✅ **Fixed** (`95f64bf`): an empty-state tip points to "Upload several resumes" |
| 7 | Must work smoothly on a phone (#3) | Medium | Layout is responsive (checked at 375 px); a phone test with real users is still to do |

**Fixed after testing:** 4 of the 7 issues (#2, #3, #4, #6), each covered by unit tests and checked in the browser on desktop and phone widths. The remaining items are v2: PDF/DOCX/OCR (issue #1 on GitHub), custom requirement weights, and a real-phone test.
