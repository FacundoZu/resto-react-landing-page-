import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito hacer reserva?",
      answer: "Recomendamos hacer reserva especialmente para fines de semana y eventos especiales. Puedes contactarnos llamando al +56 9 1234 5678."
    },
    {
      question: "¿Tienen opciones vegetarianas y veganas?",
      answer: "Sí, contamos con una amplia variedad de opciones vegetarianas y veganas en nuestro menú. Nuestro chef puede adaptar platos según requerimientos alimentarios específicos."
    },
    {
      question: "¿Aceptan tarjetas de crédito?",
      answer: "Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), efectivo y transferencias electrónicas."
    },
    {
      question: "¿Tienen estacionamiento?",
      answer: "Sí, contamos con estacionamiento gratuito para nuestros clientes. También estamos ubicados a solo 2 cuadras del Metro Las Condes."
    },
    {
      question: "¿Organizan eventos privados?",
      answer: "Absolutamente. Organizamos eventos privados, celebraciones empresariales, cumpleaños y ocasiones especiales. Contáctanos para personalizar tu evento."
    },
    {
      question: "¿Cuál es su política de cancelación de reservas?",
      answer: "Las reservas pueden cancelarse hasta 2 horas antes sin costo. Para eventos especiales, la política puede variar según el tipo de evento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const scrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-black to-orange-900/20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Preguntas <span className="text-orange-500">Frecuentes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Encuentra respuestas a las dudas más comunes sobre nuestro restobar
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 overflow-hidden border border-gray-700 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full text-left p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors duration-300 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-orange-500" />
                  </motion.div>
                </div>
              </motion.button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="p-6 bg-gray-900/50">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-300 mb-6">¿No encontraste lo que buscabas?</p>
          <motion.button
            onClick={scrollToContact}
            className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 font-semibold"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctanos Directamente
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
