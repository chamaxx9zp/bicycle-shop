'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight,  Menu, X, Bike, ShoppingBag, DollarSign, Tag, ChevronDown, Search } from 'lucide-react'
import HeroImage from '../public/images/herosection/hero.jpg'
import Bicycle1 from '../public/images/imagegallery/bicycle1.jpg'
import Bicycle2 from '../public/images/imagegallery/bicycle2.jpg'
import Bicycle3 from '../public/images/imagegallery/bicycle3.jpg'
import Bicycle4 from '../public/images/imagegallery/bicycle4.jpg'
import Bicycle5 from '../public/images/imagegallery/bicycle5.jpg'
import Bicycle6 from '../public/images/imagegallery/bicycle6.jpg'
import Bicycle7 from '../public/images/imagegallery/bicycle7.jpg'
import Bicycle8 from '../public/images/imagegallery/bicycle8.jpg'
import Bicycle9 from '../public/images/imagegallery/bicycle9.jpg'



const images = [
    {
      src: Bicycle1,
      alt: "Mountain bike on rocky trail",
      caption: "Conquer the toughest trails with the Thunderbolt XT Mountain Bike",
    },
    {
      src: Bicycle2,
      alt: "City bike on a street",
      caption: "Cruise through urban landscapes with the UrbanGlide City Cruiser",
    },
    {
      src: Bicycle3,
      alt: "Racing bike on open road",
      caption: "Push the limits of speed with the VelocityPro Road Racer",
    },
    {
      src: Bicycle4,
      alt: "Electric bike in park",
      caption: "Effortless commutes with the EcoDrive Electric Commuter",
    },
    {
      src: Bicycle5,
      alt: "Hybrid bike on a country road",
      caption: "Versatility at its finest with the AllRoad Hybrid Bicycle",
    },
    {
      src: Bicycle6,
      alt: "Folding bike by the river",
      caption: "Compact and portable, meet the FoldX Travel Bicycle",
    },
    {
      src: Bicycle7,
      alt: "Fat tire bike on snowy terrain",
      caption: "Tackle any surface with the Avalanche Fat Tire Bike",
    },
    {
      src: Bicycle8,
      alt: "Kid riding a colorful bicycle",
      caption: "Adventure for the young ones with the Kiddo Cruiser",
    },
    {
      src: Bicycle9,
      alt: "Touring bike on coastal highway",
      caption: "Embark on long-distance journeys with the Horizon Touring Bike",
    },
  ];

export default function ProductSection() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
      }, 5000)
  
      return () => clearInterval(timer)
    }, [])
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)
    }
  return (
    <section id="product" className="py-16 bg-[#285238]">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#18ff6def]">
          Introducing the BikeLife Pro
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="relative">
            
          <div className="relative w-full h-[400px] overflow-hidden bg-gray-900 rounded-lg">
      <h2 className="absolute top-4 left-4 text-2xl font-bold z-10 tracking-wider text-white">
        OUR RECENT PHOTO GALLERY
      </h2>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity bg-black duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
          <div className="absolute bottom-8 left-4 right-4 mr-[100px] bg-opacity-50 p-2 rounded">
            <p className="text-base font-semibold text-white">{image.caption}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-[#2db53f] text-white hover:bg-[#138A36] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-[#2db53f] text-white hover:bg-[#138A36] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
    </div>

          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="text-2xl text-center font-semibold mb-4 text-[#18ff6def]">Key Features</h3>
            <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Bike, title: "Eco-Friendly", description: "Zero emissions, 100% sustainable" },
                  { icon: ShoppingBag, title: "Convenient", description: "Easy to use and maintain" },
                  { icon: DollarSign, title: "Cost-Effective", description: "Save money on transportation" },
                  { icon: Tag, title: "Stylish", description: "Modern design that turns heads" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon size={48} className="mx-auto mb-4 text-[#18FF6D]" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 text-center">
              <Link href="#" className="inline-block bg-[#2db53f] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#2db53f] transition-colors">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
