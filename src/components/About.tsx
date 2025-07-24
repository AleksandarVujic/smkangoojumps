import { Award, Heart, Users, Target } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const certifications = [
    t('about.certifiedInstructor'),
    t('about.personalTraining'),
    t('about.groupFitness'),
    t('about.nutritionCoach')
  ];

  const achievements = [
    { icon: Award, title: t('about.certifiedProfessional'), description: t('about.certifiedDesc') },
    { icon: Heart, title: t('about.passionateTrainer'), description: t('about.passionateDesc') },
    { icon: Users, title: t('about.communityBuilder'), description: t('about.communityDesc') },
    { icon: Target, title: t('about.resultsFocused'), description: t('about.resultsDesc') }
  ];

  return (
    <section id="about" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="assets/images/kangoo_about_me_1.webp"
                alt="SM Instructor Portrait"
                className="w-full h-64 object-cover rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
              <img
                src="assets/images/kangoo_about_me_2.webp"
                alt="Training Session"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8 transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
            </div>
            <div className="mt-4">
              <img
                src="assets/images/kangoo_about_me_3.webp"
                alt="Group Class"
                className="w-full h-48 object-cover rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.3]"
              />
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 bg-accent-pink text-primary-white p-4 rounded-full shadow-lg animate-float">
              <Heart className="w-6 h-6" />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-semibold mb-4">
                {t('about.meetInstructor')}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
                <Trans i18nKey="about.title" components={{ 1: <span className="text-accent-pink" /> }} />
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  {t('about.description1', { name: 'SM' })}
                </p>
                <p>
                  {t('about.description2')}
                </p>
                <p>
                  {t('about.description3')}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-black mb-4">{t('about.certifications')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-accent-coral rounded-full mr-3"></div>
                    <span className="text-neutral-600 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="mb-3">
                    <achievement.icon className="w-8 h-8 text-accent-pink group-hover:text-accent-coral transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-primary-black mb-2">{achievement.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;