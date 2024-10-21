"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeroImage from '../public/images/herosection/hero.png'

const testimonials = [
  {
    id: 1,
    image: { HeroImage },
    quote: "Finding comfort in a futuristic bike seemed like a dream until I rode the ComfortRide. The adaptive suspension system absorbs bumps effortlessly, and the smart gel seat cover molds to my body, ensuring a blissful and pain-free ride.",
    name: "Sophia G.",
    bike: "Yamaha ZX 550rr User"
  },
  {
    id: 2,
    image: '/placeholder.svg?height=300&width=300',
    quote: "The EcoRide changed my commute entirely. Its electric motor is whisper-quiet, yet powerful enough to tackle any hill. The regenerative braking system extends the battery life impressively, making range anxiety a thing of the past.",
    name: "Alex M.",
    bike: "EcoRide E-1000 Owner"
  },
  {
    id: 3,
    image: '/placeholder.svg?height=300&width=300',
    quote: "As a professional racer, I demand the best from my bikes. The SpeedMaster Pro exceeds all expectations. Its aerodynamic design, coupled with cutting-edge materials, gives me the edge I need on the track. It's not just a bike; it's a racing revolution.",
    name: "Carlos R.",
    bike: "SpeedMaster Pro Team Rider"
  }
]

export default function ClientFeedbackCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 tracking-wider">
        SEE OUR CLIENT&apos;S FEEDBACK
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 flex flex-col sm:flex-row items-center gap-8">
                <div className="w-full sm:w-1/3">
                  <Image
                    src={HeroImage}
                    alt={`${testimonial.name}'s bike`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-64 sm:h-auto"
                  />
                </div>
                <div className="w-full sm:w-2/3 space-y-4">
                  <p className="text-lg italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-blue-400">{testimonial.bike}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}