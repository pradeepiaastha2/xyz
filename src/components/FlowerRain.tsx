import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Flower {
  id: number;
  x: number;
  rotation: number;
  delay: number;
  size: number;
}

export default function FlowerRain({ show }: { show: boolean }) {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    if (show) {
      const newFlowers: Flower[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        rotation: Math.random() * 360,
        delay: Math.random() * 3,
        size: Math.random() * 30 + 20,
      }));
      setFlowers(newFlowers);

      const interval = setInterval(() => {
        setFlowers((prev) =>
          prev.map((flower) => ({
            ...flower,
            x: Math.random() * 100,
            rotation: Math.random() * 360,
            size: Math.random() * 30 + 20,
          }))
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [show]);

  const flowerEmojis = ['🌸', '🌺', '🌼', '🌸', '🌻', '🌷', '🌸'];

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {flowers.map((flower) => (
            <motion.div
              key={flower.id}
              initial={{
                y: -50,
                opacity: 0,
                x: `${flower.x}%`,
              }}
              animate={{
                y: window.innerHeight + 200,
                opacity: [0, 1, 1, 0],
                x: `${flower.x + (Math.random() - 0.5) * 20}%`,
                rotate: flower.rotation + 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: flower.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute"
              style={{
                fontSize: `${flower.size}px`,
              }}
            >
              {flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]}
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
}

