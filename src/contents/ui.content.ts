import type { LocalizedContent } from './types';

interface UiContent {
  header: {
    title: string;
  };
  footer: {
    copyright: string;
  };
}

export const uiContent: LocalizedContent<UiContent> = {
  ja: {
    header: {
      title: 'Applica-760',
    },
    footer: {
      copyright: '',
    },
  },
  en: {
    header: {
      title: 'Applica-760',
    },
    footer: {
      copyright: '',
    },
  },
};
