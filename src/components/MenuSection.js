import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, IceCream } from 'lucide-react';
import amburguesa from '../Imagenes/amburguesa.jpg';
import cachapa from '../Imagenes/cachapa.jpg';
import arepaconquesoamarillo from '../Imagenes/arepa con queso amarillo.png';
import arepaconquesodemano from '../Imagenes/arepa.jpg';
import quesillo from '../Imagenes/quesillo.png';

const menuItems = [
  {
    id: 1,
    name: 'Amburguesa',
    description: 'Es un sándwich de carne molida, usualmente de res, cocinada a la parrilla o a la plancha, servida entre dos panes con diversos vegetales como lechuga, tomate y cebolla.',
    price: '8.50',
    image: amburguesa,
    category: 'salado'
  },
  {
    id: 2,
    name: 'Cachapa con Queso de Mano',
    description: 'Es una panqueca dulce hecha con maíz tierno molido, doblada por la mitad y rellena con queso de mano, un queso suave y elástico.',
    price: '9.00',
    image: cachapa,
    category: 'salado'
  },
  {
    id: 3,
    name: 'Arepa con queso amarillo',
    description: 'Una arepa asada o frita, rellena de queso amarillo derretido, que le da un sabor salado y una textura suave.',
    price: '12.00',
    image: arepaconquesoamarillo,
    category: 'salado'
  },
  {
    id: 4,
    name: 'Arepa con queso de mano',
    description: 'Una arepa rellena con queso de mano, un queso fresco y suave que se derrite ligeramente con el calor de la arepa.',
    price: '5.50',
    image: arepaconquesodemano,
    category: 'salado'
  },
  {
    id: 5,
    name: 'Arepa con queso de mano',
    description: 'Una arepa rellena con queso de mano, un queso fresco y suave que se derrite ligeramente con el calor de la arepa.',
    price: '8.00',
    image: arepaconquesodemano,
    category: 'salado'
  },
  {
    id: 6,
    name: 'Cachapa con Pernil',
    description: 'Es un postre flan a base de huevos, leche condensada y vainilla, cubierto con un jarabe de caramelo líquido. Su textura es suave y cremosa, similar a un pudín.',
    price: '10.50',
    image: cachapa,
    category: 'salado'
  },
  {
    id: 7,
    name: 'Quesillo',
    description: 'Es un postre flan a base de huevos, leche condensada y vainilla, cubierto con un jarabe de caramelo líquido. Su textura es suave y cremosa, similar a un pudín.',
    price: '6.00',
    image: quesillo,
    category: 'dulce'
  },
  {
    id: 8,
    name: 'Quesillo pro',
    description: 'Clásico helado de vainilla con un remolino de salsa de caramelo.',
    price: '5.00',
    image: quesillo,
    category: 'dulce'
  }
];

const MenuSection = () => {
  const [filter, setFilter] = useState('all'); // 'all', 'dulce', 'salado'

  const filteredItems = menuItems.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const categoryButtons = [
    { name: 'Todo', value: 'all', icon: null },
    { name: 'Salado', value: 'salado', icon: Utensils },
    { name: 'Dulce', value: 'dulce', icon: IceCream }
  ];

  return (
    <section id="menu" className="py-12 md:py-20 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-amber-700 mb-8 md:mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Explora Nuestro <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-500">Exquisito Menú</span>
        </motion.h2>

        <motion.div
          className="flex justify-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <div className="bg-white p-2 md:p-3 rounded-full shadow-2xl flex flex-wrap justify-center space-x-2 md:space-x-4 border border-amber-200">
            {categoryButtons.map((button) => (
              <motion.button
                key={button.value}
                onClick={() => setFilter(button.value)}
                className={`flex-1 min-w-max px-4 md:px-8 py-2 md:py-4 rounded-full text-base md:text-xl font-semibold flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 transform ${
                  filter === button.value
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-700'
                }`}
                whileHover={{ scale: 1.08, boxShadow: "0 10px 20px rgba(251, 191, 36, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                {button.icon && <button.icon className="w-4 h-4 md:w-6 md:h-6" />}
                <span className="hidden sm:inline">{button.name}</span>
                <span className="sm:hidden">{button.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer border-4 border-transparent hover:border-amber-400 group"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-115 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <motion.span
                    className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-amber-500 text-white text-xl md:text-3xl font-bold px-3 md:px-5 py-1 md:py-2 rounded-full shadow-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    ${item.price}
                  </motion.span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{item.name}</h3>
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;