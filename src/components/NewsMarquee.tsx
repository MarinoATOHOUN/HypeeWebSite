import { motion } from "framer-motion";
import { Sparkles, Rocket, TrendingUp, Award } from "lucide-react";

const announcements = [
  {
    icon: Rocket,
    text: "🎉 HypeeFun devient HypeeConnect le réseau social qui façonne l'avenir de l'Afrique",
    color: "text-violet-400"
  },
  {
    icon: Award,
    text: "🏆 Hypee dispose désormais de plus de 4 plateforme de réseaux sociaux",
    color: "text-pink-400"
  },
  {
    icon: TrendingUp,
    text: "📈 Storya devient l'outil préféré des jeunes écrivains !",
    color: "text-blue-400"
  },
  {
    icon: Sparkles,
    text: "✨ Toute les plateforme de Hypee intègrent très prochainement la rémunération de contenues",
    color: "text-purple-400"
  },
  {
    icon: Rocket,
    text: "🚀 Lancement prochain d'un réseau social qui connecte les apprenant et étudiants d'Afrique",
    color: "text-cyan-400"
  }
];

export const NewsMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-blue-600/20 backdrop-blur-sm border-y border-primary/20 py-4">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />
      
      <div className="flex">
        <motion.div
          className="flex gap-12 items-center whitespace-nowrap"
          animate={{
            x: [0, -1500],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...announcements, ...announcements, ...announcements].map((announcement, index) => {
            const Icon = announcement.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-2 bg-background/40 backdrop-blur-md rounded-full border border-primary/20 shadow-lg"
              >
                <Icon className={`w-5 h-5 ${announcement.color}`} />
                <span className="text-foreground font-medium text-sm md:text-base">
                  {announcement.text}
                </span>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
