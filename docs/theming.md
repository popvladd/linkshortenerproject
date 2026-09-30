# Theming

The app is **dark mode only**. There is no light mode, no theme toggle, and no `prefers-color-scheme` switching.

## How it works

- [app/globals.css](../app/globals.css) defines the shadcn ui color tokens twice: once on `:root` (light values) and once on `.dark` (dark values), with `@custom-variant dark (&:is(.dark *))` controlling which set applies.
- [app/layout.tsx](../app/layout.tsx) forces dark mode by adding the `dark` class to the root `<html>` element and setting `style={{ colorScheme: "dark" }}` so native form controls, scrollbars, etc. render dark too.
- Because `dark` is applied at the `<html>` level, every Tailwind `dark:` variant in the app (e.g. `dark:bg-zinc-950`) is always active — there's no need for `prefers-color-scheme` or a client-side theme toggle.
- The Clerk `appearance={{ theme: shadcn }}` in [app/layout.tsx](../app/layout.tsx) reads the same CSS variables (`--card`, `--foreground`, `--primary`, etc.), so Clerk-rendered UI (sign-in/sign-up modals, `UserButton`) automatically follows dark mode without extra configuration.

## Rules

- **Do not add a light mode or a theme toggle.** The app must always render in dark mode.
- **Do not remove the `dark` class or the `colorScheme: "dark"` style from `<html>`** in [app/layout.tsx](../app/layout.tsx).
- When styling new components, prefer the shadcn semantic tokens (`bg-background`, `text-foreground`, `bg-card`, `border-border`, etc.) from [app/globals.css](../app/globals.css) over hardcoded palette classes (e.g. `zinc-*`) so components automatically match the enforced dark palette.
- If you must use a raw color utility with a `dark:` variant for a one-off case, ensure the non-`dark:` base class still looks correct — remember `dark:` classes are always active in this app.
- Keep the Clerk `shadcn` theme in [app/layout.tsx](../app/layout.tsx) so Clerk components stay visually consistent with the rest of the dark UI.
