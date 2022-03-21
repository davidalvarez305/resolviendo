import {useEffect, useState} from 'react';

export default function useLanguageHook() {
  const [toggleLanguage, setToggleLanguage] = useState(false);
  const [language, setLanguage] = useState<'English' | 'Spanish'>('Spanish');
  useEffect(() => {
    if (toggleLanguage) {
      setLanguage('Spanish');
    } else {
      setLanguage('English');
    }
  }, [toggleLanguage]);

  const changeLanguage = () => {
    setToggleLanguage(prev => !prev)
  }

  return {
    language,
    changeLanguage,
  };
}
