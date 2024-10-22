"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Cyclist1 from '../public/images/testimonial/cyclist1.jpg'
import Cyclist2 from '../public/images/testimonial/cyclist2.jpg'
import Cyclist3 from '../public/images/testimonial/cyclist3.jpg'
import Cyclist4 from '../public/images/testimonial/cyclist4.jpg'
import Cyclist5 from '../public/images/testimonial/cyclist5.jpg'
import Cyclist6 from '../public/images/testimonial/cycllist6.jpg'
import Cyclist7 from '../public/images/testimonial/cyclist7.jpg'

const testimonials = [
    {
      id: 1,
      image: Cyclist1,
      quote: "Finding comfort in a futuristic bike seemed like a dream until I rode the ComfortRide. The adaptive suspension system absorbs bumps effortlessly, and the smart gel seat cover molds to my body, ensuring a blissful and pain-free ride.",
      name: "Sophia G.",
      bike: "Yamaha ZX 550rr User"
    },
    {
      id: 2,
      image: Cyclist2,
      quote: "The EcoRide changed my commute entirely. Its electric motor is whisper-quiet, yet powerful enough to tackle any hill. The regenerative braking system extends the battery life impressively, making range anxiety a thing of the past.",
      name: "Alex M.",
      bike: "EcoRide E-1000 Owner"
    },
    {
      id: 3,
      image: Cyclist3,
      quote: "As a professional racer, I demand the best from my bikes. The SpeedMaster Pro exceeds all expectations. Its aerodynamic design, coupled with cutting-edge materials, gives me the edge I need on the track. It's not just a bike; it's a racing revolution.",
      name: "Carlos R.",
      bike: "SpeedMaster Pro Team Rider"
    },
    {
      id: 4,
      image: Cyclist4,
      quote: "The UrbanGlide is my go-to for city commutes. It's sleek, fast, and its lightweight frame makes it easy to navigate through traffic. The integrated lights and Bluetooth connectivity are perfect for modern urban riders.",
      name: "Julia H.",
      bike: "UrbanGlide Commuter Bike User"
    },
    {
      id: 5,
      image: Cyclist5,
      quote: "Cycling in the mountains was never this fun until I got the TrailBlazer X. Its robust build, paired with the advanced suspension system, makes downhill rides smooth and exhilarating. I trust this bike on every terrain.",
      name: "Mark P.",
      bike: "TrailBlazer X Mountain Bike Owner"
    },
    {
      id: 6,
      image: Cyclist6,
      quote: "The AllRoad Hybrid combines the best of both worlds for me. Whether I'm cycling in the city or hitting a gravel path, it handles everything with ease. I especially love the versatility and comfort on longer rides.",
      name: "Elena R.",
      bike: "AllRoad Hybrid Rider"
    },
    {
      id: 7,
      image: Cyclist7,
      quote: "The VelocitySport is an absolute game changer for fitness enthusiasts like me. It's lightweight, responsive, and the gear shifting is so smooth that it almost feels automatic. I feel like a pro every time I ride.",
      name: "John D.",
      bike: "VelocitySport Road Bike User"
    }
  ];
  
export default function ClientFeedbackCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-[#1b1f1b] text-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-wider text-[#18ff6def]">
        SEE OUR CLIENT&apos;S FEEDBACK
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 flex flex-col sm:flex-row items-center gap-8 h-[200px]">
                <div className="w-full sm:w-1/3 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s bike`}
                    width={300}
                    height={300}
                    className="object-cover w-full sm:h-auto"
                  />
                </div>
                <div className="w-full sm:w-2/3 space-y-4">
                  <p className="text-lg italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-[#18ff6def]">{testimonial.bike}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full  bg-[#2db53f] text-white hover:bg-[#138A36] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full  bg-[#2db53f] text-white hover:bg-[#138A36] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}