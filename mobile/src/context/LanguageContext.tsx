import React, {createContext} from 'react';
import useLanguageHook from '../hooks/useLanguageHook';

interface LanguageProviderProps {}

export const LanguageContext = createContext<any>(null);

const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
  const { language, changeLanguage } = useLanguageHook();
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
