import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Ambiente",
      title: "Ambiente Acogedor",
      description: "Interior elegante y moderno"
    },
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Platos",
      title: "Platos Gourmet",
      description: "Presentación excepcional"
    },
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Cocina",
      title: "Cocina Abierta",
      description: "Experiencia interactiva"
    },
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Eventos",
      title: "Eventos Especiales",
      description: "Momentos únicos"
    },
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Terraza",
      title: "Terraza",
      description: "Vista espectacular"
    },
    {
      url: "https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/1a1a1a/f97316/png?text=Bar",
      title: "Bar Premium",
      description: "Cócteles artesanales"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-black via-gray-900 to-orange-900/20">
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
            Nuestra <span className="text-orange-500">Galería</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Descubre la magia que nos caracteriza a través de imágenes que capturan la esencia de nuestra propuesta
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
              <motion.div 
                className="absolute inset-0 border-2 border-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
