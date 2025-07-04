'use client';

import Image from 'next/image';
import { FiHome, FiCoffee, FiMapPin, FiStar, FiHeart, FiUmbrella, FiUsers } from 'react-icons/fi';
import Pic8 from '../assets/Pic8.jpeg'
export default function About() {
  // Guest house highlights
  const highlights = [
    { value: "12", label: "Cozy Rooms", icon: <FiHome className="w-5 h-5 text-orange-500" /> },
    { value: "100%", label: "Homemade Breakfast", icon: <FiCoffee className="w-5 h-5 text-orange-500" /> },
    { value: "4.9", label: "Guest Rating", icon: <FiStar className="w-5 h-5 text-orange-500" /> },
    { value: "24/7", label: "Warm Hospitality", icon: <FiHeart className="w-5 h-5 text-orange-500" /> }
  ];

  // Special features
  const specialFeatures = [
    {
      icon: <FiHome className="w-8 h-8" />,
      title: "Home Away From Home",
      desc: "Thoughtfully designed rooms with premium linens, blackout curtains, and quality toiletries."
    },
    {
      icon: <FiCoffee className="w-8 h-8" />,
      title: "Breakfast Included",
      desc: "Daily homemade breakfast with fresh pastries, local jams, and perfectly brewed coffee."
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      title: "Prime Location",
      desc: "Quiet residential street just 10 minutes walk from downtown attractions."
    },
    {
      icon: <FiUmbrella className="w-8 h-8" />,
      title: "Personal Service",
      desc: "We'll arrange tours, recommend restaurants, and share local secrets."
    }
  ];

  // Guest testimonials
  const guestQuotes = [
    {
      text: "The homemade nihari and halwa puri breakfast was worth waking up for! Felt like staying with family rather than at a guest house.",
      name: "Ayesha & Ali",
      origin: "Lahore, Pakistan"
    },
    {
      text: "Perfect blend of privacy and Pakistani hospitality. After this experience, we'll always choose guest houses over big hotels!",
      name: "The Khan Family",
      origin: "Islamabad, Pakistan"
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Maria Rodriguez",
      role: "Founder & Host",
      bio: "Creates the warm atmosphere guests love with 15 years of hospitality experience.",
      img: "/images/team-maria.jpg"
    },
    {
      name: "James Wilson",
      role: "Head Chef",
      bio: "Prepares our famous breakfasts using local ingredients from trusted suppliers.",
      img: "/images/team-james.jpg"
    },
    {
      name: "Sophie Chen",
      role: "Guest Services",
      bio: "Knows all the hidden gems and ensures every guest need is met.",
      img: "/images/team-sophie.jpg"
    },
    {
      name: "Carlos Mendez",
      role: "House Manager",
      bio: "Keeps our historic property in perfect condition with meticulous care.",
      img: "/images/team-carlos.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-md font-semibold tracking-wider text-orange-600 uppercase bg-orange-100 rounded-full">
            Our Story
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Your <span className="text-blue-600">Home in the City</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            A family-run guest house where comfort meets authentic hospitality
          </p>
        </div>

        {/* Main Content with Custom Image Shape */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Established with Love</h3>
            <p className="text-gray-600 mb-4">
              What began in 2012 as a passion project to share our historic home with travelers has blossomed into 
              a beloved local institution. We've hosted everyone from honeymooners to grandparents, each leaving 
              as part of our extended family.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-2">
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{item.value}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-gray-600">
              We're proud to be the top-rated guest house in the city for 5 consecutive years, 
              but our greatest reward is seeing guests return year after year.
            </p>
          </div>
          
          {/* Image with Custom Shape */}
          <div className="lg:w-1/2 relative flex items-center justify-center">
            <svg
              viewBox="0 10 160 180"
              className="w-96 md:w-full flex justify-center items-center drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="heartClip">
                  <path
                    d="M100 170s-60-36.3-80-75c-15-30 0-60 30-60 20 0 30 15 30 15s10-15 30-15c30 0 45 30 30 60-20 38.7-80 75-80 75z"
                    fill="currentColor"
                  />
                </clipPath>
              </defs>
              <image
                href="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#heartClip)"
              />
            </svg>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-blue-100 rounded-full opacity-30 -z-10"></div>
          </div>
        </div>

        {/* What Makes Us Special */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-2">The Guest House Difference</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thoughtful details that transform your stay from good to unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guest Testimonials */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {guestQuotes.map((quote, index) => (
            <div key={index} className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 italic mb-6">
                "{quote.text}"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                  {quote.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{quote.name}</h4>
                  <p className="text-sm text-gray-500">{quote.origin}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
          
            <h3 className="mt-4 text-4xl font-bold text-gray-900">Meet Your Hosts</h3>
            <p className="mt-2 max-w-2xl mx-auto text-gray-600">
              The passionate team dedicated to making your stay unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-blue-100 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="mt-4 flex justify-center">
                  <FiUsers className="w-5 h-5 text-orange-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
           
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg h-80 w-full">
            <Image
              src={Pic8}
              alt="Guest house neighborhood"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>

          <div className="lg:w-1/2">
  <h3 className="text-4xl font-bold text-gray-900 mb-6">Premium Coastal Location</h3>
  <p className="text-gray-600 mb-4">
    Our charming guest house enjoys one of the city's most sought-after addresses, with easy access to the beach and all local conveniences. You'll appreciate the perfect balance of coastal tranquility and urban accessibility:
  </p>
  <ul className="text-gray-600 mb-6 space-y-2">
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">•</span>
      <span>Short distance to beautiful beaches</span>
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">•</span>
      <span>Walking distance to trendy cafes and restaurants</span>
    </li>
    <li className="flex items-start">
      <span className="text-orange-500 mr-2">•</span>
      <span>Convenient access to local markets and salons</span>
    </li>
  </ul>
  <div className="flex items-center space-x-4">
    <div className="flex -space-x-2">
      {[
        // Pakistani man
        "https://img.freepik.com/free-photo/front-view-man-ambulance-car_23-2149478476.jpg?t=st=1746553879~exp=1746557479~hmac=8d72bf48f4e205ff5ba48392b5b71f5e5c44098ce7127de215466f894f4dc3b2&w=996",
        "https://img.freepik.com/free-photo/picture-dissatisfied-grumpy-young-afro-american-woman-with-long-straight-hair-expressing-her-disagreement-keeping-arms-folded-looking-with-serious-skeptical-facial-expression_344912-1026.jpg?t=st=1746554075~exp=1746557675~hmac=99cfaef2b12ab88a2323246e1ce9da931ff260362a599fe68ad9323cc0c71ceb&w=996",
        "https://img.freepik.com/free-photo/closeup-shot-beautiful-young-lady-front-christmas-tree_181624-25081.jpg?t=st=1746554237~exp=1746557837~hmac=c2018bb8e261d0cabe209714d2cb725cd7e4a46b6dd6ca711ca47d91d435677d&w=826",
      ].map((avatar, index) => (
        <img 
          key={index}
          src={avatar}
          className="w-10 h-10 rounded-full border-2 border-white"
          alt="Happy guest"
        />
      ))}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-600">Recent guests say:</p>
      <p className="text-blue-600 font-semibold">"Loved the area - beach, cafes and more nearby!"</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}