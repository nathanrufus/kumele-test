// src/components/figma/MatchFilters.tsx
const filters = ["All", "Live", "Upcoming", "Completed"];

export function MatchFilters() {
  return (
    <div className="mt-4 flex gap-2 overflow-x-auto text-xs">
      {filters.map((f) => (
        <button
          key={f}
          className="whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] font-medium text-white dark:bg-slate-700"
        >
          {f}
        </button>
      ))}
    </div>
  );
}
