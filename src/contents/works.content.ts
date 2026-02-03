import type { LocalizedContent } from './types';

export interface Work {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

interface WorksContent {
  heading: string;
  works: Work[];
}

export const worksContent: LocalizedContent<WorksContent> = {
  ja: {
    heading: 'Works',
    works: [
      {
        id: '1',
        title: 'esn-lab',
        description: 'Echo State Networkのフルスクラッチ実験基盤',
        tags: ['Python'],
      },
      {
        id: '2',
        title: 'プロジェクトB',
        description: 'これはプロジェクトBの説明文です',
        tags: ['Node.js', 'Express'],
      },
      {
        id: '3',
        title: 'プロジェクトC',
        description: 'これはプロジェクトCの説明文です',
        tags: ['Python', 'Machine Learning'],
      },
      {
        id: '4',
        title: 'プロジェクトD',
        description: 'これはプロジェクトDの説明文です',
        tags: ['Vue.js', 'Firebase'],
      },
    ],
  },
  en: {
    heading: 'Works',
    works: [
      {
        id: '1',
        title: 'Project A',
        description: 'This is the description for Project A',
        tags: ['Python', 'PyTorch'],
      },
      {
        id: '2',
        title: 'Project B',
        description: 'This is the description for Project B',
        tags: ['Node.js', 'Express'],
      },
      {
        id: '3',
        title: 'Project C',
        description: 'This is the description for Project C',
        tags: ['Python', 'Machine Learning'],
      },
      {
        id: '4',
        title: 'Project D',
        description: 'This is the description for Project D',
        tags: ['Vue.js', 'Firebase'],
      },
    ],
  },
};
