"use client";

import { useEffect, useState } from "react";
import { PROGRESS_STEPS, progressState } from "@/lib/progress";

export default function ScreenProgress({ candidates }: { candidates: number }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const started = Date.now();
    const id = setInterval(() => setElapsed((Date.now() - started) / 1000), 500);
    return () => clearInterval(id);
  }, []);

  const { percent, step, estimate } = progressState(elapsed, candidates);

  return (
    <div role="status" aria-live="polite" className="mt-8 rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-900">
          Screening {candidates} candidate{candidates === 1 ? "" : "s"}…
        </span>
        <span className="text-slate-500">
          {Math.floor(elapsed)}s · usually about {estimate}s
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
        <div className="h-3 rounded-full bg-indigo-600 transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <ol className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        {PROGRESS_STEPS.map((label, i) => (
          <li key={label} className={`flex items-center gap-2 ${i < step ? "text-emerald-700" : i === step ? "font-semibold text-indigo-700" : "text-slate-400"}`}>
            <span aria-hidden="true">{i < step ? "✓" : i === step ? "●" : "○"}</span>
            {label}
          </li>
        ))}
      </ol>
      {elapsed > estimate + 15 && (
        <p className="mt-3 text-xs text-slate-500">Taking a little longer than usual. Larger batches can take up to 2 minutes, so please keep this page open.</p>
      )}
    </div>
  );
}
