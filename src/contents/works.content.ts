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
        id: 'laplust',
        title: '株式会社LAplust様での長期インターン',
        description: '株式会社LAplust様とのAIモデル調査・実装・検証に従事',
        tags: ['Python', 'PyTorch'],
      },
      {
        id: 'esnlab',
        title: 'esn-lab',
        description: 'Echo State Networkのフルスクラッチ実験基盤開発',
        tags: ['Python'],
      },
      {
        id: 'clustime',
        title: 'ClusTime',
        description: 'コミュニティ型SNS ClusTimeの開発',
        tags: ['Flutter', 'Dart', 'Swift', 'firebase'],
      },
      {
        id: 'contest',
        title: 'Contest',
        description: '離島で深刻化する漂着ごみ問題に対するソリューションを数百万単位の予算を獲得し開発',
        tags: ['Python', 'Edge Device', 'LPWA/LoRA'],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'そのほか細かなアピールポイントを列挙',
        tags: ['Leadership','Collaboration', 'Certification'],
      },
    ],
  },
  en: {
    heading: 'Works',
    works: [
      {
        id: 'laplust',
        title: 'Long-term Internship at LAplust Inc.',
        description: 'Engaged in research, implementation, and evaluation of AI models in collaboration with LAplust Inc.',
        tags: ['Python', 'PyTorch'],
      },
      {
        id: 'esnlab',
        title: 'esn-lab',
        description: 'Development of a full-scratch experimental framework for Echo State Networks',
        tags: ['Python'],
      },
      {
        id: 'clustime',
        title: 'ClusTime',
        description: 'Development of the community-based social networking service ClusTime',
        tags: ['Flutter', 'Dart', 'Swift', 'firebase'],
      },
      {
        id: 'contest',
        title: 'Contest Project',
        description: 'Developed a solution to the growing problem of marine debris on remote islands, securing a budget of several million yen',
        tags: ['Python', 'Edge Device', 'LPWA/LoRA'],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'A collection of additional minor highlights and strengths',
        tags: ['Leadership','Collaboration', 'Certification'],
      },
    ],
  },
};
