# SM Kangoo Jumps - Internationalization Implementation

## Overview
This project implements internationalization (i18n) for the SM Kangoo Jumps fitness website using react-i18next, supporting English, Serbian Cyrillic, and Russian languages.

## Library Selection: react-i18next

**Why react-i18next?**
- Industry standard for React applications
- Excellent TypeScript support
- Powerful features: pluralization, interpolation, namespace organization
- Lightweight and tree-shakable
- Supports lazy loading and automatic language detection
- Active community and extensive documentation

## Features Implemented

### 🌍 Language Support
- **English (en)** - Default language
- **Serbian Cyrillic (sr-Cyrl)** - Full Cyrillic script support
- **Russian (ru)** - Complete Russian localization

### 🔧 Technical Features
- **Automatic Language Detection**: Detects user's browser language
- **Fallback Handling**: Falls back to English if translation is missing
- **Local Storage**: Remembers user's language preference
- **Pluralization**: Proper plural forms for all three languages
- **Interpolation**: Dynamic content insertion (names, numbers, etc.)
- **Trans Component**: For complex HTML content with styling

### 🎨 UI Components
- **Language Switcher**: Dropdown with flags and language names
- **Responsive Design**: Works on desktop and mobile
- **Smooth Transitions**: Animated language switching
- **Accessibility**: Proper ARIA labels and keyboard navigation

## File Structure

```
src/
├── i18n/
│   ├── index.ts                 # i18n configuration
│   └── locales/
│       ├── en.json             # English translations
│       ├── sr-Cyrl.json        # Serbian Cyrillic translations
│       └── ru.json             # Russian translations
├── components/
│   ├── LanguageSwitcher.tsx    # Language selection component
│   └── [other components]      # Updated with translations
└── main.tsx                    # i18n initialization
```

## Configuration

### i18n Setup (`src/i18n/index.ts`)
```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });
```

## Usage Examples

### Basic Translation
```typescript
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  
  return <h1>{t('hero.title')}</h1>;
};
```

### Complex HTML with Trans Component
```typescript
import { Trans } from 'react-i18next';

<Trans 
  i18nKey="hero.title"
  components={{
    1: <span className="text-accent-pink" />,
    2: <span className="text-accent-coral" />
  }}
/>
```

### Interpolation with Variables
```typescript
// Translation: "{{count}} spots left"
{t('schedule.spotsLeft', { count: 5 })}
```

### Pluralization
```json
{
  "spotsLeft": "{{count}} spot left",
  "spotsLeft_plural": "{{count}} spots left"
}
```

## Language Switcher Component

The `LanguageSwitcher` component provides:
- Dropdown interface with country flags
- Current language indicator
- Smooth hover animations
- Mobile-responsive design
- Automatic language persistence

## Translation Keys Structure

### Organized by Sections
- `navigation.*` - Header navigation items
- `hero.*` - Hero section content
- `about.*` - About section
- `programs.*` - Training programs
- `schedule.*` - Class scheduling
- `testimonials.*` - Client testimonials
- `faq.*` - Frequently asked questions
- `contact.*` - Contact information
- `footer.*` - Footer content
- `common.*` - Shared UI elements

### Special Considerations

#### Cyrillic Script Support
- Proper character encoding (UTF-8)
- Cyrillic-specific typography considerations
- Right-to-left text handling where needed

#### Cultural Adaptations
- Date/time formats appropriate for each locale
- Currency and number formatting
- Cultural context in testimonials and content

## Adding New Translations

### 1. Add to Translation Files
Add new keys to all three language files:
```json
// en.json
{
  "newSection": {
    "title": "New Title",
    "description": "Description text"
  }
}
```

### 2. Use in Components
```typescript
const { t } = useTranslation();
return <h2>{t('newSection.title')}</h2>;
```

### 3. Complex Content
For HTML content with styling:
```typescript
<Trans 
  i18nKey="newSection.complexTitle"
  components={{
    1: <strong className="text-accent-pink" />
  }}
/>
```

## Performance Optimizations

### Bundle Size
- Tree-shaking eliminates unused translations
- Lazy loading for large translation files
- Namespace splitting for better code splitting

### Loading Performance
- Translations bundled with main app (no additional requests)
- Local storage caching for language preferences
- Efficient re-rendering with React hooks

## Browser Support

### Language Detection
- Supports all modern browsers
- Graceful fallback for older browsers
- Respects user's browser language settings

### Character Encoding
- Full UTF-8 support for Cyrillic scripts
- Proper font loading for international characters
- Cross-browser compatibility

## Development Workflow

### Adding New Languages
1. Create new translation file in `src/i18n/locales/`
2. Add language to `languages` array in `LanguageSwitcher`
3. Update i18n configuration if needed
4. Test all components with new language

### Translation Management
- Use consistent key naming conventions
- Group related translations in namespaces
- Maintain translation completeness across all languages
- Regular audits for missing or outdated translations

## Testing Considerations

### Language Switching
- Test all UI components in each language
- Verify text doesn't break layouts
- Check for proper pluralization
- Validate interpolation works correctly

### Accessibility
- Screen reader compatibility with all languages
- Proper language attributes on HTML elements
- Keyboard navigation for language switcher

## Deployment Notes

### Environment Variables
No additional environment variables needed - all translations are bundled.

### CDN Considerations
- Translations are included in main bundle
- No external API calls for translations
- Offline functionality maintained

This implementation provides a robust, scalable internationalization solution that enhances the user experience for English, Serbian, and Russian speakers while maintaining the premium feel of the SM Kangoo Jumps brand.