'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import HeroImage from '../public/images/herosection/hero.png'

const images = [
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Motorcycle on coastal road",
      caption: "Embark on a journey into the future with our Quantum Velocity Electric Commuter",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Motorcycle in city",
      caption: "Experience urban agility with the CitySlicker 3000",
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Motorcycle on mountain road",
      caption: "Conquer any terrain with the AllTerrain X-treme",
    },
  ]

export default function ProductSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    React.useEffect(() => {
      if (emblaApi) {
        const intervalId = setInterval(() => {
          emblaApi.scrollNext()
        }, 5000)
  
        return () => clearInterval(intervalId)
      }
    }, [emblaApi])
  

  return (
    <section id="product" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-500"
        >
          Introducing the BikeLife Pro
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64"
          >
            <Card className="w-full max-w-4xl mx-auto bg-gray-800 text-white rounded-none">
              <CardContent className="p-0 relative">
                <h2 className="absolute top-4 left-4 text-2xl font-bold z-10 tracking-wider">
                  OUR RECENT PHOTO GALLERY
                </h2>
                <Carousel
                  ref={emblaRef}
                  className="w-full"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                          <div className="absolute bottom-16 left-4 right-4 bg-black bg-opacity-50 p-2 rounded">
                            <p className="text-sm">{image.caption}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <CarouselPrevious className="relative bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full h-8 w-8 flex items-center justify-center">
                      <ChevronLeft className="h-4 w-4" />
                    </CarouselPrevious>
                    <CarouselNext className="relative bg-white bg-opacity-20 text-white hover:bg-opacity-30 rounded-full h-8 w-8 flex items-center justify-center">
                      <ChevronRight className="h-4 w-4" />
                    </CarouselNext>
                  </div>
                </Carousel>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-red-500">
              Key Features
            </h3>
            <ul className="space-y-2 text-lg text-gray-300">
              <li>• Lightweight carbon fiber frame</li>
              <li>• Advanced suspension system</li>
              <li>• Integrated smart display</li>
              <li>• High-performance disc brakes</li>
              <li>• Customizable riding modes</li>
            </ul>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6"
            >
              <Link
                href="#"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
