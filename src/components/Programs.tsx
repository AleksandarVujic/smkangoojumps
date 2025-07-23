import React from 'react';
import { Clock, Zap, Star, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Beginner Bounce",
      duration: "45 mins",
      intensity: "Low",
      description: "Perfect introduction to Kangoo Jumps. Learn basic movements and build confidence in a supportive environment.",
      features: ["Basic bounce techniques", "Core strengthening", "Balance training", "Fun choreography"],
      image: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Drop-in Class",
      popular: false
    },
    {
      title: "Power Jump",
      duration: "60 mins",
      intensity: "High",
      description: "High-energy workout combining cardio bursts with strength training. Perfect for experienced participants.",
      features: ["HIIT training", "Advanced choreography", "Strength circuits", "Fat burning focus"],
      image: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Drop-in Class",
      popular: true
    },
    {
      title: "Gentle Bounce",
      duration: "30 mins",
      intensity: "Low",
      description: "Low-impact session designed for seniors, those with injuries, or anyone seeking gentle movement.",
      features: ["Joint-friendly movements", "Flexibility focus", "Rehabilitation safe", "Stress relief"],
      image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Drop-in Class",
      popular: false
    },
    {
      title: "Dance Bounce",
      duration: "50 mins",
      intensity: "Medium",
      description: "Combine the joy of dance with the benefits of Kangoo Jumps. Express yourself while getting fit!",
      features: ["Dance choreography", "Music variety", "Creative expression", "Social connection"],
      image: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=400",
      price: "Drop-in Class",
      popular: false
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-red-600 bg-red-100';
      default: return 'text-neutral-600 bg-neutral-100';
    }
  };

  return (
    <section id="programs" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-semibold mb-4">
            Training Programs
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            Choose Your <span className="text-accent-coral">Perfect</span> Program
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From gentle rehabilitation to high-intensity training, we have a Kangoo Jumps program 
            designed specifically for your fitness level and goals.
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
                    Most Popular
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
                  <h4 className="font-semibold text-primary-black mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-accent-coral rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <div>
                    <span className="text-sm text-neutral-500">Pricing</span>
                    <div className="font-semibold text-primary-black">{program.price}</div>
                  </div>
                  <button className="flex items-center px-6 py-3 bg-accent-pink text-primary-white rounded-full hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Book Class
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-accent-pink/5 to-accent-coral/5 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-primary-black mb-4">
            Not Sure Which Program is Right for You?
          </h3>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            I'm here to help you choose the perfect program for your fitness level and goals. 
            Let's have a conversation about what you're looking to achieve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-pink text-primary-white rounded-full font-semibold hover:bg-accent-coral transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-pink text-accent-pink rounded-full font-semibold hover:bg-accent-pink hover:text-primary-white transition-all duration-300"
            >
              Try a Beginner Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;