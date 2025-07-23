import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      age: "32",
      program: "Power Jump",
      rating: 5,
      text: "I've tried every fitness program out there, but nothing compares to Kangoo Jumps with SM. The low impact on my knees while still getting an incredible workout is amazing. I've lost 15 pounds and gained so much confidence!",
      image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=200",
      before: "Had knee issues from running",
      after: "15 lbs lost, pain-free workouts"
    },
    {
      name: "Michael Chen",
      age: "45",
      program: "Gentle Bounce",
      rating: 5,
      text: "After my hip surgery, I thought my active days were over. SM's gentle bounce classes helped me regain my strength and mobility. The community here is so supportive, and SM is an incredible instructor.",
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200",
      before: "Post-surgery rehabilitation",
      after: "Full mobility restored"
    },
    {
      name: "Emma Rodriguez",
      age: "28",
      program: "Dance Bounce",
      rating: 5,
      text: "Dance Bounce is the highlight of my week! It doesn't feel like exercise - it feels like a party. SM creates such a fun, judgment-free environment where everyone can express themselves.",
      image: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=200",
      before: "Struggled with traditional gyms",
      after: "Found joy in fitness again"
    },
    {
      name: "David Thompson",
      age: "55",
      program: "Beginner Bounce",
      rating: 5,
      text: "As someone who hadn't exercised in years, I was nervous about starting. SM made me feel welcome from day one. The beginner classes are perfect for building confidence, and now I'm hooked!",
      image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=200",
      before: "Sedentary lifestyle for years",
      after: "Regular exercise routine"
    },
    {
      name: "Lisa Park",
      age: "39",
      program: "Power Jump",
      rating: 5,
      text: "The stress relief I get from these classes is incredible. After a long day at work, bouncing away my stress while getting fit is exactly what I needed. SM's energy is contagious!",
      image: "https://images.pexels.com/photos/4761771/pexels-photo-4761771.jpeg?auto=compress&cs=tinysrgb&w=200",
      before: "High stress, low energy",
      after: "Stress management & high energy"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-gold/10 text-accent-gold rounded-full text-sm font-semibold mb-4">
            {t('testimonials.successStories')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            <Trans i18nKey="testimonials.title" components={{ 1: <span className="text-accent-gold" /> }} />
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-accent-gold/5 to-accent-pink/5 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-accent-gold/20">
              <Quote className="w-16 h-16" />
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center relative z-10">
              {/* Client Photo */}
              <div className="lg:col-span-1 text-center">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg border-4 border-primary-white"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-primary-black">{current.name}</h3>
                  <p className="text-neutral-600">Age {current.age} • {current.program}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <blockquote className="text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 italic">
                  "{current.text}"
                </blockquote>

                {/* Transformation */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary-white rounded-xl p-4">
                    <div className="text-sm text-neutral-500 mb-1">Before</div>
                    <div className="font-semibold text-neutral-700">{current.before}</div>
                  </div>
                  <div className="bg-primary-white rounded-xl p-4">
                    <div className="text-sm text-neutral-500 mb-1">After</div>
                    <div className="font-semibold text-accent-pink">{current.after}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-primary-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent-pink hover:text-primary-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-accent-pink' : 'bg-neutral-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-primary-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-accent-pink hover:text-primary-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-pink mb-2">150+</div>
            <div className="text-neutral-600">{t('testimonials.happyClients')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-coral mb-2">500+</div>
            <div className="text-neutral-600">{t('testimonials.classesCompleted')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-gold mb-2">98%</div>
            <div className="text-neutral-600">{t('testimonials.satisfactionRate')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent-pink mb-2">3+</div>
            <div className="text-neutral-600">{t('testimonials.yearsExperience')}</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-accent-pink/5 to-accent-gold/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-primary-black mb-4">
            {t('testimonials.readyTitle')}
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            {t('testimonials.readyDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schedule"
              className="inline-flex items-center px-8 py-4 bg-accent-pink text-primary-white rounded-full font-semibold hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('testimonials.bookFirstClass')}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-pink text-accent-pink rounded-full font-semibold hover:bg-accent-pink hover:text-primary-white transition-all duration-300"
            >
              {t('testimonials.askQuestions')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;