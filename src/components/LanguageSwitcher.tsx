import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'sr-Cyrl', name: 'Српски', flag: '🇷🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="relative group">
      <button className="flex items-center px-3 py-2 text-neutral-700 hover:text-accent-pink transition-colors duration-200 rounded-lg hover:bg-neutral-100">
        <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.name}</span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 w-48 bg-primary-white rounded-xl shadow-lg border border-neutral-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-accent-pink/5 hover:text-accent-pink transition-colors duration-200 flex items-center ${
                i18n.language === language.code ? 'bg-accent-pink/10 text-accent-pink' : 'text-neutral-700'
              }`}
            >
              <span className="mr-3 text-lg">{language.flag}</span>
              {language.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;