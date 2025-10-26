import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Calendar, Clock, Sparkles, Music, Users, Sparkle } from 'lucide-react';
import BlessingsModal from './components/BlessingsModal';
import FlowerRain from './components/FlowerRain';

function App() {
  const [showInvitation, setShowInvitation] = useState(false);
  const [isBlessingsModalOpen, setIsBlessingsModalOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showFlowerRain, setShowFlowerRain] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    setShowFlowerRain(true);
    
    setTimeout(() => {
      setShowInvitation(true);
    }, 500);
    
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Audio autoplay prevented by browser');
      });
      setIsMusicPlaying(true);
    }

    setTimeout(() => {
      setShowFlowerRain(false);
    }, 3000);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const ceremonies = [
    {
      name: 'Maatrika Pujan',
      date: '16 November 2025',
      day: 'Sunday',
      icon: <Sparkles className="text-amber-600" size={24} />
    },
    {
      name: 'Mandap Aaroopan',
      date: '20 November 2025',
      day: 'Thursday',
      icon: <Sparkles className="text-amber-600" size={24} />
    },
    {
      name: 'Wedding Ceremony & Reception',
      date: '22 November 2025',
      day: 'Saturday',
      time: '7:00 PM onwards',
      icon: <Heart className="text-rose-600 fill-rose-600" size={24} />
    },
    {
      name: 'Bidai',
      date: '23 November 2025',
      day: 'Sunday',
      icon: <Sparkles className="text-amber-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-amber-50 relative overflow-hidden">
      <FlowerRain show={showFlowerRain} />
      
      <audio ref={audioRef} loop>
        <source src="/music/wedding.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence mode="wait">
        {!showInvitation ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-rose-900/20 to-amber-900/20" />
            
            {/* Floating sparkles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Sparkle className="text-amber-400" size={24} />
              </motion.div>
            ))}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="mb-8 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-64 h-64 rounded-full gold-gradient opacity-20 blur-3xl"
                  />
                </div>

                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-amber-600 overflow-hidden">
                  {/* Animated border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    animate={{
                      background: [
                        'radial-gradient(circle at 0% 0%, rgba(220, 180, 55, 0.3), transparent)',
                        'radial-gradient(circle at 100% 100%, rgba(220, 180, 55, 0.3), transparent)',
                        'radial-gradient(circle at 0% 100%, rgba(220, 180, 55, 0.3), transparent)',
                        'radial-gradient(circle at 100% 0%, rgba(220, 180, 55, 0.3), transparent)',
                        'radial-gradient(circle at 0% 0%, rgba(220, 180, 55, 0.3), transparent)',
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="mb-6"
                    >
                      <Heart className="w-16 h-16 mx-auto text-rose-600 fill-rose-600 drop-shadow-lg" />
                    </motion.div>

                    <motion.h1
                      className="font-script text-6xl md:text-7xl text-gray-800 mb-4"
                      animate={{
                        textShadow: [
                          '0 0 10px rgba(185, 28, 28, 0.3)',
                          '0 0 20px rgba(185, 28, 28, 0.5)',
                          '0 0 10px rgba(185, 28, 28, 0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Nisha <span className="text-rose-600">&</span> Devendra
                    </motion.h1>

                    <div className="flex items-center justify-center gap-2 text-amber-800 mb-8">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      >
                        <Calendar size={24} />
                      </motion.div>
                      <p className="text-2xl font-medium">22 November 2025</p>
                    </div>

                    <motion.button
                      onClick={handleOpenInvitation}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(128, 0, 32, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="maroon-gradient text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
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
                      <span className="relative z-10">Open Invitation</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-100 to-transparent" />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-12 px-4"
          >
            {showInvitation && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={toggleMusic}
                className="fixed top-6 right-6 z-40 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Music className={`${isMusicPlaying ? 'text-rose-600' : 'text-gray-400'}`} size={24} />
              </motion.button>
            )}

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-600 relative"
              >
                {/* Animated border effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 rounded-3xl opacity-75 blur-sm -z-10"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                <div className="relative bg-gradient-to-br from-amber-600 via-rose-600 to-amber-600 text-white py-16 px-8 text-center overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-2 gold-gradient" />
                  
                  {/* Floating sparkles in header */}
                  {[...Array(15)].map((_, i) => (
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
                      <Sparkle className="text-yellow-200" size={16} />
                    </motion.div>
                  ))}

                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-8xl mb-4 relative z-10"
                  >
                    ॐ
                  </motion.div>

                  <motion.h2
                    className="font-script text-5xl md:text-6xl mb-6 text-shadow relative z-10"
                    animate={{
                      textShadow: [
                        '2px 2px 4px rgba(0, 0, 0, 0.3)',
                        '2px 2px 8px rgba(255, 255, 255, 0.5)',
                        '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Wedding Invitation
                  </motion.h2>

                  <div className="max-w-2xl mx-auto space-y-4 text-lg relative z-10">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Together with their families
                    </motion.p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="text-center mb-12">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.4, type: "spring" }}
                    >
                      <motion.h3
                        className="font-script text-6xl text-gray-800 mb-2"
                        animate={{
                          textShadow: [
                            '0 0 0px rgba(185, 28, 28, 0)',
                            '0 0 20px rgba(185, 28, 28, 0.5)',
                            '0 0 0px rgba(185, 28, 28, 0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Nisha
                      </motion.h3>
                      <p className="text-gray-600 mb-2">Daughter of</p>
                      <p className="text-gray-700 font-medium">Shri Swaminath Ji & Smt. Ramrati Patel</p>
                      <p className="text-sm text-gray-500">Nalkheda, Agar Malwa (M.P.)</p>
                    </motion.div>

                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="my-8"
                    >
                      <Heart className="w-12 h-12 mx-auto text-rose-600 fill-rose-600 drop-shadow-lg" />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6, type: "spring" }}
                    >
                      <motion.h3
                        className="font-script text-6xl text-gray-800 mb-2"
                        animate={{
                          textShadow: [
                            '0 0 0px rgba(220, 180, 55, 0)',
                            '0 0 20px rgba(220, 180, 55, 0.5)',
                            '0 0 0px rgba(220, 180, 55, 0)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Devendra
                      </motion.h3>
                      <p className="text-gray-600 mb-2">Son of</p>
                      <p className="text-gray-700 font-medium">Shri Anarsingh Ji & Smt. Anjani Prajapat</p>
                      <p className="text-sm text-gray-500">Village Telyakhedi, Post Singhana, Dist. Sehore (M.P.)</p>
                    </motion.div>
                  </div>

                  <div className="border-t-2 border-b-2 border-amber-600 py-8 my-12">
                    <h4 className="font-script text-3xl text-center text-gray-800 mb-8">Ceremony Schedule</h4>

                    <div className="grid gap-6 md:grid-cols-2">
                      {ceremonies.map((ceremony, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6 border-2 border-amber-300 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                          whileHover={{ scale: 1.02 }}
                        >
                          {/* Hover glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-amber-200/0 to-rose-200/0 group-hover:from-amber-200/20 group-hover:to-rose-200/20 transition-all"
                          />
                          
                          <div className="flex items-start gap-4 relative z-10">
                            <motion.div
                              className="mt-1"
                              animate={{
                                rotate: [0, 360],
                              }}
                              transition={{
                                duration: 20 + Math.random() * 10,
                                repeat: Infinity,
                                ease: 'linear',
                              }}
                            >
                              {ceremony.icon}
                            </motion.div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-lg text-gray-800 mb-2">{ceremony.name}</h5>
                              <p className="text-gray-700 font-medium">{ceremony.date}</p>
                              <p className="text-gray-600 text-sm">{ceremony.day}</p>
                              {ceremony.time && (
                                <p className="text-amber-700 font-medium mt-1 flex items-center gap-1">
                                  <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  >
                                    <Clock size={16} />
                                  </motion.div>
                                  {ceremony.time}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 border-4 border-rose-300 mb-8 relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        background: [
                          'radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.1), transparent)',
                          'radial-gradient(circle at 100% 100%, rgba(220, 180, 55, 0.1), transparent)',
                          'radial-gradient(circle at 0% 0%, rgba(244, 63, 94, 0.1), transparent)',
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MapPin className="text-rose-600 flex-shrink-0" size={32} />
                      </motion.div>
                      <div>
                        <h4 className="font-script text-3xl text-gray-800 mb-3">Venue</h4>
                        <p className="text-xl font-semibold text-gray-700 mb-2">Yashraj Marriage Garden</p>
                        <p className="text-gray-600">Station Road, Subhash Nagar</p>
                        <p className="text-gray-600">Shajapur (M.P.)</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="text-center"
                  >
                    <motion.button
                      onClick={() => setIsBlessingsModalOpen(true)}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(128, 0, 32, 0.5)' }}
                      whileTap={{ scale: 0.95 }}
                      className="maroon-gradient text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-3 relative overflow-hidden"
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
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      >
                        <Users size={24} />
                      </motion.div>
                      <span className="relative z-10">Bless the Couple</span>
                    </motion.button>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-br from-amber-600 via-rose-600 to-amber-600 text-white text-center py-8 px-4 relative overflow-hidden">
                  {/* Floating particles in footer */}
                  {[...Array(10)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      <Sparkle className="text-yellow-200" size={16} />
                    </motion.div>
                  ))}
                  
                  <p className="font-script text-2xl mb-2 relative z-10">With blessings from both families</p>
                  <p className="text-sm opacity-90 relative z-10">We look forward to celebrating with you</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BlessingsModal
        isOpen={isBlessingsModalOpen}
        onClose={() => setIsBlessingsModalOpen(false)}
      />
    </div>
  );
}

export default App;
