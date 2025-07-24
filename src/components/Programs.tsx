import { Clock, Zap, Star, ArrowRight } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

const Programs = () => {
  const { t } = useTranslation();
  const programs = [
    {
      title: t('programs.beginnerBounce'),
      duration: t('programs.duration', { count: 45 }),
      intensity: t('programs.intensity.low'),
      description: t('programs.beginnerDesc'),
      features: [t('programs.basicTechniques'), t('programs.coreStrengthening'), t('programs.balanceTraining'), t('programs.funChoreography')],
      image: "assets/images/kangoo_programs_1.webp",
      price: "Drop-in Class",
      popular: false
    },
    {
      title: t('programs.powerJump'),
      duration: t('programs.duration', { count: 60 }),
      intensity: t('programs.intensity.high'),
      description: t('programs.powerDesc'),
      features: [t('programs.hiitTraining'), t('programs.advancedChoreography'), t('programs.strengthCircuits'), t('programs.fatBurning')],
      image: "assets/images/kangoo_programs_2.webp",
      price: "Drop-in Class",
      popular: true
    },
    {
      title: t('programs.gentleBounce'),
      duration: t('programs.duration', { count: 30 }),
      intensity: t('programs.intensity.low'),
      description: t('programs.gentleDesc'),
      features: [t('programs.jointFriendlyMovements'), t('programs.flexibilityFocus'), t('programs.rehabilitationSafe'), t('programs.stressRelief')],
      image: "assets/images/kangoo_programs_3.webp",
      price: "Drop-in Class",
      popular: false
    },
    {
      title: t('programs.danceBounce'),
      duration: t('programs.duration', { count: 50 }),
      intensity: t('programs.intensity.medium'),
      description: t('programs.danceDesc'),
      features: [t('programs.danceChoreography'), t('programs.musicVariety'), t('programs.creativeExpression'), t('programs.socialConnection')],
      image: "assets/images/kangoo_programs_4.webp",
      price: "Drop-in Class",
      popular: false
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case t('programs.intensity.low'): return 'text-green-600 bg-green-100';
      case t('programs.intensity.medium'): return 'text-yellow-600 bg-yellow-100';
      case t('programs.intensity.high'): return 'text-red-600 bg-red-100';
      default: return 'text-neutral-600 bg-neutral-100';
    }
  };

  return (
    <section id="programs" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-semibold mb-4">
            {t('programs.trainingPrograms')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            <Trans i18nKey="programs.title" components={{ 1: <span className="text-accent-coral" /> }} />
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('programs.description')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="group relative bg-primary-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100">
              {program.popular && (
                <div className="absolute top-6 right-6 z-10">
                  <span className="bg-accent-pink text-primary-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {t('programs.mostPopular')}
                  </span>
                </div>
              )}

              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/60 to-transparent"></div>

                {/* Duration & Intensity Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="bg-primary-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-accent-pink" />
                    {program.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getIntensityColor(program.intensity)}`}>
                    <Zap className="w-4 h-4 mr-1 inline" />
                    {program.intensity}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary-black mb-4">{program.title}</h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">{program.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-black mb-3">{t('programs.whatsIncluded')}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-accent-coral rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-neutral-200">
                  <div>
                    <span className="text-sm text-neutral-500">{t('programs.pricing')}</span>
                    <div className="font-semibold text-primary-black">{program.price}</div>
                  </div>
                  <a href="#schedule" className="flex cursor-pointer items-center px-6 py-3 bg-accent-pink text-primary-white rounded-full hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    {t('programs.bookClass')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-accent-pink/5 to-accent-coral/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-primary-black mb-4">
            {t('programs.notSureTitle')}
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            {t('programs.notSureDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-pink text-primary-white rounded-full font-semibold hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('programs.scheduleConsultation')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-pink text-accent-pink rounded-full font-semibold hover:bg-accent-pink hover:text-primary-white transition-all duration-300"
            >
              {t('programs.tryBeginnerClass')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;