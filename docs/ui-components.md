# UI Components

All UI in this app is built with **shadcn ui**. Do not hand-roll custom components for things shadcn already provides.

## Rules

- **Always use shadcn ui components.** Never create custom/ad hoc components (buttons, inputs, dialogs, menus, etc.) when a shadcn equivalent exists.
- Add new primitives via the shadcn CLI so they land in [components/ui/](../components/ui/) with the project's existing conventions (see [components/ui/button.tsx](../components/ui/button.tsx)) — don't write them by hand.
- Reuse existing primitives in [components/ui/](../components/ui/) instead of introducing variants; extend via `variant`/`size` props (`cva`) rather than new components.
- Compose features from shadcn primitives + [lib/utils.ts](../lib/utils.ts) (`cn`) instead of custom styling logic.
- Respect the project's shadcn config in [components.json](../components.json): style `base-nova`, `neutral` base color, `lucide` icons, RSC-enabled, path aliases (`@/components`, `@/lib`, `@/hooks`).
- Keep the neutral palette, Geist fonts, and Tailwind v4 setup consistent — don't introduce competing design systems or component libraries.
