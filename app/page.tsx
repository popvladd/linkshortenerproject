import Image from "next/image";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Secure links
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Shorten your links with a polished, secure workflow.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
            Create an account to manage your links, protect your workspace, and access your profile from anywhere.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Show when="signed-out">
              <SignUpButton mode="modal">
                <Button size="lg">Create account</Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button variant="outline" size="lg">
                  I already have an account
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                You are signed in
              </div>
            </Show>
          </div>
        </div>
      </main>
    </div>
  );
}
