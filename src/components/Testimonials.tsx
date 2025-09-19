import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Food Blogger",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1a1a1a/f97316/png?text=M",
      rating: 5,
      text: "Sin duda, la mejor experiencia gastronómica de la ciudad. Cada plato es una obra de arte y el servicio es impecable. ¡Volveré sin duda!"
    },
    {
      name: "Carlos Mendoza",
      role: "Empresario",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1a1a1a/f97316/png?text=C",
      rating: 5,
      text: "El lugar perfecto para cenas de negocios. Ambiente elegante, comida excepcional y un servicio que supera todas las expectativas."
    },
    {
      name: "Ana Rodríguez",
      role: "Chef Profesional",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1a1a1a/f97316/png?text=A",
      rating: 5,
      text: "Como chef, puedo decir que la calidad de los ingredientes y la técnica culinaria son extraordinarias. Un verdadero templo gastronómico."
    },
    {
      name: "Diego Pérez",
      role: "Cliente Frecuente",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/100x100/1a1a1a/f97316/png?text=D",
      rating: 5,
      text: "Llevo años viniendo y siempre me sorprenden. La innovación constante en el menú y la calidez del equipo hacen de cada visita algo especial."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-orange-900/20">
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
            Lo que dicen nuestros <span className="text-orange-500">clientes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Miles de personas han vivido experiencias inolvidables en nuestro restobar
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-orange-500/30" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-8 text-white inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="text-4xl font-bold">4.9</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-orange-100">Basado en más de 1,200 reseñas</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
