import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Sparkles, Rocket, TrendingUp, Award } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Announcement = {
  icon: LucideIcon;
  title: string;
  text: string;
  color: string;
};

const announcements: Announcement[] = [
  {
    icon: Rocket,
    title: "Nouveau nom",
    text: "HypeeFun devient HypeeConnect : le réseau social qui façonne l'avenir de l'Afrique.",
    color: "text-violet-400",
  },
  {
    icon: Award,
    title: "Écosystème",
    text: "Hypee dispose désormais de plus de 4 plateformes de réseaux sociaux.",
    color: "text-pink-400",
  },
  {
    icon: TrendingUp,
    title: "Storya",
    text: "Storya devient l'outil préféré des jeunes écrivains.",
    color: "text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Créateurs",
    text: "Toutes les plateformes Hypee intègrent bientôt la rémunération des contenus.",
    color: "text-purple-400",
  },
  {
    icon: Rocket,
    title: "À venir",
    text: "Lancement prochain d'un réseau social qui connecte apprenants et étudiants d'Afrique.",
    color: "text-cyan-400",
  },
];

export const NewsMarquee = () => {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const announcement = useMemo(() => announcements[index % announcements.length], [index]);

  useEffect(() => {
    let canceled = false;
    let showTimer: number | undefined;
    let hideTimer: number | undefined;

    const randomBetween = (minMs: number, maxMs: number) =>
      Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;

    const loop = () => {
      const idleDelay = randomBetween(9000, 22000);
      const visibleDuration = randomBetween(4500, 6500);

      showTimer = window.setTimeout(() => {
        if (canceled) return;
        setVisible(true);

        hideTimer = window.setTimeout(() => {
          if (canceled) return;
          setVisible(false);
          setIndex((i) => (i + 1) % announcements.length);
          loop();
        }, visibleDuration);
      }, idleDelay);
    };

    loop();

    return () => {
      canceled = true;
      if (showTimer) window.clearTimeout(showTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, []);

  const Icon = announcement.icon;

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <div className="absolute left-1/2 bottom-6 -translate-x-1/2 sm:left-auto sm:bottom-auto sm:translate-x-0 sm:right-6 sm:top-28">
        <AnimatePresence mode="wait">
          {visible && (
            <motion.div
              key={index}
              initial={
                prefersReducedMotion
                  ? { opacity: 0, y: -8 }
                  : { opacity: 0, y: -10, x: 14, rotate: 7, scale: 0.98 }
              }
              animate={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0, y: -8 }
                  : { opacity: 0, y: -10, x: 14, rotate: -6, scale: 0.98 }
              }
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="pointer-events-auto w-[min(92vw,420px)]"
            >
              <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/70 backdrop-blur-md shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent" />
                <div className="relative p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-background/50 border border-border/60">
                      <Icon className={`h-5 w-5 ${announcement.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-heading font-semibold truncate">{announcement.title}</p>
                        <span className="text-xs text-muted-foreground">Hypee</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-snug">
                        {announcement.text}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-primary/80" />
                    <span>Notification</span>
                    <span className="opacity-40">•</span>
                    <span>À l’instant</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
