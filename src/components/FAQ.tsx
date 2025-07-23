import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Trans, useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();

  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faq.questions.q1'),
      answer: t('faq.questions.a1')
    },
    {
      question: t('faq.questions.q2'),
      answer: t('faq.questions.a2')
    },
    {
      question: t('faq.questions.q3'),
      answer: t('faq.questions.a3')
    },
    {
      question: t('faq.questions.q4'),
      answer: t('faq.questions.a4')
    },
    {
      question: t('faq.questions.q5'),
      answer: t('faq.questions.a5')
    },
    {
      question: t('faq.questions.q6'),
      answer: t('faq.questions.a6')
    },
    {
      question: t('faq.questions.q7'),
      answer: t('faq.questions.a7')
    },
    {
      question: t('faq.questions.q8'),
      answer: t('faq.questions.a8')
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
            {t('faq.commonQuestions')}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-black mb-6">
            <Trans i18nKey="faq.title" components={{ 1: <span className="text-accent-coral" /> }} />
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('faq.description')}
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
              {t('faq.stillHaveQuestions')}
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              {t('faq.stillHaveDesc')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-accent-coral text-primary-white rounded-full font-semibold hover:bg-accent-pink transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t('faq.getInTouch')}
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center px-8 py-4 border-2 border-accent-coral text-accent-coral rounded-full font-semibold hover:bg-accent-coral hover:text-primary-white transition-all duration-300"
            >
              {t('faq.callDirectly')}
              <ChevronDown className="w-5 h-5 ml-2 rotate-[-90deg]" />
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-accent-coral/20">
            <p className="text-sm text-neutral-500">
              <strong>{t('faq.quickResponse')}</strong> {t('faq.responseTime')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;