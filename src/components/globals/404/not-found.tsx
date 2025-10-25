"use client";


import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const glowVariants = {
        initial: { scale: 1, opacity: 0.5 },
        animate: {
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
             
        <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden relative"> 
            {/* Animated background blobs 
        <div className="min-h-screen bg-linear-to-tr from-purple-900 via-purple-700 to-orange-500 flex items-center justify-center p-4 overflow-hidden relative">
            
            
            */}
            <motion.div
                className="absolute top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
            />
            <motion.div
                className="absolute bottom-20 right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 1 }}
            />

            <motion.div
                className="relative z-10 text-center "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* 404 Number with glow effect */}
                <div className="relative inline-block">
                    <motion.div
                        className="absolute inset-0 blur-3xl"
                        variants={glowVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <div className="text-9xl font-black text-black!">404</div>
                    </motion.div>
                    <motion.h1
                        className="text-9xl font-black text-black relative"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                    >
                        404
                    </motion.h1>
                </div>

                {/* Message */}
                <motion.div variants={itemVariants} className="mt-8 space-y-4">
                    <motion.h2
                        className="text-4xl font-bold text-black"
                        whileHover={{ scale: 1.02 }}
                    >
                        Page Not Found
                    </motion.h2>
                    <motion.p
                        className="text-xl text-blue-900 max-w-md mx-auto"
                        variants={itemVariants}
                    >
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                    </motion.p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 flex flex-wrap gap-4 justify-center"
                >
                    <motion.button
                        className="flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-full font-semibold shadow-lg"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </motion.button>

                    {/* <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-black rounded-full font-semibold shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} />
            Home Page
          </motion.button> */}

                    {/* <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-black rounded-full font-semibold border-2 border-white/30"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={20} />
            Search
          </motion.button> */}
                </motion.div>

                {/* Animated decorative elements */}
                {/* <div className="mt-16 flex justify-center gap-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-white"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div> */}
            </motion.div>
        </div>
    );
}