'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button"
import HeroImage from '../public/images/herosection/hero.jpg'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HeroImage}
          alt="Sport Bicycle"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">
          SPORT BICYCLES
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Handcrafted for Peak Performance
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="primary">
            <Link href="/">Discover Now</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
