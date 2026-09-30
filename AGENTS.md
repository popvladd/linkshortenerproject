# Agent Instructions for Link Shortener

This file is the entry point for LLMs working in this repository. The detailed guidance is split across `docs/` and should be read before making changes. **Always refer to the relevant `docs/*.md` file before generating any code.**

> [!IMPORTANT]
> Before writing or modifying ANY code, you MUST read the relevant individual file(s) in [docs/](docs/) that cover the area you are touching (see the Documentation Map below). This is non-negotiable and applies even for small or seemingly obvious changes. Do not rely on memory of a doc's contents from earlier in the conversation — re-read the file if there is any doubt. If no doc covers the area you're changing, follow the Non-Negotiables below and use nearby code as the reference.

## Table of Contents

- [Project Overview](#project-overview)
- [Non-Negotiables](#non-negotiables)
- [Documentation Map](#documentation-map)
- [Maintaining This File](#maintaining-this-file)

## Project Overview

Link Shortener is a Next.js 16 (App Router) app for creating and managing shortened links.

- **Framework**: Next.js 16, React 19, TypeScript
- **Auth**: Clerk
- **Database**: Neon (Postgres) via Drizzle ORM
- **UI**: shadcn ui (`base-nova` style), Tailwind v4, base-ui primitives, lucide icons
- **Fonts/theme**: Geist fonts, neutral color palette

## Non-Negotiables

- Follow the local Next.js 16 guidance in `node_modules/next/dist/docs/` before changing App Router code.
- Default to Server Components and only add client-side code when state, effects, or browser APIs require it.
- Keep Clerk auth flow consistent with `app/layout.tsx`, `proxy.ts`, `app/sign-in/[[...sign-in]]/page.tsx`, and `app/sign-up/[[...sign-up]]/page.tsx`. See [docs/auth.md](docs/auth.md) for the full auth rules (Clerk-only, modal sign-in/up, `/dashboard` protection, `/` → `/dashboard` redirect for signed-in users).
- Treat `db/index.ts`, `db/schema.ts`, and `drizzle.config.ts` as the source of truth for database work.
- Reuse shared UI primitives from `components/ui/` and `lib/utils.ts` instead of introducing ad hoc variants. See [docs/ui-components.md](docs/ui-components.md) for the full shadcn ui rules (always use shadcn components, never hand-roll custom ones).
- Preserve the existing visual direction: neutral palette, Geist fonts, Tailwind v4, and the current shadcn/base-ui setup.
- Keep changes focused and consistent with nearby code style. Avoid unrelated refactors.
- Validate meaningful changes with the project scripts before handing work back (`npm run lint`, `npm run build`).

## Documentation Map

| Topic | File |
| --- | --- |
| Authentication (Clerk) | [docs/auth.md](docs/auth.md) |
| UI components (shadcn) | [docs/ui-components.md](docs/ui-components.md) |

## Maintaining This File

When introducing a new pattern or convention, add or update the relevant file in `docs/` and link it from the Documentation Map above so the next edit has a durable reference.
