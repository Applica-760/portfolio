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
      copyright: '© 2026 Portfolio. All rights reserved.',
    },
  },
  en: {
    header: {
      title: 'Applica-760',
      subtitle: 'GitHub Portfolio',
    },
    footer: {
      copyright: '© 2026 Portfolio. All rights reserved.',
    },
  },
};
