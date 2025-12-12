// src/app/twofa/setup/page.tsx
import { SignedIn, SignedOut, SignInButton, UserProfile } from "@clerk/nextjs";

export default function TwoFASetupPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        2FA Setup (Authenticator App)
      </h1>

      <p className="max-w-xl text-sm text-slate-600 dark:text-slate-300">
        Here you can enable 2-factor authentication using an authenticator app
        like Google Authenticator or Microsoft Authenticator. Clerk will
        generate a QR code and verify 6-digit TOTP codes automatically.
      </p>

      <SignedOut>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
            You need to be signed in to configure 2FA.
          </p>
          <SignInButton mode="modal">
            <button className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white dark:bg-slate-700">
              Sign in
            </button>
          </SignInButton>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-950">
          <UserProfile
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "shadow-none bg-transparent",
              },
            }}
          />
        </div>
      </SignedIn>
    </section>
  );
}
