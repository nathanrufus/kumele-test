// src/components/figma/MatchList.tsx
const matches = [
  {
    id: 1,
    teams: "Team A vs Team B",
    time: "18:30",
    tag: "Live",
  },
  {
    id: 2,
    teams: "Team C vs Team D",
    time: "20:00",
    tag: "Upcoming",
  },
];

export function MatchList() {
  return (
    <div className="mt-6 space-y-3">
      {matches.map((m) => (
        <div
          key={m.id}
          className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <div>
            <div className="font-medium">{m.teams}</div>
            <div className="text-[0.7rem] text-slate-500 dark:text-slate-400">
              Kick-off {m.time}
            </div>
          </div>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            {m.tag}
          </span>
        </div>
      ))}
    </div>
  );
}
