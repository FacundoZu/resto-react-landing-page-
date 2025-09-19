import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Leaf, Flame } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('entrantes');

  const categories = [
    { id: 'entrantes', label: 'Entrantes' },
    { id: 'principales', label: 'Platos Principales' },
    { id: 'postres', label: 'Postres' },
    { id: 'bebidas', label: 'Bebidas' }
  ];

  const menuItems = {
    entrantes: [
      {
        name: 'Carpaccio de Res',
        description: 'Finas láminas de res con rúcula, parmesano y aceite de trufa',
        price: '$18.990',
        special: 'bestseller',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Carpaccio'
      },
      {
        name: 'Ceviche de la Casa',
        description: 'Pescado fresco marinado en leche de tigre con sweet potato',
        price: '$16.990',
        special: 'chef',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Ceviche'
      },
      {
        name: 'Bruschetta Gourmet',
        description: 'Pan artesanal con tomate confitado, burrata y albahaca',
        price: '$12.990',
        special: 'vegetarian',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Bruschetta'
      }
    ],
    principales: [
      {
        name: 'Salmón a la Parrilla',
        description: 'Salmón atlántico con risotto de espárragos y salsa hollandaise',
        price: '$28.990',
        special: 'chef',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Salmón'
      },
      {
        name: 'Cordero Patagónico',
        description: 'Rack de cordero con puré de papas trufado y vegetables',
        price: '$32.990',
        special: 'bestseller',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Cordero'
      },
      {
        name: 'Pasta Artesanal',
        description: 'Ravioles de ricotta y espinaca con salsa de mantequilla y salvia',
        price: '$22.990',
        special: 'vegetarian',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Pasta'
      }
    ],
    postres: [
      {
        name: 'Tiramisú de la Casa',
        description: 'Clásico italiano con café expresso y mascarpone artesanal',
        price: '$9.990',
        special: 'bestseller',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Tiramisú'
      },
      {
        name: 'Chocolate Lava Cake',
        description: 'Volcán de chocolate belga con helado de vainilla',
        price: '$11.990',
        special: 'chef',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Lava+Cake'
      }
    ],
    bebidas: [
      {
        name: 'Vino Tinto Reserva',
        description: 'Cabernet Sauvignon del Valle de Maipo, cosecha 2020',
        price: '$25.990',
        special: 'bestseller',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Vino'
      },
      {
        name: 'Cóctel de la Casa',
        description: 'Pisco sour con twist de maracuyá y espuma de clara',
        price: '$8.990',
        special: 'chef',
        image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/1a1a1a/f97316/png?text=Cóctel'
      }
    ]
  };

  const getSpecialIcon = (special: string) => {
    switch (special) {
      case 'bestseller':
        return <Star className="w-4 h-4 text-yellow-400 fill-current" />;
      case 'vegetarian':
        return <Leaf className="w-4 h-4 text-green-400" />;
      case 'chef':
        return <Flame className="w-4 h-4 text-orange-400" />;
      default:
        return null;
    }
  };

  const getSpecialLabel = (special: string) => {
    switch (special) {
      case 'bestseller':
        return 'Más Vendido';
      case 'vegetarian':
        return 'Vegetariano';
      case 'chef':
        return 'Recomendación del Chef';
      default:
        return '';
    }
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-bl from-black via-black to-gray-900">
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
            Nuestro <span className="text-orange-500">Menú</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Una selección cuidadosa de platos que fusionan tradición y vanguardia culinaria
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center mb-12 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                y: -5
              }}
            >
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex items-center space-x-1 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
                  {getSpecialIcon(item.special)}
                  <span className="text-xs text-white font-medium">{getSpecialLabel(item.special)}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold text-xl">{item.name}</h3>
                  <span className="text-orange-500 font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-gray-300 mb-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
