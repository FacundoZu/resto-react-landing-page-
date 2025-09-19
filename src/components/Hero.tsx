import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Star, Wine, ChefHat } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotatingAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-orange-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 text-orange-500/20 w-16 h-16"
          animate={floatingAnimation}
        >
          <Utensils className="w-full h-full" />
        </motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-orange-400/20 w-12 h-12"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        >
          <Star className="w-full h-full" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-20 text-orange-300/20 w-14 h-14"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
        >
          <Wine className="w-full h-full" />
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-10 text-orange-600/20 w-20 h-20"
          animate={rotatingAnimation}
        >
          <div className="w-full h-full border-4 border-current rounded-full" />
        </motion.div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 3D Animated Icon */}
        <motion.div 
          className="mb-8 mx-auto w-32 h-32 relative"
          initial={{ scale: 0, rotateY: 0 }}
          animate={{ scale: 1, rotateY: 360 }}
          transition={{ 
            scale: { duration: 1, ease: "easeOut" },
            rotateY: { duration: 2, ease: "easeInOut" }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-orange-600 rounded-full shadow-2xl"
            animate={{
              boxShadow: [
                "0 0 30px rgba(249, 115, 22, 0.5)",
                "0 0 60px rgba(249, 115, 22, 0.8)",
                "0 0 30px rgba(249, 115, 22, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute inset-4 bg-white rounded-full flex items-center justify-center"
            animate={floatingAnimation}
          >
            <ChefHat className="w-16 h-16 text-orange-500" />
          </motion.div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            El Sabor
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Auténtico
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Donde cada plato cuenta una historia y cada momento se convierte en un recuerdo inolvidable
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection('#menu')}
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
              background: "linear-gradient(45deg, #f97316, #dc2626)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Nuestro Menú
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('#contacto')}
            className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-orange-500 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
