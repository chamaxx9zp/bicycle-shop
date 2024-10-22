'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import AboutImg from '../public/images/aboutsec/pexels-gioele-fazzeri-.jpg'
import Logo1 from '../public/images/aboutsec/brave.png'
import Logo2 from '../public/images/aboutsec/CMC.png'
import Logo3 from '../public/images/aboutsec/MatchDay.png'
import Logo4 from '../public/images/aboutsec/PenCS.png'
import Logo5 from '../public/images/aboutsec/Securaki.png'
import Logo6 from '../public/images/aboutsec/Siderise (1).png'
import Logo7 from '../public/images/aboutsec/Spellco.png'
import Logo8 from '../public/images/aboutsec/Zeeon.png'

const brands = [
  { name: 'Affirm', logo: Logo1 },
  { name: 'Felt', logo: Logo2 },
  { name: 'Bianchi', logo: Logo3 },
  { name: 'Specialized', logo: Logo4 },
  { name: 'Niner', logo: Logo5 },
  { name: 'Continental', logo: Logo6 },
  { name: 'Tern', logo: Logo7 },
  { name: 'Linus', logo: Logo8 },
]

export default function AboutSection() {
  return (
    <section id="about">
      <div className="container mx-auto px-4 py-16 bg-[#285238]">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#18ff6def]"
        >
          About BikeLife
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-4">
              At BikeLife, we're passionate about creating the perfect riding experience. Our team of expert engineers and designers work tirelessly to bring you cutting-edge bicycle technology that pushes the boundaries of performance and style.
            </p>
            <p className="text-lg text-gray-300">
              The BikeLife Pro is the culmination of years of research and development, resulting in a bicycle that's not just a mode of transportation, but an extension of your lifestyle.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-64 relative"
          >
            <Image
              src={AboutImg}
              alt="BikeLife team"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg absolute"
            />
          </motion.div>
        </div>
      </div>

      {/* Featured Brands Section */}
      <div className="bg-[#1b1f1b]">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-3 text-[#18ff6def]"
          >
            Featured Brands
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation effect
                className="border p-4 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105"
              >
                {/* Image Zoom Effect */}
                <motion.div
                  whileHover={{ scale: 1.2 }} // Zoom effect on hover
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden" // To ensure the image stays within the container while zooming
                >
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={100}
                    height={50}
                    className="max-w-full h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
