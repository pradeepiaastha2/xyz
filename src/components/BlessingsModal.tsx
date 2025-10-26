import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkle } from 'lucide-react';

interface BlessingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlessingsModal({ isOpen, onClose }: BlessingsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl shadow-2xl max-w-md w-full p-8 relative border-4 border-amber-600 overflow-hidden">
              {/* Animated sparkles in modal */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  <Sparkle className="text-amber-400" size={16} />
                </motion.div>
              ))}

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="text-center relative z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="inline-block mb-4"
                >
                  <Heart size={64} className="text-rose-600 fill-rose-600" />
                </motion.div>

                <h3 className="font-script text-4xl text-gray-800 mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-gray-700 mb-6">
                  Your blessings mean the world to us
                </p>

                <div className="space-y-2 mb-6">
                  <p className="font-script text-2xl text-amber-800">Nisha & Devendra</p>
                  <p className="text-sm text-gray-600">look forward to your presence</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(128, 0, 32, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="maroon-gradient text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                      ],
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <span className="relative z-10">Close</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
