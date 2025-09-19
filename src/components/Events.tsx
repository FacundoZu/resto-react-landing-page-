import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Noche de Jazz & Cocina",
      date: "15 de Febrero",
      time: "20:00 - 23:00",
      capacity: "50 personas",
      description: "Una velada mágica con música en vivo y menú especial de degustación",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Noche+de+Jazz"
    },
    {
      title: "Cena Maridaje con Vinos",
      date: "22 de Febrero",
      time: "19:30 - 22:30",
      capacity: "30 personas",
      description: "Experiencia gastronómica única con sommelier y 5 tiempos",
      image: "https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Cena+Maridaje"
    }
  ];

  const promotions = [
    {
      title: "Happy Hour",
      subtitle: "Lunes a Jueves",
      discount: "30% OFF",
      description: "En bebidas y appetizers",
      time: "17:00 - 19:00"
    },
    {
      title: "Menú Ejecutivo",
      subtitle: "De Lunes a Viernes",
      discount: "$15.990",
      description: "Entrada + Principal + Postre",
      time: "12:00 - 16:00"
    }
  ];

  return (
    <section id="eventos" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
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
            Eventos & <span className="text-orange-500">Promociones</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            No te pierdas nuestros eventos especiales y promociones exclusivas
          </motion.p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Próximos Eventos
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Próximamente
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-white font-bold text-xl mb-3">{event.title}</h4>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-orange-500" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promotions */}
        <div>
          <motion.h3 
            className="text-3xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Promociones Actuales
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-8 text-white text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-2xl font-bold mb-2">{promo.title}</h4>
                <p className="text-orange-100 mb-4">{promo.subtitle}</p>
                <div className="text-4xl font-bold mb-2">{promo.discount}</div>
                <p className="text-orange-100 mb-4">{promo.description}</p>
                <div className="flex items-center justify-center space-x-2 text-orange-100">
                  <Clock className="w-4 h-4" />
                  <span>{promo.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
