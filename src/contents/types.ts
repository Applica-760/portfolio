export type Language = 'ja' | 'en';

export interface LocalizedContent<T> {
  ja: T;
  en: T;
}
