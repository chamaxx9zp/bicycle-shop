'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    
    <section id="contact" className="py-16 bg-[#2d6952]">
      <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Ready to Transform Your Ride?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 text-gray-200"
          >
            Experience the BikeLife Pro today and elevate your cycling journey.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="primary">
                <Link href="/">Learn More</Link>
            </Button>
          </motion.div>
        </div>
    </section>
  );
}
