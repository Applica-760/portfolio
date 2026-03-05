import type { LocalizedContent } from './types';

// 技術スタック（言語非依存）
// SkillIcons ID（小文字）で指定
export const techStack = ['github', 'apple', 'python', 'pytorch', 'swift', 'flutter', 'dart', 'react'];

interface SummaryItem {
  subtitle: string;
  body: string;
}

interface LinkItem {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

interface ProfileContent {
  heading: string;
  bio: string;
  bioLinkText: string;
  career: {
    heading: string;
    items: string[];
  };
  techStack: {
    heading: string;
  };
  summary: {
    heading: string;
    items: SummaryItem[];
  };
  links: {
    heading: string;
    items: LinkItem[];
  };
}

export const profileContent: LocalizedContent<ProfileContent> = {
  ja: {
    heading: 'Profile',
    bio: 'こちらは{0}のポートフォリオサイトです．従事しているプロジェクトや過去の実績について掲載しています．',
    bioLinkText: 'Applica-760',
    career: {
      heading: '経歴',
      items: [
        '2024年3月　佐世保工業高等専門学校 電子制御工学科 卒業',
        '2026年3月　九州大学 工学部 融合基礎工学科 卒業予定',
        '2026年4月　九州大学大学院 総合理工学府 総合理工学専攻 入学予定',
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
    summary: {
      heading: 'Summary',
      items: [
        {
          subtitle: '実践レベルの課題解決能力',
          body: '長期インターンをはじめとする複数のプロジェクトを通じて、現場の制約条件から本質的な課題を抽出し、それを解決するための技術選定や実装計画を立てる上流の意思決定能力を培ってきました。実装の結果に対しても事前の仮説や単一の指標に囚われず客観的な評価を徹底することで、次のアプローチへ繋げる思考のサイクルを重視しています。',
        },
        {
          subtitle: 'チームワークとリーダーシップ',
          body: '自らチームを立ち上げ、「地域環境課題解決のため360万円超の予算を獲得した実装検証」「製品レベルのSNSアプリケーションの考案、開発、ローンチ」を行ってきました。これらの自発的なプロジェクトに加え学内組織でも複数の中心的役職(全てリーダー/サブリーダーポジション)を担い、チームでの目標設定、タスク分担、進捗管理を経験してきました。',
        },
        {
          subtitle: '複数領域にまたがる技術スタック',
          body: '機械学習 (Python/PyTorch)、Web (React)、モバイル (Flutter/Swift)と幅広い領域で開発経験があります。Pythonによる機械学習を主軸に、アプリケーションに落とし込む能力を身につけています。',
        },
      ],
    },
    links: {
      heading: 'Links',
      items: [
        {
          url: 'https://github.com/Applica-760',
          title: 'GitHub',
          description: 'Applica-760',
        },
      ],
    },
  },
  en: {
    heading: 'Profile',
    bio: 'This is the portfolio site of {0}, showcasing projects and past achievements.',
    bioLinkText: 'Applica-760',
    career: {
      heading: 'Career',
      items: [
        'March 2024 — Graduated from the Department of Electronic Control Engineering, National Institute of Technology, Sasebo College',
        'March 2026 — Expected Graduation, Department of Interdisciplinary Fundamental Engineering, Faculty of Engineering, Kyushu University',
        "April 2026 — Expected Enrollment, Interdisciplinary Graduate School of Engineering Sciences, Kyushu University (Master's Program)",
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
    summary: {
      heading: 'Summary',
      items: [
        {
          subtitle: 'Practical Implementation Skills',
          body: 'Through participation in real-world projects such as Laplust and ESN Lab, I have gained end-to-end experience spanning requirements definition, implementation, and operation. I have cultivated the ability to deliver software that works in production, beyond academic knowledge alone.',
        },
        {
          subtitle: 'Cross-Domain Tech Stack',
          body: 'I have development experience across a wide range of domains including mobile (Swift / Flutter), machine learning (Python / PyTorch), and web (React). My strength lies in solving problems by choosing the right technology from multiple perspectives.',
        },
        {
          subtitle: 'Balancing Research and Development',
          body: 'I work on multiple development projects in parallel with research activities at Kyushu University. I strive to balance academic rigor with a practical, product-oriented mindset.',
        },
      ],
    },
    links: {
      heading: 'Links',
      items: [
        {
          url: 'https://github.com/Applica-760',
          title: 'GitHub',
          description: 'Applica-760',
        },
      ],
    },
  },
};
