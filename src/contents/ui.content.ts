import type { LocalizedContent } from './types';

interface UiContent {
  header: {
    title: string;
    subtitle: string;
  };
  footer: {
    copyright: string;
  };
}

export const uiContent: LocalizedContent<UiContent> = {
  ja: {
    header: {
      title: 'Applica-760',
      subtitle: 'GitHub Portfolio',
    },
    footer: {
      copyright: '',
    },
  },
  en: {
    header: {
      title: 'Applica-760',
      subtitle: 'GitHub Portfolio',
    },
    footer: {
      copyright: '',
    },
  },
};
