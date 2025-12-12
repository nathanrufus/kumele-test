// src/components/figma/FigmaHeader.tsx
export function FigmaHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          Today&apos;s Matches
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Example layout generated from Figma, then refactored.
        </p>
      </div>
      <button className="rounded-full border border-slate-300 px-3 py-1 text-[0.7rem] font-medium dark:border-slate-700">
        Filters
      </button>
    </header>
  );
}
