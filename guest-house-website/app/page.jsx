"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiWifi, FiCoffee, FiMapPin, FiStar, FiUmbrella } from 'react-icons/fi';
import Pic1 from '../app/assets/Pic1.jpeg'
import Pic2 from '../app/assets/Pic2.jpeg'
import Pic3 from '../app/assets/Pic5.jpeg'
import Pic4 from '../app/assets/Pic7.jpeg'
import Pic5 from '../app/assets/Pic8.jpeg'

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    Pic1,
    Pic2,
    Pic3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Luxury Stays
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experience <span className="text-blue-600">Serene</span> Comfort
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover our exquisite guest house where modern elegance meets 
              homely comfort. Perfect for business travelers and vacationers alike.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
                Explore Rooms
              </button>
         
            </div>
            <div className="mt-12 flex items-center space-x-6">
            <div className="flex -space-x-2">
  {[
    // Indian women
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=100&h=100&q=80&crop=faces",
    // Pakistani woman
      "https://images.unsplash.com/photo-1621274403997-37aace184f49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBha2lzdGFuaSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80&crop=faces",
    // Indian woman
    "https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=100&h=100&q=80&crop=faces"
  ].map((avatar, index) => (
    <img 
      key={index}
      src={avatar}
      className="w-10 h-10 rounded-full border-2 border-white"
      alt={`Happy customer ${index + 1}`}
    />
  ))}
</div>
              <div>
                <p className="text-sm font-medium text-gray-600">Loved by our guests</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">4.9 (128 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side with custom shape */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow-2xl border-8 border-white">
              {images.map((img, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={img}
                    alt="Luxury Guest House"
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10 mix-blend-multiply"></div>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-30 -z-10"></div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 right-12 bg-white px-6 py-3 rounded-full shadow-xl">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Perfect Location</p>
                  <p className="text-sm font-semibold text-gray-800">City Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Unmatched <span className="text-blue-600">Guest Experience</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FiStar className="w-8 h-8" />, title: "Premium Comfort", desc: "Handpicked furnishings and luxury linens for perfect rest" },
              { icon: <FiWifi className="w-8 h-8" />, title: "High-Speed WiFi", desc: "Seamless connectivity throughout the property" },
              { icon: <FiCoffee className="w-8 h-8" />, title: "Gourmet Breakfast", desc: "Fresh, locally sourced morning delights" },
              { icon: <FiMapPin className="w-8 h-8" />, title: "Prime Location", desc: "Walking distance to major attractions and transport" },
              { icon: <FiUmbrella className="w-8 h-8" />, title: "Concierge Service", desc: "Personalized recommendations and bookings" },
              { icon: <FiStar className="w-8 h-8" />, title: "Eco-Conscious", desc: "Sustainable practices without compromising luxury" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              our accomudation
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Designed <span className="text-blue-600">Your Comfort</span>
            </h2>
          </div>
          
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { 
                name: "Deluxe Suite", 
                price: "Rs:5000/night", 
                desc: "Spacious retreat with panoramic city views and premium amenities",
                image: Pic4,
              },
              { 
                name: "Executive Room", 
                price: "Rs:7000/night", 
                desc: "Sophisticated workspace with ergonomic seating and soundproofing",
                image: Pic5,
              }
            ].map((room, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-96">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                      <p className="text-blue-200 mt-1">{room.desc}</p>
                    </div>
                    <span className="text-xl font-semibold text-orange-400 bg-white/90 px-4 py-2 rounded-lg">{room.price}</span>
                  </div>
                  <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
              Guest Stories
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              What Our <span className="text-blue-600">Guests Say</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
  { 
    quote: "The attention to detail was incredible - from the premium linens to the locally sourced breakfast. Felt like a 5-star hotel!",
    author: "Ayesha Khan",
    role: "Business Traveler",
    rating: 5
  },
  { 
    quote: "Perfect location for exploring the city. The staff went above and beyond to recommend hidden gems we'd never have found otherwise.",
    author: "Ali Raza",
    role: "Tourist",
    rating: 5
  },
  { 
    quote: "As a digital nomad, the high-speed WiFi and comfortable workspace made this my ideal home away from home. Will definitely return!",
    author: "Fatima Ahmed",
    role: "Remote Worker",
    rating: 4
  }
].map((testimonial, index) => (
  <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-5 h-5 ${i < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <blockquote className="text-gray-600 italic mb-6">
      "{testimonial.quote}"
    </blockquote>
    <div className="flex items-center">
      <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
        {testimonial.author.charAt(0)}
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for an Unforgettable Stay?</h2>
              <p className="text-blue-100 text-lg">Special offers available for extended stays and seasonal bookings.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                Book Your Stay Now
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
    
  );
}