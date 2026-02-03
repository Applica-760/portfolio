import { useLanguage } from '../contexts/LanguageContext';
import type { LocalizedContent } from '../contents/types';

export function useContent() {
  const { language } = useLanguage();

  return {
    get: <T,>(content: LocalizedContent<T>): T => content[language],
    language,
  };
}
