// src/app/auth/page.tsx
"use client";

import { SignIn } from "@clerk/nextjs";

export default function AuthPage() {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Passkey Login Demo
        </h1>
        <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
          This sign-in form is powered by Clerk. Passkeys and Authenticator-app
          2FA are enabled in the Clerk dashboard, so you can register a passkey
          and test multi-factor login.
        </p>
      </div>

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <SignIn
          routing="hash" 
          appearance={{
            elements: {
              card: "shadow-none bg-transparent",
            },
          }}
        />
      </div>
    </section>
  );
}
