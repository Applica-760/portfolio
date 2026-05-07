# Overview

The primary goal of this project was to gain hands-on experience with full-stack development, AWS infrastructure, and Infrastructure as Code (IaC).

With a focus on mastering infrastructure, I built a simple RAG application that generates study questions from uploaded PDF documents.

The implementation is available on [GitHub↗︎](https://github.com/Applica-760/doc-drill).

# Architecture

<img src="https://raw.githubusercontent.com/Applica-760/doc-drill/107538386b9da42e260e2525ccfd1decdd5b5e72/docs/assets/system-overview.svg" alt="Architecture" width="60%" />

<br>

# Features

- Upload and manage PDF documents
- Automatic question and explanation generation via Amazon Bedrock (Claude)
- Save and re-practice generated questions

<br>

# Tech Stack

**Frontend:** Next.js / TypeScript / Mantine UI<br>
**Backend:** FastAPI (Python)<br>
**Database:** RDS PostgreSQL 16<br>
**Storage:** Amazon S3<br>
**AI / RAG:** Amazon Bedrock (Claude / Titan Embeddings) / pgvector<br>
**Infrastructure:** ECS Fargate / VPC / ALB / IAM<br>
**IaC:** Terraform<br>
**Development:** Docker / Docker Compose / MinIO<br>
**Code Quality:** Ruff / mypy / GitHub Actions (CI)

<br>

# Design & Implementation Highlights

## Infrastructure as Code (IaC)
All infrastructure is managed as code with Terraform, ensuring environment reproducibility and a full audit trail of changes.<br>
By eliminating manual operations, I can iterate on configurations consistently and reliably.

## Unified Environments with Containers
Local development is fully self-contained with Docker Compose, minimizing drift from the production environment (ECS Fargate).<br>
Frontend and backend run as separate containers, enabling independent scaling and clear separation of concerns.

## RAG Pipeline

The MVP used Amazon Bedrock Knowledge Bases for managed vector search, but I later migrated to a self-built pipeline to deepen my understanding of RAG internals.

The current implementation chunks and embeds documents with Amazon Titan Embeddings, performs similarity search using pgvector (HNSW index) on RDS PostgreSQL, and injects the retrieved chunks into Claude's prompt to generate questions grounded in the uploaded PDF.

## Type Safety & Code Quality

FastAPI's Pydantic models serve as the Single Source of Truth: OpenAPI schemas are auto-generated from them, and TypeScript types on the frontend are derived from those schemas, eliminating manual type synchronization. Ruff (lint/format) and mypy (type checking) are integrated into a GitHub Actions CI pipeline for automated static analysis.

<br>

# Documentation

Detailed design and configuration notes are available in the GitHub repository.

- [Project Structure](https://github.com/Applica-760/doc-drill/blob/main/docs/structure.md) — Directory layout and a guide to finding relevant files by task
- [Architecture Decision Records (ADR)](https://github.com/Applica-760/doc-drill/blob/main/docs/adr.md) — Records of technology selection decisions

<br>

# Links

<linkcard-container>

<linkcard url="https://github.com/Applica-760/doc-drill"
title="doc-drill GitHub Repository"
description=""
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

</linkcard-container>
