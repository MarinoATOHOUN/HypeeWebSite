import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const NetworkBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const nodeCount = 50;
  const connectionDistance = 150;

  useEffect(() => {
    // Initialize nodes with random positions and velocities
    const initialNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
    }));
    setNodes(initialNodes);

    // Animate nodes
    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          let newX = node.x + node.vx;
          let newY = node.y + node.vy;
          let newVx = node.vx;
          let newVy = node.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return { ...node, x: newX, y: newY, vx: newVx, vy: newVy };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calculate connections between nearby nodes
  const connections = nodes.flatMap((node, i) =>
    nodes.slice(i + 1).map((otherNode) => {
      const dx = (node.x - otherNode.x);
      const dy = (node.y - otherNode.y);
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < connectionDistance / 10) {
        return {
          x1: node.x,
          y1: node.y,
          x2: otherNode.x,
          y2: otherNode.y,
          opacity: 1 - distance / (connectionDistance / 10),
        };
      }
      return null;
    }).filter(Boolean)
  );

  return (
    <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--hypee-violet))" />
            <stop offset="50%" stopColor="hsl(var(--hypee-blue))" />
            <stop offset="100%" stopColor="hsl(var(--hypee-pink))" />
          </linearGradient>
          <radialGradient id="glowGradient">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {connections.map((conn, i) => 
          conn && (
            <motion.line
              key={`line-${i}`}
              x1={conn.x1}
              y1={conn.y1}
              x2={conn.x2}
              y2={conn.y2}
              stroke="url(#nodeGradient)"
              strokeWidth="0.1"
              opacity={conn.opacity * 0.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            />
          )
        )}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Glow effect */}
            <circle
              cx={node.x}
              cy={node.y}
              r="1.5"
              fill="url(#glowGradient)"
            />
            {/* Node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="0.4"
              fill="url(#nodeGradient)"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* African map outline subtle effect */}
        <motion.path
          d="M 30,20 L 35,15 L 40,18 L 45,15 L 50,20 L 55,18 L 60,25 L 62,35 L 60,45 L 58,55 L 52,65 L 45,70 L 38,68 L 32,62 L 28,52 L 26,42 L 28,30 Z"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.15"
          opacity="0.15"
          animate={{
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
};
