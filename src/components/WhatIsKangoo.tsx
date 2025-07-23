import React from 'react';
import { Shield, Heart, Smile, Users } from 'lucide-react';

const WhatIsKangoo = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Joint-Friendly",
      description: "Reduces impact on joints by up to 80%, making it perfect for all ages and fitness levels",
      color: "text-accent-pink"
    },
    {
      icon: Heart,
      title: "Cardio Boost",
      description: "Burns more calories than traditional workouts while feeling like you're having fun",
      color: "text-accent-coral"
    },
    {
      icon: Smile,
      title: "Pure Fun",
      description: "Experience the joy of bouncing while getting an incredible full-body workout",
      color: "text-accent-gold"
    },
    {
      icon: Users,
      title: "All Levels",
      description: "Suitable for beginners to advanced athletes, with modifications for everyone",
      color: "text-accent-pink"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-gray to-primary-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-semibold mb-4">
            Revolutionary Fitness
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            What is <span className="text-accent-pink">Kangoo Jumps</span>?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Kangoo Jumps is a revolutionary fitness program that combines cardiovascular exercise with fun, 
            using specially designed rebound shoes that provide incredible benefits for your body and mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Video/Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4761771/pexels-photo-4761771.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kangoo Jumps in Action"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-black/50 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary-white/90 backdrop-blur-sm p-6 rounded-full shadow-lg hover:bg-primary-white transition-all duration-300 transform hover:scale-110">
                  <div className="w-8 h-8 bg-accent-pink rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary-white border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-primary-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-pink mb-1">80%</div>
                <div className="text-sm text-neutral-600">Less Impact</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-3xl font-bold text-primary-black mb-6">
              The Science Behind the Bounce
            </h3>
            <div className="space-y-6 text-neutral-600 leading-relaxed">
              <p>
                Kangoo Jumps uses specially designed rebound shoes with a patented spring system that 
                reduces the impact on your joints while maximizing the cardiovascular and muscle-toning benefits.
              </p>
              <p>
                Originally developed for rehabilitation, these shoes have evolved into one of the most 
                effective and enjoyable fitness programs available today. The unique bouncing motion 
                engages your core, improves balance, and provides a full-body workout like no other.
              </p>
              <p>
                Studies show that Kangoo Jumps can burn up to 25% more calories than traditional 
                aerobics while being gentler on your body than walking on concrete.
              </p>
            </div>

            <div className="mt-8 p-6 bg-accent-pink/5 rounded-xl border border-accent-pink/20">
              <h4 className="font-semibold text-primary-black mb-3">Perfect For:</h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-neutral-600">
                <div>• Weight Loss</div>
                <div>• Injury Recovery</div>
                <div>• Cardiovascular Health</div>
                <div>• Stress Relief</div>
                <div>• Balance & Coordination</div>
                <div>• Core Strengthening</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-primary-white rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-coral rounded-full opacity-20 animate-ping"></div>
              </div>
              <h3 className="text-xl font-semibold text-primary-black mb-4">{benefit.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsKangoo;