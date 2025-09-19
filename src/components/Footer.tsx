import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: '+56 9 1234 5678', href: 'tel:+56912345678' },
    { icon: <Mail className="w-5 h-5" />, text: 'reservas@elsaborautentico.cl', href: 'mailto:reservas@elsaborautentico.cl' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Av. Las Condes 1234, Santiago', href: '#' }
  ];

  return (
    <footer id="contacto" className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <ChefHat className="text-orange-500 w-8 h-8" />
              <span className="text-white font-bold text-2xl">El Sabor Auténtico</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Desde 2015, creamos experiencias gastronómicas únicas que despiertan todos tus sentidos. 
              Ven y descubre por qué somos el restobar favorito de la ciudad.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Contacto</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-orange-500">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-white">Horarios</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lunes - Jueves: 12:00 - 23:00</p>
                <p>Viernes - Sábado: 12:00 - 01:00</p>
                <p>Domingo: 12:00 - 22:00</p>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-orange-500">Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Suscríbete para recibir ofertas especiales, eventos exclusivos y novedades de nuestro menú.
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-500 focus:outline-none transition-colors duration-300"
              />
              <motion.button
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Suscribirse
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-gray-400 text-center md:text-left">
            © 2025 El Sabor Auténtico. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
              Términos de Uso
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
