// src/app/figma-ai/page.tsx
import { FigmaHeader } from "@/components/figma/FigmaHeader";
import { MatchFilters } from "@/components/figma/MatchFilters";
import { MatchList } from "@/components/figma/MatchList";

export default function FigmaAIPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        Figma → Code (AI-Assisted) Demo
      </h1>
      <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        This layout represents one screen from the app, implemented by first
        generating React/Tailwind markup from Figma via an AI tool, then
        refactoring it into smaller reusable components.
      </p>

      <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <FigmaHeader />
        <MatchFilters />
        <MatchList />
      </div>
    </section>
  );
}
