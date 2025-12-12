"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const CARDS = [
  { id: 1, title: "Match Day 1", subtitle: "Team A vs Team B" },
  { id: 2, title: "Match Day 2", subtitle: "Team C vs Team D" },
  { id: 3, title: "Match Day 3", subtitle: "Team E vs Team F" },
];

const SWIPE_THRESHOLD = 130; // distance threshold in px
const VELOCITY_THRESHOLD = 800; // px/s

export function SwipeDeck() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  const activeCard = CARDS[index];
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-18, 18]);

  const handleDragEnd = (
    _event: any,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    // Decide if swipe is strong enough based on distance or velocity
    if (offsetX > SWIPE_THRESHOLD || velocityX > VELOCITY_THRESHOLD) {
      setDirection("right");
      setIndex((prev) => Math.min(prev + 1, CARDS.length));
    } else if (
      offsetX < -SWIPE_THRESHOLD ||
      velocityX < -VELOCITY_THRESHOLD
    ) {
      setDirection("left");
      setIndex((prev) => Math.min(prev + 1, CARDS.length));
    } else {
      setDirection(null); // let card snap back via spring
    }
  };

  if (!activeCard) {
    return (
      <div className="flex h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-400/60 bg-slate-50 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-400">
        <div>No more cards 🎉</div>
        <div className="mt-1 text-xs">
          Resetting / looping can be added to match product behaviour.
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-80 w-full max-w-xs">
      <AnimatePresence initial={false}>
        <motion.div
          key={activeCard.id}
          style={{ x, rotate }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex flex-col justify-between rounded-3xl bg-slate-900 p-6 text-white shadow-2xl dark:bg-slate-800 touch-pan-y"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{
            opacity: 0,
            x: direction === "right" ? 500 : -500,
            rotate: direction === "right" ? 25 : -25,
            transition: { duration: 0.22 },
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <div className="space-y-2">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-slate-300/70">
              Upcoming Match
            </p>
            <h2 className="text-2xl font-semibold">{activeCard.title}</h2>
            <p className="text-sm text-slate-300">{activeCard.subtitle}</p>
          </div>

          <div className="flex justify-between text-[0.7rem] text-slate-300/80">
            <span>Swipe left ❌</span>
            <span>Swipe right ✅</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
