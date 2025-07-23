import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: "What should I wear to my first Kangoo Jumps class?",
      answer: "Wear comfortable athletic clothing that allows for movement. I'll provide the Kangoo Jumps shoes for your first class. Bring a water bottle and a towel. For regular participants, I recommend moisture-wicking fabrics and supportive athletic wear."
    },
    {
      question: "Do I need any prior fitness experience?",
      answer: "Absolutely not! Kangoo Jumps is suitable for all fitness levels. I offer beginner-friendly classes where you'll learn the basics at your own pace. The shoes do most of the work, making it easier on your joints than traditional exercise."
    },
    {
      question: "How many calories can I burn in a class?",
      answer: "You can burn between 300-600 calories per class, depending on the intensity level and your body weight. The unique bouncing motion increases caloric burn by up to 25% compared to traditional aerobics while feeling easier on your body."
    },
    {
      question: "Is Kangoo Jumps safe for people with joint problems?",
      answer: "Yes! Kangoo Jumps was originally developed for rehabilitation. The rebound shoes reduce impact on joints by up to 80%. However, I always recommend consulting with your doctor before starting any new exercise program, especially if you have existing health conditions."
    },
    {
      question: "What if I have balance issues?",
      answer: "The Kangoo Jump shoes actually help improve balance over time! I start beginners with basic movements and provide support throughout the class. The shoes have a low center of gravity that makes them surprisingly stable once you get used to them."
    },
    {
      question: "How much do classes cost?",
      answer: "I offer flexible pricing options including drop-in rates, class packages, and monthly memberships. Contact me for current pricing and special introductory offers for new clients. I also offer free consultations to help you choose the right program."
    },
    {
      question: "What size shoes do you have available?",
      answer: "I have Kangoo Jump shoes in sizes from US Women's 5 to Men's 13. The shoes are unisex and adjustable. I'll help you find the perfect fit during your first visit to ensure comfort and safety."
    },
    {
      question: "Can I try a class before committing?",
      answer: "Absolutely! I encourage everyone to try a beginner class first. This gives you a chance to experience Kangoo Jumps, meet me, and see if it's right for you. Equipment is provided for your trial class."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-gray to-primary-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-semibold mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            Frequently Asked <span className="text-accent-coral">Questions</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Got questions about Kangoo Jumps? Here are answers to the most common questions 
            I receive from new and current clients.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-primary-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent-coral/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-primary-black pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openQuestion === index ? (
                    <ChevronUp className="w-6 h-6 text-accent-coral" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-neutral-400" />
                  )}
                </div>
              </button>
              
              {openQuestion === index && (
                <div className="px-8 pb-6 border-t border-neutral-100">
                  <p className="text-neutral-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center bg-accent-coral/5 rounded-3xl p-12 border border-accent-coral/20">
          <div className="mb-6">
            <HelpCircle className="w-16 h-16 text-accent-coral mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              I'm here to help! Don't hesitate to reach out if you have specific questions 
              about Kangoo Jumps, class schedules, or anything else. I love talking about fitness 
              and helping people find the right program for their needs.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-coral text-primary-white rounded-full font-semibold hover:bg-accent-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-coral text-accent-coral rounded-full font-semibold hover:bg-accent-coral hover:text-primary-white transition-all duration-300"
            >
              Call Me Directly
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-accent-coral/20">
            <p className="text-sm text-neutral-500">
              <strong>Quick Response Promise:</strong> I typically respond to all inquiries within 24 hours. 
              For urgent questions, feel free to call or text me directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;