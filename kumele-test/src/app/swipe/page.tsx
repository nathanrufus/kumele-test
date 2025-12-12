// src/app/swipe/page.tsx
import { SwipeDeck } from "@/components/SwipeDeck";

export default function SwipePage() {
  return (
    <section className="flex flex-col items-center gap-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Swipe Animation Demo
        </h1>
        <p className="max-w-md text-xs text-slate-600 dark:text-slate-300">
          Swipe the card left or right with your mouse or finger. The behaviour
          (threshold, velocity, snap-back, and exit) is tuned to match the
          reference video.
        </p>
      </div>
      <SwipeDeck />
    </section>
  );
}
