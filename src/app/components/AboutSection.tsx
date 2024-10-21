'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import HeroImage from '../public/images/herosection/hero.png'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500">
          About BikeLife
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg text-gray-300 mb-4">
              At BikeLife, we're passionate about creating the perfect riding experience. Our team of expert engineers and designers work tirelessly to bring you cutting-edge bicycle technology that pushes the boundaries of performance and style.
            </p>
            <p className="text-lg text-gray-300">
              The BikeLife Pro is the culmination of years of research and development, resulting in a bicycle that's not just a mode of transportation, but an extension of your lifestyle.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="h-64 relative">
            <Image
              src={HeroImage}
              alt="BikeLife team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg absolute"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
