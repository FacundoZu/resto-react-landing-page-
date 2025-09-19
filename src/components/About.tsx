import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cocina Gourmet",
      description: "Platos elaborados con los mejores ingredientes y técnicas culinarias de vanguardia"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para crear momentos especiales con tus seres queridos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Servicio Excepcional",
      description: "Nuestro equipo está dedicado a brindarte una experiencia gastronómica única"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Tradición & Innovación",
      description: "Fusionamos recetas tradicionales con técnicas modernas de cocina"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            Nuestra <span className="text-orange-500">Historia</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Desde 2015, hemos sido el corazón gastronómico de la ciudad, combinando la pasión por la cocina 
            auténtica con un ambiente que invita a vivir momentos únicos e inolvidables.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Una Experiencia Culinaria Auténtica
            </motion.h3>
            <motion.p 
              className="text-gray-300 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nuestro chef ejecutivo, con más de 20 años de experiencia en restaurantes de prestigio internacional, 
              ha creado un menú que celebra los sabores locales mientras incorpora técnicas innovadoras de la 
              alta cocina moderna.
            </motion.p>
            <motion.p 
              className="text-gray-300 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Cada ingrediente es cuidadosamente seleccionado de productores locales, garantizando frescura y 
              calidad en cada bocado. Nuestro compromiso es ofrecer una experiencia gastronómica que despierte 
              todos tus sentidos.
            </motion.p>
            <motion.button
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Conoce al Chef
            </motion.button>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <motion.div 
                  className="text-6xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  9+
                </motion.div>
                <p className="text-white text-xl font-semibold mb-4">Años de Excelencia</p>
                <p className="text-white/90">
                  Reconocidos como uno de los mejores restaurantes de la región
                </p>
              </div>
            </motion.div>
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-8 h-8 text-yellow-800" />
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                borderColor: "#f97316"
              }}
            >
              <motion.div 
                className="text-orange-500 mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-white font-semibold text-xl mb-3">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
