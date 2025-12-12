// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Kumele Test Demo",
  description: "Swipe, Figma+AI, Passkeys & 2FA demo for kumele.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="min-h-full bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
          <header className="border-b border-slate-200/60 dark:border-slate-800">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <div className="font-semibold tracking-tight">
                Kumele Test Demo
              </div>
              <nav className="flex items-center gap-4 text-sm">
                <a href="/" className="hover:underline">
                  Home
                </a>
                <a href="/swipe" className="hover:underline">
                  Swipe
                </a>
                <a href="/figma-ai" className="hover:underline">
                  Figma+AI
                </a>
                <a href="/auth" className="hover:underline">
                  Auth
                </a>

                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="rounded-full border border-slate-300 px-3 py-1 text-xs dark:border-slate-700">
                      Sign in
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
