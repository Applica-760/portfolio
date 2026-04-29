import type { LocalizedContent } from './types';

// 技術スタック（言語非依存）
// SkillIcons ID（小文字）で指定
export const techStack = ['github', 'python', 'pytorch', 'typescript', 'react', 'flutter', 'dart', 'aws', 'terraform', 'docker'];

interface SummaryItem {
  subtitle: string;
  body: string;
}

interface LinkItem {
  url: string;
  title: string;
  description?: string;
  image?: string;
  imageFit?: 'width' | 'height';
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
        '2026年3月　九州大学 工学部 融合基礎工学科 卒業',
        '2026年4月　九州大学大学院 総合理工学府 総合理工学専攻 入学',
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
          url: 'https://note.com/laplust/n/n35b7987e61c6',
          title: 'Pick and Placeタスクの困難さに関する分析と考察 - robosuite / SAC -',
          description: '2025年12月29日',
          image: 'https://assets.st-note.com/production/uploads/images/239755547/rectangle_large_type_2_fda7130e674151ac2d1933f5937e9d71.png?width=1280',
        },
        {
          url: 'https://note.com/laplust/n/n10dc6fbcd657',
          title: 'SAHIを用いた微小物体検出',
          description: '2025年11月18日',
          image: 'https://assets.st-note.com/production/uploads/images/229601215/rectangle_large_type_2_3584472641e773415d5fd23a465fc720.png?width=1280',
        },
        {
          url: 'https://ibisml.org/ibis2024/posters/#:~:text=1%2DE%2D16,-%5D%20Echo%20State%20Network',
          title: '第27回情報論的学習理論ワークショップ ポスター研究発表',
          description: '2024年11月5日',
          image: 'https://ibisml.org/ibis2024/files/2024/05/ibisws-header-2024-1.png',
        },
        {
          url: 'https://pypi.org/project/esn-lab/',
          title: 'esn_lab PyPIページ',
          description: '',
          image: 'https://i.gzn.jp/img/2023/05/25/pypi-was-subpoenaed/00.jpg',
          imageFit: 'height'
        },
        {
          url: 'https://apps.apple.com/jp/app/clustime/id6749456160',
          title: 'ClusTime -App Store-',
          description: '',
          image: 'https://toolbox.marketingtools.apple.com/_next/static/media/apps.1da5aac4.png',
          imageFit: 'height'
        },
        {
          url: 'https://play.google.com/store/apps/details?id=com.clustime.clustime.beta&hl=ja',
          title: 'ClusTime -Play Store-',
          description: '',
          image: 'https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/09/icon0162-229x256.png',
          imageFit: 'height'
        },
        {
          url: 'https://wicon.jp/2023/final',
          title: 'WiCON2023 本選大会 結果発表',
          description: '2024年3月5日',
          image: 'https://storage.googleapis.com/studio-design-asset-files/projects/v7qGwxbMqL/s-2400x1601_v-frms_webp_737747cb-01b5-4646-825e-33d71185b90f_small.webp',
        },
        {
          url: 'https://www.sasebo.ac.jp/articles/38817/',
          title: '亀山電機 第6回学生ものづくり＆アイデアコンテスト',
          description: '2020年11月24日',
          image: 'https://www.sasebo.ac.jp/wp-content/uploads/2023/07/c422c9289972914bde9a8f41c6b9ad3b-900x675.jpg',
        },
        {
          url: 'https://www.sasebo.ac.jp/articles/31082/',
          title: '第3回西九州させぼ広域都市圏ビジネスプランコンテスト「START UP 99」',
          description: '2022年4月21日',
          image: 'https://www.sasebo.ac.jp/wp-content/uploads/2022/04/8cf200473b0f84be2957e5231dbbaf05.jpg',
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
        'March 2026 — Graduated, Department of Interdisciplinary Fundamental Engineering, Faculty of Engineering, Kyushu University',
        "April 2026 — Enrolled in Interdisciplinary Graduate School of Engineering Sciences, Kyushu University (Master's Program)",
      ],
    },
    techStack: {
      heading: 'Tech Stack',
    },
    summary: {
      heading: 'Summary',
      items: [
        {
          subtitle: 'Practical-Level Problem-Solving Ability',
          body: 'Through multiple projects including a long-term internship, I have cultivated upstream decision-making capabilities—extracting the essential challenges from real-world constraints and forming technology selection and implementation plans to address them. I also place great emphasis on a thinking cycle that avoids being bound by prior hypotheses or single metrics when evaluating results, enabling objective assessment that leads to the next approach.',
        },
        {
          subtitle: 'Teamwork and Leadership',
          body: "I have formed teams on my own initiative and carried out 'implementation verification that secured over ¥3.6 million in budget for solving regional environmental challenges' and 'the conception, development, and launch of a production-grade SNS application.' In addition to these self-initiated projects, I have held multiple central roles within campus organizations (all leader or sub-leader positions), gaining experience in team goal-setting, task allocation, and progress management.",
        },
        {
          subtitle: 'Cross-Domain Tech Stack',
          body: 'I have development experience across a wide range of domains, including machine learning (Python/PyTorch), web (React), and mobile (Flutter/Swift). With machine learning via Python as my core strength, I have developed the ability to bring that expertise into real-world applications.',
        },
      ],
    },
    links: {
      heading: 'Links',
      items: [
        {
          url: 'https://note.com/laplust/n/n35b7987e61c6',
          title: 'Pick and Placeタスクの困難さに関する分析と考察 - robosuite / SAC -',
          description: '2025.12.29',
          image: 'https://assets.st-note.com/production/uploads/images/239755547/rectangle_large_type_2_fda7130e674151ac2d1933f5937e9d71.png?width=1280',
        },
        {
          url: 'https://note.com/laplust/n/n10dc6fbcd657',
          title: 'SAHIを用いた微小物体検出',
          description: '2025.11.18',
          image: 'https://assets.st-note.com/production/uploads/images/229601215/rectangle_large_type_2_3584472641e773415d5fd23a465fc720.png?width=1280',
        },
        {
          url: 'https://ibisml.org/ibis2024/posters/#:~:text=1%2DE%2D16,-%5D%20Echo%20State%20Network',
          title: '27th Workshop on Information-Theoretic Learning Theory — Poster Research Presentation',
          description: 'November 5, 2024',
          image: 'https://ibisml.org/ibis2024/files/2024/05/ibisws-header-2024-1.png',
        },
        {
          url: 'https://pypi.org/project/esn-lab/',
          title: 'esn_lab PyPI Page',
          description: '',
          image: 'https://i.gzn.jp/img/2023/05/25/pypi-was-subpoenaed/00.jpg',
          imageFit: 'height'
        },
        {
          url: 'https://apps.apple.com/jp/app/clustime/id6749456160',
          title: 'ClusTime -App Store-',
          description: '',
          image: 'https://toolbox.marketingtools.apple.com/_next/static/media/apps.1da5aac4.png',
          imageFit: 'height'
        },
        {
          url: 'https://play.google.com/store/apps/details?id=com.clustime.clustime.beta&hl=ja',
          title: 'ClusTime -Play Store-',
          description: '',
          image: 'https://iconlab.kentakomiya.com/wp/wp-content/uploads/2019/09/icon0162-229x256.png',
          imageFit: 'height'
        },
        {
          url: 'https://wicon.jp/2023/final',
          title: 'WiCON2023 Final Round Results Announcement',
          description: 'March 5, 2024',
          image: 'https://storage.googleapis.com/studio-design-asset-files/projects/v7qGwxbMqL/s-2400x1601_v-frms_webp_737747cb-01b5-4646-825e-33d71185b90f_small.webp',
        },
        {
          url: 'https://www.sasebo.ac.jp/articles/38817/',
          title: 'Kameyama Denki 6th Student Monozukuri & Idea Contest',
          description: 'November 24, 2020',
          image: 'https://www.sasebo.ac.jp/wp-content/uploads/2023/07/c422c9289972914bde9a8f41c6b9ad3b-900x675.jpg',
        },
        {
          url: 'https://www.sasebo.ac.jp/articles/31082/',
          title: "3rd Nishi-Kyushu Sasebo Wide-Area City Business Plan Contest 'START UP 99'",
          description: 'April 21, 2022',
          image: 'https://www.sasebo.ac.jp/wp-content/uploads/2022/04/8cf200473b0f84be2957e5231dbbaf05.jpg',
        },
      ],
    },
  },
};
