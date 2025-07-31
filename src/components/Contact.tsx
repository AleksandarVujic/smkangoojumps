import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import GoogleMap from './GoogleMap';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../constants';

const Contact = () => {
  const { t } = useTranslation();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <section id="contact" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-semibold mb-4">
            {t('contact.getInTouch')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            {/* Let's Start Your <span className="text-accent-pink">Journey</span> */}
            <Trans i18nKey="contact.title" components={{ 1: <span className="text-accent-pink" /> }} />
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-16">
          {/* Contact Information */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-black mb-8">{t('contact.getInTouch')}</h3>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="bg-accent-pink/10 p-3 rounded-xl mr-4">
                  <Phone className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">{t('contact.phoneWhatsapp')}</h4>
                  <p className="text-neutral-600 mb-2">{t('contact.phoneDesc')}</p>
                  <a href="tel:{'PHONE_NUMBER'}" className="text-accent-pink hover:text-accent-coral transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent-coral/10 p-3 rounded-xl mr-4">
                  <Mail className="w-6 h-6 text-accent-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">{t('contact.email')}</h4>
                  <p className="text-neutral-600 mb-2">{t('contact.emailDesc')}</p>
                  <a href="mailto:info@smkangoojumps.com" className="text-accent-coral hover:text-accent-pink transition-colors">
                    info&#64;smkangoojumps.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent-gold/10 p-3 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">{t('contact.studioLocation')}</h4>
                  <p className="text-neutral-600 mb-2">{t('contact.studioName')}</p>
                  <a href="https://maps.app.goo.gl/yFwAkaJqDr9PZ1zD7" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-accent-pink transition-colors">
                    <address className="text-neutral-600 not-italic">
                      <Trans i18nKey="contact.address" components={{ 1: <br /> }} />
                    </address>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent-pink/10 p-3 rounded-xl mr-4">
                  <Clock className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-black mb-1">{t('contact.classHours')}</h4>
                  <div className="space-y-1 text-neutral-600">
                    <p>{t('contact.hours.weekdays')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary-black mb-4">{t('contact.followJourney')}</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/smkangoojumps/" aria-label="Instagram SM Kangoo Jumps" className="bg-accent-pink/10 p-3 rounded-xl hover:bg-accent-pink hover:text-primary-white transition-all duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/SmKangooJumpsMaribor/" aria-label="Facebook SM Kangoo Jumps" className="bg-accent-coral/10 p-3 rounded-xl hover:bg-accent-coral hover:text-primary-white transition-all duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Messages SM Kangoo Jumps" className="bg-accent-gold/10 p-3 rounded-xl hover:bg-accent-gold hover:text-primary-white transition-all duration-300">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border border-green-200">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center mb-4" aria-label='Quick WhatsApp Contact'>
                <div className="flex items-center mb-3">
                  <MessageCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h4 className="font-semibold text-green-800">{t('contact.quickWhatsapp')}</h4>
                </div>
              </a>
              <p className="text-green-700 mb-4 text-sm">
                {t('contact.quickWhatsappDesc')}
              </p>
              <a
                href="https://wa.me/1234567890?text=Hi%20SM!%20I'm%20interested%20in%20Kangoo%20Jumps%20classes."
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t('contact.messageWhatsapp')}
              </a>
            </div>
          </div>

          {/* Contact Form - COMMENTED OUT FOR NOW */}
          {/* 
          <div>
            <div className="bg-gradient-to-br from-accent-pink/5 to-accent-coral/5 rounded-3xl p-8 border border-accent-pink/20">
              <h3 className="text-2xl font-bold text-primary-black mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-accent-pink focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-accent-pink focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-accent-pink focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:border-accent-pink focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your fitness goals, questions about classes, or anything else I can help with..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent-pink text-primary-white rounded-xl font-semibold hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-primary-white/50 rounded-xl">
                <p className="text-sm text-neutral-600 text-center">
                  <strong>Response Time:</strong> I typically respond within 24 hours. 
                  For urgent inquiries, please call or WhatsApp me directly.
                </p>
              </div>
            </div>

            </div>
            */}
          <div className="mt-8 h-64 bg-neutral-200 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/20 to-accent-coral/20 flex items-center justify-center">
              <div className="text-center text-neutral-600">
                {/* <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-semibold">Studio Location Map</p>
                  <p className="text-sm">Interactive map would be embedded here</p> */}
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;