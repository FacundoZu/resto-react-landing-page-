import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Car, Train } from 'lucide-react';

const Location: React.FC = () => {
  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, label: "Teléfono", value: "+56 9 1234 5678" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "reservas@elsaborautentico.cl" },
    { icon: <MapPin className="w-5 h-5" />, label: "Dirección", value: "Av. Las Condes 1234, Las Condes, Salta" }
  ];

  const schedules = [
    { day: "Lunes - Jueves", hours: "12:00 - 23:00" },
    { day: "Viernes - Sábado", hours: "12:00 - 01:00" },
    { day: "Domingo", hours: "12:00 - 22:00" }
  ];

  const transportInfo = [
    { icon: <Car className="w-5 h-5" />, text: "Estacionamiento gratuito disponible" },
    { icon: <Train className="w-5 h-5" />, text: "5A - 2 cuadras" }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-gradient-to-bl from-orange-900/20 via-black to-gray-800">
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
            Ubicación & <span className="text-orange-500">Horarios</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nos encontramos en el corazón de Las Condes, fácil acceso y ambiente excepcional
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-80 bg-gradient-to-br from-orange-500/20 to-red-600/20 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Visítanos!</h3>
                <p className="text-gray-300">Av. Las Condes 1234, Las Condes</p>
                <motion.button
                  onClick={() => {}}
                  className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver en Google Maps
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-orange-500">{info.icon}</span>
                    <div>
                      <span className="text-white font-medium">{info.label}: </span>
                      <span>{info.value}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-white">Horarios de Atención</h3>
              </div>
              <div className="space-y-3">
                {schedules.map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-white font-medium">{schedule.day}</span>
                    <span className="text-orange-500">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transport */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Cómo Llegar</h3>
              <div className="space-y-4">
                {transportInfo.map((transport, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="text-orange-500">{transport.icon}</span>
                    <span>{transport.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
