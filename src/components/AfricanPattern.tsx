import { motion } from "framer-motion";

export const AfricanPattern = () => {
  const patterns = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
      {patterns.map((pattern) => (
        <motion.div
          key={pattern.id}
          className="absolute"
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            width: pattern.size,
            height: pattern.size,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: pattern.duration,
            delay: pattern.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M50 10 L90 50 L50 90 L10 50 Z"
              fill="currentColor"
              className="text-primary"
            />
            <circle cx="50" cy="50" r="15" fill="currentColor" className="text-secondary" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
