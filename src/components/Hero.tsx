import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, Play, Star } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-beige via-primary-gray to-primary-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-pink rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent-gold rounded-lg opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-coral rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center mb-6 mt-16">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                ))}
              </div>
              <span className="ml-2 text-neutral-600 font-medium">Certified Instructor</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-primary-black leading-tight mb-6">
              <Trans 
                i18nKey="hero.title"
                components={{
                  1: <span className="text-accent-pink" />,
                  2: <span className="text-accent-coral" />
                }}
              />
            </h1>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#schedule"
                className="inline-flex items-center px-8 py-4 bg-accent-pink text-primary-white rounded-full font-semibold hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('hero.startJourney')}
                <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
              </a>
              <button className="inline-flex items-center px-8 py-4 border-2 border-neutral-300 text-neutral-700 rounded-full font-semibold hover:border-accent-pink hover:text-accent-pink transition-all duration-300">
                <Play className="w-5 h-5 mr-2" />
                {t('hero.watchDemo')}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-pink mb-1">500+</div>
                <div className="text-sm text-neutral-600">{t('hero.classesTaught')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-coral mb-1">95%</div>
                <div className="text-sm text-neutral-600">{t('hero.clientSatisfaction')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-gold mb-1">3+</div>
                <div className="text-sm text-neutral-600">{t('hero.yearsExperience')}</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kangoo Jumps Fitness Training"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent-pink/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute top-6 right-6 bg-primary-white rounded-xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-accent-pink">80%</div>
              <div className="text-xs text-neutral-600">{t('hero.lessJointImpact')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neutral-400" />
      </div>
    </section>
  );
};

export default Hero;