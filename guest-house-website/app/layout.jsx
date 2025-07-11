import Navbar from '../app/components/Navigation/navbar';
import { FaUmbrellaBeach, FaCoffee, FaConciergeBell, FaWifi, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import './globals.css';

export const metadata = {
  title: 'Blue Horizon Guest House',
  description: 'Luxury accommodations with premium service',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-4xl" />
        </a>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
  <div className="flex-1  px-12">
    <h3 className="text-[35px] font-bold mb-4">Guest House Clifton</h3>
    <p className="text-gray-300">
      Experience unparalleled comfort with our luxury accommodations 
      and premium services by the coast.
    </p>
  </div>
  
  <div className="flex-1  ml-20">
    <h3 className="text-xl font-bold mb-4">Guest Services</h3>
    <ul className="space-y-3">
      <li className="flex items-center text-gray-300 hover:text-white transition-colors">
        <FaUmbrellaBeach className="mr-3 text-[22px] text-blue-300" /> Beachfront Access
      </li>
      <li className="flex items-center text-gray-300 hover:text-white transition-colors">
        <FaCoffee className="mr-3 text-xl text-amber-200" /> Gourmet Breakfast Included
      </li>
      <li className="flex items-center text-gray-300 hover:text-white transition-colors">
        <FaWifi className="mr-3 text-xl text-green-300" /> Free High-Speed WiFi
      </li>
      <li className="flex items-center text-gray-300 hover:text-white transition-colors">
        <FaConciergeBell className="mr-3 text-xl text-purple-300" /> 24/7 Concierge
      </li>
    </ul>
  </div>
  
  <div className="flex-1">
    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
    <address className="not-italic space-y-3">
      <div className="flex items-start group">
        <MdLocationOn className="flex-shrink-0 mt-1 mr-3 text-[24px] text-blue-300 group-hover:text-blue-200 transition-colors" />
        <div>
          <p className="text-gray-300 group-hover:text-white transition-colors">DHA PHASE 2 Ext house number 5A /2/1 Sunset line, Near MCB Bank</p>
      
        </div>
      </div>
      
      <div className="flex items-center group">
        <MdPhone className="flex-shrink-0 mr-3 text-[24px] text-blue-300 group-hover:text-blue-200 transition-colors" />
        <p className="text-gray-300 group-hover:text-white transition-colors">(123) 456-7890</p>
      </div>
      
      <div className="flex items-center group">
        <MdEmail className="flex-shrink-0 mr-3 text-[22px] text-blue-300 group-hover:text-blue-200 transition-colors" />
        <p className="text-gray-300 group-hover:text-white transition-colors">info@bluehorizonguesthouse.com</p>
      </div>
      
      <div className="flex items-center group">
        <MdAccessTime className="flex-shrink-0 mr-3 text-[23px] text-blue-300 group-hover:text-blue-200 transition-colors" />
        <p className="text-gray-300 group-hover:text-white transition-colors">Open: 24/7 Year Round</p>
      </div>
    </address>
  </div>
</div>
            
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Guest House Clifton. All rights reserved.</p>
              <p className="mt-2">Luxury Coastal Retreat Since 2010</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
