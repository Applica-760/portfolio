# 概要

このポートフォリオサイト自体を開発しました。<br>
React + TypeScript で構築し、GitHub Pages にデプロイしています。<br>
カスタム Markdown レンダラー・コンポーネント設計など、実装上のこだわりが詰まっています。

<br>

# 設計の工夫

## コンテンツとロジックの完全分離

各実績のコンテンツは `.md` / `.ts` ファイルとして `src/contents/` 配下に集約しており、UIコンポーネントには一切ハードコードしていません。<br>
新しい実績を追加する際はコンテンツファイルを追加するだけで、既存コンポーネントへの変更は不要です。

## カスタム MarkdownRenderer によるリッチなコンテンツ記述

各実績ページのコンテンツは Markdown ファイルで記述し、`MarkdownRenderer` が描画します。<br>
標準の Markdown 記法で簡単かつ柔軟にコンテンツの作成が行えます。
さらに独自カスタム要素によって、コンテンツファイルから直接リンクカードや画像レイアウトを組み込めます。



<br>

# ディレクトリ構成

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
├── contents/
│   ├── types.ts             # LocalizedContent<T> など共通型
│   ├── profile.content.ts   # プロフィールページのコンテンツ（ja/en）
│   ├── works.content.ts     # 実績一覧メタデータ（ja/en）
│   └── works/               # 各実績の詳細コンテンツ
├── contexts/
│   └── LanguageContext.tsx  # 言語状態のグローバル管理
├── hooks/
│   └── useContent.ts        # 現在言語のコンテンツを返すフック
└── pages/
```

<br>

# リンク

<linkcard-container>

<linkcard url="https://github.com/Applica-760/portfolio"
title="Portfolio GitHubリポジトリ"
description=""
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

</linkcard-container>
