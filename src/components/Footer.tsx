
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-baseline">
              <span className="text-xl font-display font-bold text-white">TripMap</span>
              <span className="ml-1 text-sm text-gold">tours</span>
            </Link>
            <p className="mt-4 text-sm">
              Discover unforgettable travel experiences with our expertly crafted tours to destinations around the world.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/trips" className="text-sm hover:text-gold transition-colors">Trips</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm hover:text-gold transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">Iceland</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">Japan</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">New Zealand</a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-gold transition-colors">Norway</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gold shrink-0" />
                <span className="text-sm">1234 Travel Street, Suite 100, Adventure City, 98765</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold shrink-0" />
                <span className="text-sm">info@tripmap.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} TripMap Tours. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-slate-400 hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
