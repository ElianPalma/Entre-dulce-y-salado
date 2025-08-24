import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bike, Clock } from 'lucide-react';

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2 
          className="text-5xl font-extrabold text-center text-amber-400 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Delivery a Tu Alcance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.div 
            className="bg-gray-700 p-8 rounded-3xl shadow-xl flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <MapPin className="w-16 h-16 text-amber-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Zonas de Cobertura</h3>
            <p className="text-gray-300 text-lg">
              Llegamos a La Victoria, Aragua y sus alrededores. ¡Consulta si estamos en tu área!
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-700 p-8 rounded-3xl shadow-xl flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Bike className="w-16 h-16 text-amber-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Condiciones de Envío</h3>
            <p className="text-gray-300 text-lg">
              Envío gratis en pedidos superiores a $20. Costo de envío de $3 para pedidos menores.
            </p>
          </motion.div>
          <motion.div 
            className="bg-gray-700 p-8 rounded-3xl shadow-xl flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Clock className="w-16 h-16 text-amber-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Horarios</h3>
            <p className="text-gray-300 text-lg">
              Lunes a Domingos: 04:00 PM - 10:00 PM. Domingos: 03:00 PM - 11:00 PM.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;