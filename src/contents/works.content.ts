import type { LocalizedContent } from './types';

export interface TechIcon {
  label: string;
  icon: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  tags: TechIcon[];
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
        tags: [{ label: 'Python', icon: 'py' }, { label: 'PyTorch', icon: 'pytorch' }],
      },
      {
        id: 'esnlab',
        title: 'esn-lab',
        description: 'Echo State Networkのフルスクラッチ実験基盤開発',
        tags: [{ label: 'Python', icon: 'py' }],
      },
      {
        id: 'contest',
        title: 'Contest',
        description: '離島で深刻化する漂着ごみ問題に対するソリューションを数百万単位の予算を獲得し開発',
        tags: [{ label: 'Python', icon: 'py' }, { label: 'Raspberry Pi', icon: 'raspberrypi' }],
      },
      {
        id: 'clustime',
        title: 'ClusTime',
        description: 'コミュニティ型SNS ClusTimeの開発',
        tags: [{ label: 'Flutter', icon: 'flutter' }, { label: 'Dart', icon: 'dart' }, { label: 'Swift', icon: 'swift' }, { label: 'Firebase', icon: 'firebase' }],
      },
      {
        id: 'docdrill',
        title: 'doc-drill',
        description: 'インフラ技術を習熟するために簡単なRAGアプリケーションを構築',
        tags: [{ label: 'AWS', icon: 'aws' }, { label: 'Terraform', icon: 'terraform' }, { label: 'Docker', icon: 'docker' }, { label: 'Python', icon: 'py' }, { label: 'FastAPI', icon: 'fastapi' }],
      },
      {
        id: 'portfolio',
        title: 'Portfolio Site',
        description: 'このサイト自体の開発 - React + TypeScript による日英対応ポートフォリオ',
        tags: [{ label: 'React', icon: 'react' }, { label: 'TypeScript', icon: 'ts' }, { label: 'Vite', icon: 'vite' }],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'そのほか細かなアピールポイントを列挙',
        tags: [],
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
        tags: [{ label: 'Python', icon: 'py' }, { label: 'PyTorch', icon: 'pytorch' }],
      },
      {
        id: 'esnlab',
        title: 'esn-lab',
        description: 'Development of a full-scratch experimental framework for Echo State Networks',
        tags: [{ label: 'Python', icon: 'py' }],
      },
      {
        id: 'clustime',
        title: 'ClusTime',
        description: 'Development of the community-based social networking service ClusTime',
        tags: [{ label: 'Flutter', icon: 'flutter' }, { label: 'Dart', icon: 'dart' }, { label: 'Swift', icon: 'swift' }, { label: 'Firebase', icon: 'firebase' }],
      },
      {
        id: 'contest',
        title: 'Contest Project',
        description: 'Developed a solution to the growing problem of marine debris on remote islands, securing a budget of several million yen',
        tags: [{ label: 'Python', icon: 'py' }, { label: 'Raspberry Pi', icon: 'raspberrypi' }],
      },
      {
        id: 'docdrill',
        title: 'doc-drill',
        description: 'Built a simple RAG application to gain hands-on experience with AWS infrastructure and IaC',
        tags: [{ label: 'AWS', icon: 'aws' }, { label: 'Terraform', icon: 'terraform' }, { label: 'Docker', icon: 'docker' }, { label: 'Python', icon: 'py' }, { label: 'FastAPI', icon: 'fastapi' }],
      },
      {
        id: 'portfolio',
        title: 'Portfolio Site',
        description: 'This site itself — a bilingual portfolio built with React + TypeScript',
        tags: [{ label: 'React', icon: 'react' }, { label: 'TypeScript', icon: 'ts' }, { label: 'Vite', icon: 'vite' }],
      },
      {
        id: 'others',
        title: 'Others',
        description: 'A collection of additional minor highlights and strengths',
        tags: [],
      },
    ],
  },
};
