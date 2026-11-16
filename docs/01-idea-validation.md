# Idea Validation Report – ShortlistAI

**Product:** ShortlistAI – fair, evidence-based AI resume screening for small HR teams
**Author:** Marc · **Date:** November 2026 · **Course:** Graded Mini Project 4.2

> One-line pitch: *Paste a job description and up to 8 resumes. Within a minute you get a ranked shortlist in which every score is backed by a quote from the resume, along with interview questions for each candidate. Personal details are removed before the AI sees anything.*

The report follows the 7-step validation framework: Problem → User → Evidence → Why now → Alternatives → Differentiation → Validation test and metrics. Sources are listed at the end, numbered [1]–[20].

---

## Step 1 – Problem statement

HR generalists and solo recruiters at small and mid-sized companies get far more applications per opening than they can read properly. They screen by skimming, so screening is **slow**. Different reviewers apply different standards, so it is **inconsistent**. Unconscious bias about names, age, sex and civil status creeps in, so it is **unfair**. The same pressures cause qualified candidates to be missed and weak ones to reach interviews. Mis-hires and long vacancies cost money.

**Problem statement:** *"An HR generalist at a Philippine SME who must shortlist 50–300 applicants for a role within a few days has no fast, consistent and defensible way to compare resumes against the job's real requirements. Screening therefore takes hours, gives inconsistent results, and is open to bias."*

## Step 2 – Target user (specific)

**Primary persona: "Jessa", HR generalist at a 30–200-employee Philippine company** (a BPO, a retailer or a growing services firm)

- Is the whole HR team (or one of two people): payroll, onboarding, employee relations *and* recruitment
- Posts on Jobstreet, Indeed and Facebook job groups, then receives resumes as PDFs or Word files and in Messenger
- Has no ATS, or only a basic one. Uses Excel to track applicants
- Usually hires high-volume roles (CSRs, team leads, sales and admin staff)
- **Job to be done:** "Help me pick the 5–10 people worth interviewing today, and help me explain why to the hiring manager."

**Secondary user:** the hiring manager who receives the shortlist and wants to see the reasons behind it.

**Not the target (for now):** enterprise talent-acquisition teams that already use Workday, Greenhouse or a similar suite.

## Step 3 – Evidence the problem is real

### 3a. Market and secondary evidence

| # | Evidence | Source |
|---|---|---|
| E1 | Applications per job **more than doubled (+102%)** between Q3 2022 and Q4 2024. Greenhouse describes recruiters as "overwhelmed". | Greenhouse, 2025 [1] |
| E2 | Recruiters spend about **7.4 seconds** on a first resume scan. This is an often-cited figure from an older study with criticised methodology, so it is used here only as an indicator. | The Ladders via HR Dive, 2018 [2] |
| E3 | Median time-to-fill for non-executive roles is **39 days**. | SHRM Benchmarking [3] |
| E4 | **69%** of organisations struggle to fill full-time roles. | SHRM 2025 Talent Trends [4] |
| E5 | **74%** of employers say they have made a bad hire, at about **US$14,900** per bad hire. This is older, US-only data. | CareerBuilder/Harris Poll, 2017 [5] |
| E6 | MSMEs are **99.6%** of Philippine businesses and employ **66.6%** of the workforce. | DTI 2024 MSME Statistics [6] |
| E7 | Philippine IT-BPM employment reached **1.9 million in 2025**, with about 80,000 net new jobs that year. This is constant high-volume hiring. | IBPAP via Philstar, Jan 2026 [7] |
| E8 | Only **16%** of employers with fewer than 100 staff used AI in HR, compared with **42%** of those with 5,000 or more. Small firms are under-served. | SHRM, 2022 [8] |

### 3b. Primary evidence – user interviews

**Method:** In November 2026 I interviewed 3 people who screen resumes at Philippine SMEs in three different industries. Each answered 6 core questions plus follow-ups. Interviewees are identified by role only, as promised when they agreed to take part.

**Interview questions:**
1. How many applications did you get for your last opening?
2. How long does it take you to get from "applications in" to a shortlist?
3. How do you decide who makes the shortlist? Do you use a checklist?
4. What is the most frustrating part of screening?
5. Have you tried ChatGPT or an ATS for screening? What went wrong?
6. Would you trust an AI score? What would you need to see first?

| # | Role / company | Applicants per role | Time to shortlist | Biggest pain (their words) | Tried AI / ATS? | What they need to trust AI |
|---|---|---|---|---|---|---|
| 1 | HR & Admin Officer, ~65 staff, logistics & warehousing | ~180 (entry-level Accounting Assistant, JobStreet + Facebook) | 4–5 days, "squeezing it in between payroll and onboarding" | "Opening 180 separate PDF and Word files… and manually logging everyone into Excel" | Free ChatGPT: uploading one by one "took longer than skimming them myself". ATS "way too expensive for us". | "I'd need to see why it gave a high score", and that it won't reject someone over odd formatting |
| 2 | Co-Founder, 14 staff, digital marketing agency | ~95 (Junior Content & Social Media Strategist) | 2 weeks (reviews only "late at night after client work") | AI-written cover letters and polished resumes "that look impressive until you click their portfolio" | ChatGPT Plus in batches of 10: OK for filtering, but "it hallucinated skills once or twice" | "A first-pass sorter, not a final decision-maker"; "a clear breakdown by requirement" and no penalty for non-traditional backgrounds |
| 3 | Operations Manager, 32 staff, 3-branch coffee & bakery chain | 220+ (two Shift Supervisor roles) | 3 days of skimming "whenever store traffic slowed down" | Messy formats: phone-note screenshots, "blurry biodata scans", 4-page resumes for a shift role | Neither; reads Google Form and email applications on phone or laptop | Wants to test it on "20 resumes I already graded myself" first |

**Follow-up findings**

| Topic | #1 HR & Admin Officer | #2 Agency Co-Founder | #3 Operations Manager |
|---|---|---|---|
| Resumes with age / civil status / religion | ~70%, plus a 2x2 photo. Department heads "occasionally make side comments about late-shift safety or family commitments" | ~20% in creative roles; "feels very outdated" | "Almost every single resume", including height and weight. Branch managers "sometimes favor single applicants" |
| Value of quoting the exact resume line | "If I can verify the exact match in two seconds… that saves me hours" | "Stops the AI from making things up because I can see the literal receipt" | Yes, especially "on a phone screen" with exact dates and job titles |
| Willingness to pay | ₱1,500–2,500/month (about US$25–45), ideally pausable when not hiring | US$20–30/month, or pay per job post (hires 3–4 times a year) | About ₱1,000/month max ("margins in food service are tight") |
| Missed or near-missed candidate | Almost missed a strong applicant who sent a scanned image, which keyword search skipped | A keyword filter would have rejected a candidate with no agency background but a 50k-follower TikTok | Spent 10 minutes zooming into a blurry biodata photo to find a food-safety certificate |

**Patterns observed**
- **The volume problem is real and fits the target user.** All 3 received **95–220+ applications per role**, and screening is squeezed in around their main job. It takes **3 days to 2 weeks**, which confirms Steps 1–2.
- **Nobody uses an ATS**, citing cost or not needing one. Two of the three tried or rejected ChatGPT because it was slow (one file at a time) or **hallucinated skills**. This confirms the gap in Step 5.
- **Trust depends on visible evidence.** All 3 said they would only trust AI if they can **see why** each candidate scored as they did, and 2 of 3 described the evidence quote as the key feature ("literal receipt"). This **supports riskiest assumption A1**.
- **Bias from personal details is happening now.** Two of three reported personal details on most resumes *and* managers commenting on or favouring candidates based on civil status or family situation. This **directly validates the PII-redaction feature**.
- **New insights that changed the product:** (a) don't penalise non-traditional but equivalent experience, which led to a prompt fix in spec v1.2; (b) scanned and image resumes are common, which strengthens v2 issue #1 (file upload) and adds OCR to the roadmap; (c) pricing must be SME-sized, around **₱1,000–2,500/month or pay-per-job**, with pausing between hiring rounds.

## Step 4 – Why now

1. **AI has flooded the application pipeline.** LinkedIn handles about **11,000 applications per minute, up 45% year on year**, and AI tools are named as a driver [9]. Candidates can now apply to dozens of roles in minutes, which makes manual screening even harder.
2. **HR has accepted AI.** AI use in HR tasks rose from **26% to 43% of organisations in one year** [4]. **37%** of organisations are now experimenting with or adopting generative AI in hiring, and those using it save about **20% of the work week** [10].
3. **LLMs became cheap and capable enough.** The price of the same level of LLM performance falls **9× to 900× per year** [11]. Screening a batch of resumes with a top model now costs cents, which is affordable for an SME.
4. **Regulation now expects explainability.** The EU AI Act classifies AI that filters job applications as **high-risk** [12]. NYC Local Law 144 requires bias audits for automated hiring tools [13]. The Philippine National Privacy Commission issued AI guidance under the Data Privacy Act in **December 2024** [14]. A black-box score is no longer acceptable.
5. **Local portals are moving to AI.** Jobstreet launched an AI matching engine for employers in **September 2026** [15]. That engine is locked to the portal, while SMEs source applicants from several channels.

## Step 5 – Existing alternatives and competitors

| Alternative | What it does | Why it falls short for "Jessa" |
|---|---|---|
| **Manual review + Excel** | Read every resume and tick boxes | Slow, inconsistent and biased (E1–E2) |
| **ChatGPT / Claude copy-paste** | Ask "rank these resumes" | No fixed rubric, so results change between runs. No evidence quotes. Personal data is pasted into a chatbot. No export. |
| **Manatal** | ATS with AI recommendations; US$15–55 per user per month [16] | A full ATS that needs setup and migration. AI ranking without per-requirement evidence. |
| **Workable** | ATS; US$299+ per month for small companies. AI screening is a paid credit add-on [17] | Too expensive for a 50-person company that hires a few roles a quarter |
| **Kalibrr / Jobstreet seekAI** | Portal-side AI matching [15][18] | Only screens applicants from that portal. Opaque scoring. |
| **HireVue / enterprise suites** | Assessments and video interviews | Enterprise pricing and sales-led setup |

## Step 6 – Differentiating angle

ShortlistAI is **not** a generic chatbot wrapper. Its value comes from five features:

1. **Evidence or it didn't happen.** Every requirement is marked met, partial or not met, with a **verbatim quote** from the resume. A recruiter can check any score in seconds.
2. **Bias reduction by design.** Names, contact details, age, sex, civil status, religion and government IDs are **redacted before the AI sees the resume**. These fields are very common on Philippine resumes. A 2024 University of Washington study found LLM screeners favoured white-associated names 85% of the time [19], which is direct support for this design. Age, marital status and religion are also *sensitive personal information* under RA 10173 [20].
3. **Transparent, repeatable scoring.** The AI only judges the evidence; the app calculates the score with a published formula (must-haves count double, a partial match counts as half). The same inputs always give the same score.
4. **Zero setup.** No sign-up, no ATS migration and no per-seat pricing. It works with whatever resumes you already have, from any channel.
5. **Actionable output.** Each candidate gets 3 interview questions aimed at their gaps, and the shortlist can be exported to CSV for the hiring manager or for Excel.

**Positioning:** *"Like a careful senior recruiter's checklist, in 60 seconds, with receipts."*

## Step 7 – Validation test, riskiest assumptions and success metrics

| Riskiest assumption | How we test it (MVP) | Pass threshold |
|---|---|---|
| A1. Recruiters will trust AI screening **if they can see evidence** | 5 recruiters each compare ShortlistAI's top 3 with their own top 3 from the same 6–8 resumes | ≥ 4 of 5 say the evidence quotes make the result trustworthy |
| A2. It saves meaningful time | Time the manual shortlist against ShortlistAI, including the time spent reviewing the AI output | ≥ 50% time saved |
| A3. The quality is good enough | Overlap between the AI top 3 and the recruiter top 3 | ≥ 2 of 3 overlap on average |
| A4. The quotes are real | Spot-check 20 quotes against the source resumes | 100% verbatim (0 invented quotes) |
| A5. Redaction catches common personal details | Unit tests and a review of 10 real-format resumes | ≥ 95% of the listed fields removed |

**North-star metric:** *shortlists created per week by returning users.*
**Supporting metrics:** time to first shortlist (< 2 min), CSV exports per screening, error rate (< 2%), and cost per screening (< US$0.20).

**Decision:** If A1–A3 pass with real users, continue to v2 (PDF upload, saved roles, team sharing). If A1 fails, invest in explanation UX before adding features.

**Evidence so far (November 2026)**
| Assumption | Status | Evidence |
|---|---|---|
| A1 Trust needs evidence | 🟢 Supported (interviews + user testing) | Interviews: 3/3 made trust conditional on seeing *why*. Testing: average trust **3.8/5**, and all 3 testers named the evidence quotes as the reason. 2/3 would use it today; 3/3 with PDF upload. (`docs/user-testing.md`) |
| A2 Time saved | 🟢 Passed (user testing) | 6 resumes: **20–40 min manually vs 2.5–3.5 min** with ShortlistAI, including reading the results (about 88–91% faster; target ≥ 50%) |
| A3 Quality | 🟡 Partly tested | 3/3 testers agreed with the #1 pick on the sample data. Top-3 agreement on the 6 test files is pending confirmation of which files the testers' numbers refer to. Interviewee #3 suggested a stronger test: 20 resumes they have already graded (planned v2 evaluation set). |
| A4 Quotes are real | 🟢 Passed (developer test) | 23/23 quotes word-for-word on the live app (`docs/user-testing.md`) |
| A5 Redaction | 🟢 Passed (tests) | Unit tests, plus all 15 personal fields removed from the test resume with a full PH data sheet |

**Pricing signal from interviews:** ₱1,000–2,500 per month (about US$15–45), or pay per job post, with the option to pause between hiring rounds. At about US$0.05–0.15 of AI cost per screening, even ₱1,000/month covers 100+ screenings, so the unit economics work for SMEs.

---

## Sources

1. Greenhouse, press release, 5 June 2025 – https://www.greenhouse.com/newsroom/greenhouse-launches-dream-job-to-fix-job-hunting-and-boost-candidates-chances-of-getting-hired
2. HR Dive, "Eye-tracking study shows recruiters look at resumes for 7 seconds", 2018 – https://www.hrdive.com/news/eye-tracking-study-shows-recruiters-look-at-resumes-for-7-seconds/541582/
3. SHRM Recruiting Benchmarking – https://www.shrm.org/topics-tools/research/2025-recruiting-benchmarking
4. SHRM 2025 Talent Trends – https://www.shrm.org/topics-tools/research/2025-talent-trends
5. HR Dive / CareerBuilder, 2017 – https://www.hrdive.com/news/careerbuilder-74-of-employers-admit-hiring-the-wrong-candidate/512577/
6. DTI 2024 MSME Statistics – https://www.dti.gov.ph/dti-knowledge-hub/dti-statistics/dti-msme-statistics
7. Philstar, 29 Jan 2026 (IBPAP) – https://www.philstar.com/business/2026/01/29/2504140/it-bpm-revenues-breach-40-billion-mark/amp/
8. SHRM press release, 12 Apr 2022 – https://shrm.org/about/press-room/fresh-shrm-research-explores-use-automation-ai-hr
9. eWeek, 25 Jun 2025 – https://www.eweek.com/news/ai-job-applications-linkedin/
10. LinkedIn, Future of Recruiting 2025 – https://business.linkedin.com/talent-solutions/resources/future-of-recruiting
11. Epoch AI, LLM inference price trends, Mar 2025 – https://epoch.ai/data-insights/llm-inference-price-trends
12. EU AI Act, Annex III – https://artificialintelligenceact.eu/annex/3/
13. NYC DCWP, Automated Employment Decision Tools – https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
14. National Privacy Commission, Advisory 2024-04 (AI guidelines), 19 Dec 2024 – https://privacy.gov.ph/wp-content/uploads/2024/12/Advisory-2024.12.19-Guidelines-on-Artificial-Intelligence-w-SGD.pdf
15. Philstar, 26 Sep 2026, "Jobstreet launches AI engine for employers" – https://www.philstar.com/world/2026/09/26/2558870/jobstreet-launches-ai-engine-employers
16. Manatal FAQ (pricing) – https://support.manatal.com/docs/frequently-asked-questions
17. Workable pricing – https://www.workable.com/pricing
18. Kalibrr for employers – https://www.kalibrr.com/employers
19. University of Washington, 31 Oct 2024 – https://www.washington.edu/news/2024/10/31/ai-bias-resume-screening-race-gender/
20. Data Privacy Act of 2012 (RA 10173) – https://privacy.gov.ph/wp-content/uploads/2017/03/DPA-of-2012.pdf
