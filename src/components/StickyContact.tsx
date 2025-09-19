import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle } from 'lucide-react';

const StickyContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // Action disabled for now
    console.log("WhatsApp click (disabled)");
  };

  const handleCallClick = () => {
    // Action disabled for now
    console.log("Call click (disabled)");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="relative">
            {/* Main Button */}
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full shadow-2xl pulse-glow"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2 px-6 py-4">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Contacto</span>
              </div>
            </motion.button>

            {/* Expanded Options */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  className="absolute bottom-full right-0 mb-4 bg-black/90 backdrop-blur-md rounded-xl border border-gray-700 p-4 min-w-[200px]"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-semibold">Contáctanos</h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.button
                      onClick={handleWhatsAppClick}
                      className="w-full flex items-center space-x-3 p-3 bg-green-600 hover:bg-green-700 rounded-lg text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </motion.button>
                    
                    <motion.button
                      onClick={handleCallClick}
                      className="w-full flex items-center space-x-3 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>Llamar</span>
                    </motion.button>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-600">
                    <p className="text-gray-300 text-sm text-center">
                      +56 9 1234 5678
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyContact;
