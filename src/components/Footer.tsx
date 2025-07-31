import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';
import { WHATSAPP_LINK } from '../constants';

const Footer = () => {
  const { t } = useTranslation();
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
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-pink transition-colors duration-300">
                <Instagram href="https://www.instagram.com/smkangoojumps/" aria-label="Instagram SM Kangoo Jumps" className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/SmKangooJumpsMaribor/" aria-label="Facebook SM Kangoo Jumps" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-coral transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="sms:+381629231886" aria-label="Messages SM Kangoo Jumps" className="bg-neutral-800 p-3 rounded-lg hover:bg-accent-gold transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-neutral-400 hover:text-accent-pink transition-colors">{t('navigation.about')}</a>
              <a href="#programs" className="block text-neutral-400 hover:text-accent-pink transition-colors">{t('navigation.programs')}</a>
              <a href="#schedule" className="block text-neutral-400 hover:text-accent-pink transition-colors">{t('navigation.schedule')}</a>
              <a href="#testimonials" className="block text-neutral-400 hover:text-accent-pink transition-colors">{t('testimonials.successStories')}</a>
              <a href="#contact" className="block text-neutral-400 hover:text-accent-pink transition-colors">{t('navigation.contact')}</a>
            </div>
          </div>

          {/* Classes */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.classes')}</h4>
            <div className="space-y-3">
              <div className="text-neutral-400">{t('footer.classTypes.beginnerBounce')}</div>
              <div className="text-neutral-400">{t('footer.classTypes.powerJump')}</div>
              <div className="text-neutral-400">{t('footer.classTypes.gentleBounce')}</div>
              <div className="text-neutral-400">{t('footer.classTypes.danceBounce')}</div>
              <div className="text-neutral-400">{t('footer.classTypes.privateSessions')}</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <a href="https://maps.app.goo.gl/yFwAkaJqDr9PZ1zD7" target="_blank" rel="noopener noreferrer" className="text-accent-gold hover:text-accent-pink transition-colors">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-accent-pink mt-1 mr-3" />
                  <div className="text-neutral-400">
                    <Trans i18nKey="contact.address" components={{ 1: <br /> }} />
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-accent-pink mr-3" />
                <a href="tel:+381629231886" className="text-neutral-400 hover:text-accent-pink transition-colors">
                  +381 65 1234567
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-accent-pink mr-3" />
                <a href="mailto:info@smkangoojumps.com" className="text-neutral-400 hover:text-accent-pink transition-colors">
                info&#64;smkangoojumps.com
                </a>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="mt-6 p-4 bg-green-600/10 border border-green-600/20 rounded-lg">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                aria-label='Quick WhatsApp Contact'
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('footer.quickWhatsapp')}
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
              Made by <a href="https://aleksandar-vujic.web.app" target='_blank' className='text-accent-pink hover:text-accent-coral transition-colors ml-1'>Aleksandar</a>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
              <div className="mb-2 md:mb-0">
                <a href="#" className="hover:text-accent-pink transition-colors mr-4">{t('footer.privacyPolicy')}</a>
                <a href="#" className="hover:text-accent-pink transition-colors mr-4">{t('footer.termsOfService')}</a>
              </div>
              <div>
                Certified Kangoo Jumps Instructor • Licensed
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;