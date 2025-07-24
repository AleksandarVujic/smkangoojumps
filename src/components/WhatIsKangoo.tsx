import { Shield, Heart, Smile, Users } from 'lucide-react';
import { useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const WhatIsKangoo = () => {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  const benefits = [
    {
      icon: Shield,
      title: t('kangoo.jointFriendly'),
      description: t('kangoo.jointDesc'),
      color: "text-accent-pink"
    },
    {
      icon: Heart,
      title: t('kangoo.cardioBoost'),
      description: t('kangoo.cardioDesc'),
      color: "text-accent-coral"
    },
    {
      icon: Smile,
      title: t('kangoo.pureFun'),
      description: t('kangoo.funDesc'),
      color: "text-accent-gold"
    },
    {
      icon: Users,
      title: t('kangoo.allLevels'),
      description: t('kangoo.levelsDesc'),
      color: "text-accent-pink"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-gray to-primary-beige ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 px-2">
          <span className="inline-block px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-semibold mb-4">
            {t('kangoo.revolutionaryFitness')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-black mb-6 break-words">
            <Trans i18nKey="kangoo.title" components={{ 1: <span className="text-accent-pink" /> }} />
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('kangoo.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center mb-20">

          {/* Left - Video/Image */}
          <div className="relative w-full  rounded-2xl">
            <div className="relative rounded-2xl  shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-2xl"
                controls
                preload="metadata"
                playsInline
                muted
                autoPlay
                loop
              >
                <source src="assets/videos/video_1.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-primary-white rounded-xl p-4 sm:p-6 shadow-lg max-w-[150px] w-full">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent-pink mb-1">80%</div>
                <div className="text-sm text-neutral-600">
                  {t('hero.statsBadges.lessJointImpact')}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="px-1 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-black mb-6">
              {t('kangoo.scienceBehind')}
            </h3>
            <div className="space-y-5 text-neutral-600 leading-relaxed text-base sm:text-lg">
              <p>{t('kangoo.scienceDesc1')}</p>
              <p>{t('kangoo.scienceDesc2')}</p>
              <p>{t('kangoo.scienceDesc3')}</p>
            </div>

            <div className="mt-8 p-4 sm:p-6 bg-accent-pink/5 rounded-xl border border-accent-pink/20">
              <h4 className="font-semibold text-primary-black mb-3">{t('kangoo.perfectFor')}</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-600">
                <div>• {t('kangoo.weightLoss')}</div>
                <div>• {t('kangoo.injuryRecovery')}</div>
                <div>• {t('kangoo.cardiovascularHealth')}</div>
                <div>• {t('kangoo.stressRelief')}</div>
                <div>• {t('kangoo.balanceCoordination')}</div>
                <div>• {t('kangoo.coreStrengthening')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center px-2">
              <div className="relative mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <benefit.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${benefit.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 bg-accent-coral rounded-full opacity-20 animate-ping" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-black mb-2 sm:mb-4">{benefit.title}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default WhatIsKangoo;