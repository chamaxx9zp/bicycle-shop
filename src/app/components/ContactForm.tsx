'use client';

import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
            <p className="text-lg text-gray-300 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-lg text-gray-300 mb-2">Email: info@bikelife.com</p>
            <p className="text-lg text-gray-300 mb-4">Address: 123 Bike Street, Cycling City, CC 12345</p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500 hover:text-red-400">Facebook</a>
              <a href="#" className="text-red-500 hover:text-red-400">Twitter</a>
              <a href="#" className="text-red-500 hover:text-red-400">Instagram</a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
