import React from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1b1f1b] text-white pt-8">
      {/* Top contact bar */}
      <div className="container mx-auto px-4 mb-8">
        <div className="border border-teal-800 p-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
          <div className="flex items-center mb-2 md:mb-0">
            <Phone className="w-5 h-5 mr-2" />
            <div>
              <div className="font-semibold">Call us</div>
              <div>+94 74 1856 027</div>
            </div>
          </div>
          <div className="flex items-center mb-2 md:mb-0">
            <Mail className="w-5 h-5 mr-2" />
            <div>
              <div className="font-semibold">Write to us</div>
              <div>bikelife@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <div>
              <div className="font-semibold">Address</div>
              <div>20/11A, St. Anne's Garden,</div>
              <div>Wattala, 11300</div>
              <div>Sri Lanka</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Company info */}
        <div>
          {/* <img src="/placeholder.svg?height=50&width=200" alt="Bike Life" className="mb-4" /> */}
          <Link href="/" className="text-2xl font-bold text-[#18ff6d]">
            BikeLife
          </Link>
          <p className="text-sm mb-4">
            BikeLife is a trusted and established bicycle retailer, offering
            top-quality bikes and cycling gear. We are passionate about
            promoting a healthy and sustainable lifestyle through cycling.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Youtube className="w-5 h-5" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Contact Us",
              "FAQs",
              "Terms and Condition",
              "Privacy Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#18ff6def]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Subscribe for Biking Adventures: Unlock Exclusive Offers, Tips, and
            Updates!
          </p>

          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 text-[#285238] text-sm border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2db53f]"
            />
            <button
              type="submit"
              className="bg-[#2db53f] px-4 py-2 text-sm hover:bg-[#2db53f] transition-colors rounded-r-lg"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto bg-[#285238] px-4 text-xs border-t border-[#285238] py-4 flex justify-between items-center">
        <div>Copyright © 2024 Bike Life (Pvt) Ltd. All Rights Reserved.</div>
        <div>
          Designed & Developed By{" "}
          <a href="#" className="hover:text-[#18ff6def]">
            Chamaka Piyumal
          </a>
        </div>
      </div>
    </footer>
  );
}