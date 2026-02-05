import type { LocalizedContent } from './types';

// 技術スタック（言語非依存）
// SkillIcons ID（小文字）で指定
export const techStack = ['github', 'apple', 'python', 'pytorch', 'swift', 'flutter', 'dart', 'react'];

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
}

export const profileContent: LocalizedContent<ProfileContent> = {
  ja: {
    heading: 'Profile',
    bio: 'こちらは{0}のポートフォリオサイトです．従事しているプロジェクトや過去の実績について掲載しています．',
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
    heading: 'Profile',
    bio: 'This is the portfolio site of {0}, showcasing projects and past achievements.',
    bioLinkText: 'Applica-760',
    career: {
      heading: 'Career',
      items: [
        'March 2023 — Graduated from the Department of Electronic Control Engineering, National Institute of Technology, Sasebo College',
        'March 2026 — Expected Graduation, Department of Interdisciplinary Fundamental Engineering, Faculty of Engineering, Kyushu University',
        'April 2026 — Expected Enrollment, Interdisciplinary Graduate School of Engineering Sciences, Kyushu University (Master’s Program)',
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
  },
};
