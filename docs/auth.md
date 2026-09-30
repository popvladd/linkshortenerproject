# Authentication

All authentication in this app is handled by **Clerk**. Do not introduce any other auth method, library, or custom session/token handling.

## Key files

- [app/layout.tsx](../app/layout.tsx) — wraps the app in `ClerkProvider` (shadcn theme).
- [proxy.ts](../proxy.ts) — `clerkMiddleware()` runs on all non-static routes.
- [app/sign-in/[[...sign-in]]/page.tsx](../app/sign-in/[[...sign-in]]/page.tsx) and [app/sign-up/[[...sign-up]]/page.tsx](../app/sign-up/[[...sign-up]]/page.tsx) — fallback catch-all routes Clerk redirects to if a modal can't be shown directly (e.g. deep link).

## Rules

- **Sign in / sign up must always launch as a modal.** Use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` from `@clerk/nextjs` (see [app/page.tsx](../app/page.tsx)). Never link to a full-page sign-in/sign-up flow as the primary entry point.
- **`/dashboard` is a protected route.** It requires an authenticated user. Enforce this in `proxy.ts` (Clerk middleware) using `auth.protect()` for the `/dashboard` route, and/or check the session server-side in the route's layout or page and redirect unauthenticated users to `/`.
- **Signed-in users visiting `/` must be redirected to `/dashboard`.** Check the user's auth state server-side in [app/page.tsx](../app/page.tsx) (e.g. via `auth()` from `@clerk/nextjs/server`) and issue a redirect before rendering the signed-out marketing content.
- Use Clerk's `<Show when="signed-in">` / `<Show when="signed-out">` components (or `useAuth`/`auth()`) to conditionally render UI — don't build custom logic to infer auth state.
- Keep the Clerk `appearance`/theme (shadcn) consistent across all Clerk components.
