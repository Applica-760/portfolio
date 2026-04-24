# 概要

フルスタック開発・AWSインフラ構築・IaC の実践的な習得を主目的としたプロジェクトです。

あくまでインフラ習熟を主目的とし、アップロードしたPDFを元に問題を作成できる簡単なRAGアプリケーションを作成しました。

実装は[GitHub↗︎](https://github.com/Applica-760/doc-drill)をご覧ください。

# 設計

<img src="https://raw.githubusercontent.com/Applica-760/doc-drill/refs/heads/main/docs/assets/architecture.svg" alt="アーキテクチャ" width="60%" />

<br>

# 主な機能

- PDF のアップロードと管理
- Amazon Bedrock（Claude）を用いた問題・解説の自動生成
- 生成した問題の保存と再演習

<br>

# 技術スタック

**フロントエンド：** Next.js / TypeScript / Mantine UI<br>
**バックエンド：** FastAPI (Python)<br>
**データベース：** RDS PostgreSQL 16<br>
**ストレージ：** Amazon S3<br>
**AI / RAG：** Amazon Bedrock（Claude）/ Knowledge Bases<br>
**インフラ：** ECS Fargate / VPC / ALB / IAM<br>
**IaC：** Terraform<br>
**開発環境：** Docker / Docker Compose

<br>

# 設計・実装のポイント

## インフラのコード化（IaC）
Terraform で全インフラをコード管理し、環境の再現性と変更履歴の追跡を実現しました。<br>
手動操作を排除することで、構成の一貫性を保ちながら反復的な検証を行えます。

## コンテナによる環境統一
ローカル開発は Docker Compose で完結させ、本番（ECS Fargate）との差異を最小化しました。<br>
フロントエンド・バックエンドを別コンテナで管理し、独立したスケーリングと責務分離を実現しています。

## RAGパイプライン
Amazon Bedrock Knowledge Bases でPDF内容をベクトル化・検索し、Claudeへのプロンプトに組み込むことで<br>
ドキュメントに基づいた問題生成を実現しています。

<br>

# 関連ドキュメント

本プロジェクトの設計・構成に関する詳細はGitHubのドキュメントにまとめています。

- [プロジェクト構造](https://github.com/Applica-760/doc-drill/blob/main/docs/structure.md) — ディレクトリ構成・レイヤー別の参照先ガイド
- [技術選定（ADR）](https://github.com/Applica-760/doc-drill/blob/main/docs/adr.md) — 技術選定の意思決定記録


<br>

# リンク

<linkcard-container>

<linkcard url="https://github.com/Applica-760/doc-drill"
title="doc-drill GitHubリポジトリ"
description=""
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

</linkcard-container>

