import type { LocalizedContent } from './types';

interface ProfileContent {
  bio: string;
  bioLinkText: string;
  career: {
    heading: string;
    items: string[];
  };
  techStack: {
    heading: string;
  };
}

export const profileContent: LocalizedContent<ProfileContent> = {
  ja: {
    bio: 'こちらは{0}のポートフォリオサイトです．<br>従事しているプロジェクトや過去の実績について掲載しています．',
    bioLinkText: 'Applica-760',
    career: {
      heading: '経歴',
      items: [
        '2023年3月　佐世保工業高等専門学校 電子制御工学科 卒業',
        '2026年3月　九州大学 工学部 融合基礎工学科 卒業予定',
        '2026年4月　九州大学大学院 総合理工学府 総合理工学専攻 入学予定',
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
  },
  en: {
    bio: 'This is the portfolio site of {0}.',
    bioLinkText: 'Applica-760',
    career: {
      heading: 'Career',
      items: [
        '20XX - Graduated from University',
        '20XX - Started career as a Software Engineer',
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
  },
};
