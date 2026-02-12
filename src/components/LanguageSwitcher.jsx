import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSwitcher.scss';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        className={`lang-btn ${language === 'de' ? 'active' : ''}`}
        onClick={() => changeLanguage('de')}
        aria-label="Switch to German"
      >
        DE
      </button>
    </div>
  );
}

