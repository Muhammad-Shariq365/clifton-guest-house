// components/ServicesSection.js

import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-white text-gray-800 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Services */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          {[
            { title: 'Free Wi-Fi', emoji: '🌐' },
            { title: '24/7 Room Service', emoji: '🛎️' },
            { title: 'Airport Pickup', emoji: '🚖' },
            { title: 'Complimentary Breakfast', emoji: '🍳' },
            { title: 'Laundry Service', emoji: '🧺' },
            { title: 'Daily Housekeeping', emoji: '🧹' },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-green-100 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQs</h2>
        <div className="max-w-2xl mx-auto space-y-4 mb-20">
          {[
            {
              question: 'What time is check-in and check-out?',
              answer: 'Check-in is from 2 PM and check-out is before 11 AM.',
            },
            {
              question: 'Is breakfast included in the room rate?',
              answer: 'Yes, complimentary breakfast is included with every stay.',
            },
            {
              question: 'Do you allow pets?',
              answer: 'Unfortunately, we do not allow pets at the guesthouse.',
            },
          ].map((faq, i) => (
            <details key={i} className="bg-gray-100 p-4 rounded-md cursor-pointer">
              <summary className="font-medium">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* Image Gallery */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            '/images/room1.jpg',
            '/images/lobby.jpg',
            '/images/room2.jpg',
            '/images/breakfast.jpg',
            '/images/bathroom.jpg',
            '/images/garden.jpg',
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition">
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={500}
                height={300}
                className="object-cover w-full h-64"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
