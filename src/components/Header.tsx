import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: t('navigation.about'), href: '#about' },
    { name: t('navigation.programs'), href: '#programs' },
    { name: t('navigation.schedule'), href: '#schedule' },
    { name: t('navigation.testimonials'), href: '#testimonials' },
    // { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-white shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-16 h-16 bg-accent-pink rounded-lg flex items-center justify-center">
              {/* <span className="text-primary-white font-bold text-xl">SM</span> */}
              <img
                src="/sm_kangoo_jumps_logo.png"
                alt="SM Kangoo Jumps Logo"
                className="h-16 w-auto rounded-lg"
              />
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-lg font-bold text-primary-black">SM Kangoo Jumps</h1>
              <p className="text-xs text-neutral-600">Premium Fitness Studio</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-accent-pink transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <a
              href="#contact"
              className="flex items-center px-4 py-2 text-accent-pink border border-accent-pink rounded-full hover:bg-accent-pink hover:text-primary-white transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t('navigation.contact')}
            </a>
            <a
              href="#schedule"
              className="flex items-center px-6 py-2 bg-accent-pink text-primary-white rounded-full hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {t('navigation.bookNow')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-accent-pink"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-primary-white border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-neutral-700 hover:text-accent-pink transition-colors duration-200 font-medium px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-neutral-200">
                <div className="mb-2">
                  <LanguageSwitcher />
                </div>
                <a
                  href="#contact"
                  className="flex items-center justify-center px-4 py-2 text-accent-pink border border-accent-pink rounded-full hover:bg-accent-pink hover:text-primary-white transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('navigation.contact')}
                </a>
                <a
                  href="#schedule"
                  className="flex items-center justify-center px-6 py-2 bg-accent-pink text-primary-white rounded-full hover:bg-accent-coral transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('navigation.bookNow')}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;