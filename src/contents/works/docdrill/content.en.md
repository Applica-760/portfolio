# Overview

The primary goal of this project was to gain hands-on experience with full-stack development, AWS infrastructure, and Infrastructure as Code (IaC).

With a focus on mastering infrastructure, I built a simple RAG application that generates study questions from uploaded PDF documents.

The implementation is available on [GitHub↗︎](https://github.com/Applica-760/doc-drill).

# Architecture

<img src="https://raw.githubusercontent.com/Applica-760/doc-drill/refs/heads/main/docs/assets/architecture.svg" alt="Architecture" width="60%" />

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
**AI / RAG:** Amazon Bedrock (Claude) / Knowledge Bases<br>
**Infrastructure:** ECS Fargate / VPC / ALB / IAM<br>
**IaC:** Terraform<br>
**Development:** Docker / Docker Compose

<br>

# Design & Implementation Highlights

## Infrastructure as Code (IaC)
All infrastructure is managed as code with Terraform, ensuring environment reproducibility and a full audit trail of changes.<br>
By eliminating manual operations, I can iterate on configurations consistently and reliably.

## Unified Environments with Containers
Local development is fully self-contained with Docker Compose, minimizing drift from the production environment (ECS Fargate).<br>
Frontend and backend run as separate containers, enabling independent scaling and clear separation of concerns.

## RAG Pipeline
PDF content is vectorized and retrieved via Amazon Bedrock Knowledge Bases, then injected into prompts for Claude,<br>
enabling question generation grounded in the uploaded document.

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
