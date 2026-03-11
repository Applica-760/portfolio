# Portfolio

React + TypeScript で構築した個人ポートフォリオサイト。GitHub Pages にデプロイしています。

**サイト:** https://applica-760.github.io/portfolio/

---

## Tech Stack

| カテゴリ | 技術 |
|---|---|
| フレームワーク | React 19 + TypeScript |
| UIライブラリ | Mantine v8 |
| ルーティング | React Router v7 |
| コンテンツ描画 | react-markdown + rehype-raw |
| ビルド | Vite |
| デプロイ | GitHub Pages (GitHub Actions) |

---

## 設計の工夫

### コンテンツとロジックの完全分離

各実績のコンテンツは `.md` / `.ts` ファイルとして `src/contents/` 配下に集約しており、UIコンポーネントには一切ハードコードしていません。新しい実績を追加する際はコンテンツファイルを追加するだけで、既存コンポーネントへの変更は不要です。

### カスタム MarkdownRenderer によるリッチなコンテンツ記述

各実績ページのコンテンツは Markdown ファイルで記述し、`MarkdownRenderer` コンポーネントが描画します。標準の Markdown 記法で簡単かつ柔軟にコンテンツの作成が行えます。さらに独自カスタム要素によって、コンテンツファイルから直接リンクカードや画像レイアウトを組み込めます。

```markdown
<linkcard-container>
  <linkcard url="https://..." title="タイトル" description="説明" image="..."></linkcard>
</linkcard-container>

<image-row images='["url1", "url2"]'></image-row>
```

---

## ディレクトリ構成

```
src/
├── app/
│   ├── App.tsx              # MantineProvider / LanguageProvider のルート
│   └── routes.tsx           # /:lang ベースの言語対応ルーティング
├── components/
│   ├── common/              # Header / Footer
│   ├── profile/             # プロフィールページ専用セクション
│   ├── works/               # 実績一覧・詳細専用コンポーネント
│   └── ui/                  # 汎用UIコンポーネント
│       ├── MarkdownRenderer.tsx
│       ├── LinkCard.tsx
│       ├── LinkCardContainer.tsx
│       └── ImageRow.tsx
├── contents/
│   ├── types.ts             # LocalizedContent<T> など共通型
│   ├── profile.content.ts   # プロフィールページのコンテンツ（ja/en）
│   ├── works.content.ts     # 実績一覧メタデータ（ja/en）
│   └── works/               # 各実績の詳細コンテンツ
│       ├── laplust/
│       │   ├── content.ja.md
│       │   └── content.en.md
│       └── ...
├── contexts/
│   └── LanguageContext.tsx  # 言語状態のグローバル管理
├── hooks/
│   └── useContent.ts        # 現在言語のコンテンツを返すフック
└── pages/
    ├── Home/
    └── Works/
```
