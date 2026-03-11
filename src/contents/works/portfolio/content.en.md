# Overview

This is the portfolio site itself.<br>
Built with React + TypeScript and deployed on GitHub Pages.<br>
It features a custom Markdown renderer and a carefully considered component architecture.

<br>

# Design Highlights

## Clean Separation of Content and Logic

All work content is managed as `.md` / `.ts` files under `src/contents/`, with nothing hardcoded into UI components.<br>
Adding a new work entry requires only adding a content file — no changes to existing components needed.

## Rich Content Authoring with a Custom MarkdownRenderer

Each work page's content is written in Markdown files and rendered by `MarkdownRenderer`.<br>
Standard Markdown syntax makes content creation straightforward and flexible.
Additionally, custom elements allow link cards and image layouts to be embedded directly in content files.



<br>

# Directory Structure

```
src/
├── app/
│   ├── App.tsx              # Root with MantineProvider / LanguageProvider
│   └── routes.tsx           # Language-aware routing based on /:lang
├── components/
│   ├── common/              # Header / Footer
│   ├── profile/             # Profile page sections
│   ├── works/               # Works list and detail components
│   └── ui/                  # Shared UI components
├── contents/
│   ├── types.ts             # Shared types including LocalizedContent<T>
│   ├── profile.content.ts   # Profile page content (ja/en)
│   ├── works.content.ts     # Works list metadata (ja/en)
│   └── works/               # Detailed content for each work
├── contexts/
│   └── LanguageContext.tsx  # Global language state management
├── hooks/
│   └── useContent.ts        # Hook that returns content for the current language
└── pages/
```

<br>

# Links

<linkcard-container>

<linkcard url="https://github.com/Applica-760/portfolio"
title="Portfolio GitHub Repository"
description=""
image="https://assets.st-note.com/production/uploads/images/24127642/rectangle_large_type_2_802007386bb75d9db15a6dd2880e2584.jpg"></linkcard>

</linkcard-container>
