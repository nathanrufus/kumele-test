// src/app/page.tsx
export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">
        Kumele Test – Demo App
      </h1>

      <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        This mini app demonstrates the features requested for the kumele.com
        test:
        swipe animation, AI-assisted Figma-to-code, passkey login, and 2FA via
        authenticator app.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <a
          href="/swipe"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
        >
          <h2 className="font-semibold">Swipe Demo</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Tinder-style card swipe interaction tuned to match the reference
            video (mouse + touch).
          </p>
        </a>

        <a
          href="/figma-ai"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
        >
          <h2 className="font-semibold">Figma → Code (AI)</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            One app screen implemented from Figma using an AI-assisted workflow
            and refactored into clean components.
          </p>
        </a>

        <a
          href="/auth"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
        >
          <h2 className="font-semibold">Passkey Login</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Demo login page to integrate WebAuthn/passkeys.
          </p>
        </a>

        <a
          href="/twofa/setup"
          className="rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950"
        >
          <h2 className="font-semibold">2FA (Authenticator)</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Setup and verification pages for Google/Microsoft Authenticator
            TOTP codes.
          </p>
        </a>
      </div>
    </section>
  );
}
