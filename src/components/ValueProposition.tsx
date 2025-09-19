import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users } from 'lucide-react';

const ValueProposition: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Calidad Premium",
      description: "Ingredientes frescos seleccionados diariamente de los mejores proveedores locales"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Experiencia Única",
      description: "Ambiente acogedor diseñado para crear momentos especiales e inolvidables"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Servicio Excepcional",
      description: "Equipo profesional comprometido con brindar la mejor atención personalizada"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
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
            ¿Por qué <span className="text-orange-500">elegirnos</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desde 2015, hemos perfeccionado cada detalle para ofrecerte una experiencia gastronómica excepcional
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-orange-500 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)"
              }}
            >
              <motion.div 
                className="text-orange-500 mb-6 flex justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "9+", label: "Años de Experiencia" },
            { number: "50k+", label: "Clientes Satisfechos" },
            { number: "15", label: "Premios Gastronómicos" },
            { number: "4.9", label: "Rating Promedio" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-orange-500 mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
