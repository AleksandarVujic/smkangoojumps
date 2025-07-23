import React from 'react';
import { Award, Heart, Users, Target } from 'lucide-react';

const About = () => {
  const certifications = [
    "Certified Kangoo Jumps Instructor",
    "Personal Training Certification",
    "Group Fitness Specialist",
    "Nutrition Wellness Coach"
  ];

  const achievements = [
    { icon: Award, title: "Certified Professional", description: "Licensed Kangoo Jumps instructor with international certification" },
    { icon: Heart, title: "Passionate Trainer", description: "Dedicated to helping clients achieve their fitness goals safely" },
    { icon: Users, title: "Community Builder", description: "Creating supportive fitness communities that inspire growth" },
    { icon: Target, title: "Results Focused", description: "Proven track record of transforming lives through fitness" }
  ];

  return (
    <section id="about" className="py-20 bg-primary-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="SM Instructor Portrait"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Training Session"
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="mt-4">
              <img
                src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Group Class"
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
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
                Meet Your Instructor
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
                About <span className="text-accent-pink">SM</span>
              </h2>
              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Welcome! I'm SM, your certified Kangoo Jumps instructor and the only licensed trainer in our area. 
                  My journey with Kangoo Jumps began three years ago when I discovered this incredible low-impact, 
                  high-energy workout that transformed not just my body, but my entire approach to fitness.
                </p>
                <p>
                  After experiencing the amazing benefits firsthand - from increased cardiovascular health to improved 
                  joint protection - I knew I had to share this with others. I became certified to bring this 
                  revolutionary fitness program to our community.
                </p>
                <p>
                  Every class I teach is designed to be inclusive, fun, and effective. Whether you're a fitness 
                  beginner or an experienced athlete, Kangoo Jumps offers something special for everyone.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary-black mb-4">Certifications & Credentials</h3>
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