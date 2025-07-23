import React from 'react';
import { Instagram, Facebook, MessageCircle, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-black text-primary-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-accent-pink rounded-lg flex items-center justify-center">
                <span className="text-primary-white font-bold text-xl">SM</span>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold">SM Kangoo Jumps</h3>
                <p className="text-sm text-neutral-400">Premium Fitness Studio</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Transforming lives through the joy of Kangoo Jumps. Join our community and discover 
              the fun, effective way to achieve your fitness goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-pink transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-coral transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-gold transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-neutral-400 hover:text-accent-pink transition-colors">About SM</a>
              <a href="#programs" className="block text-neutral-400 hover:text-accent-pink transition-colors">Programs</a>
              <a href="#schedule" className="block text-neutral-400 hover:text-accent-pink transition-colors">Schedule</a>
              <a href="#testimonials" className="block text-neutral-400 hover:text-accent-pink transition-colors">Success Stories</a>
              <a href="#contact" className="block text-neutral-400 hover:text-accent-pink transition-colors">Contact</a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Classes</h4>
            <div className="space-y-3">
              <div className="text-neutral-400">Beginner Bounce</div>
              <div className="text-neutral-400">Power Jump</div>
              <div className="text-neutral-400">Gentle Bounce</div>
              <div className="text-neutral-400">Dance Bounce</div>
              <div className="text-neutral-400">Private Sessions</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-accent-pink mt-1 mr-3" />
                <div className="text-neutral-400">
                  <div>123 Main Street</div>
                  <div>Downtown Area</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent-pink mr-3" />
                <a href="tel:+1234567890" className="text-neutral-400 hover:text-accent-pink transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent-pink mr-3" />
                <a href="mailto:sm@kangoojumps.com" className="text-neutral-400 hover:text-accent-pink transition-colors">
                  sm@kangoojumps.com
                </a>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="mt-6 p-4 bg-green-600/10 border border-green-600/20 rounded-lg">
              <a
                href="https://wa.me/1234567890"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quick WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} SM Kangoo Jumps. All rights reserved.
            </div>
            <div className="flex items-center text-neutral-400 text-sm">
              Made with <Heart className="w-4 h-4 text-accent-pink mx-1" /> for the fitness community
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
              <div className="mb-2 md:mb-0">
                <a href="#" className="hover:text-accent-pink transition-colors mr-4">Privacy Policy</a>
                <a href="#" className="hover:text-accent-pink transition-colors mr-4">Terms of Service</a>
                <a href="#" className="hover:text-accent-pink transition-colors">Waiver</a>
              </div>
              <div>
                Certified Kangoo Jumps Instructor • Licensed & Insured
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;