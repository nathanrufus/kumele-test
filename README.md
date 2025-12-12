# kumele-test# Kumele Test Demo

Mini Next.js app built as a technical test for the Kumele event/match project.

It demonstrates:

- Swipe card animation tuned to match a reference video
- AI-assisted Figma → code workflow
- Passkey (WebAuthn) login integration
- 2FA using an authenticator app (Google / Microsoft)

## Tech Stack

- Next.js 13+ (App Router, TypeScript)
- Tailwind CSS
- Framer Motion (swipe interaction)
- Clerk (authentication, passkeys, TOTP 2FA)

## Routes & Features

### `/swipe` – Swipe Animation

- Tinder-style card swipe.
- Supports mouse **and** touch.
- Threshold + velocity-based decision (accept/reject).
- Spring snap-back when swipe is not strong enough.
- Easily extensible to real match data.

### `/figma-ai` – Figma → Code (AI-Assisted)

- One app screen implemented from Figma.
- Initial JSX + Tailwind generated with an AI tool.
- Refactored into reusable components:
  - `FigmaHeader`
  - `MatchFilters`
  - `MatchList`
- Responsive for mobile, tablet, and desktop.

#### AI Workflow

1. Took a Figma frame for the matches screen.
2. Used [AI tool name] to generate initial React + Tailwind layout.
3. Split the generated JSX into smaller components.
4. Cleaned class names, removed unnecessary wrappers, and added responsive breakpoints.

### `/auth` – Passkey Login Demo

- Clerk `<SignIn />` component configured for this project.
- Passkeys/WebAuthn enabled in Clerk dashboard.
- Can register and use passkeys for login (browser/platform support required).

### `/twofa/setup` – 2FA with Authenticator App

- Renders Clerk `<UserProfile />` with security section.
- From here you can:
  - Enable 2FA via authenticator app.
  - Scan QR code with Google Authenticator / Microsoft Authenticator.
  - Confirm 6-digit codes.
- After enabling, sign-in flow requires a valid 6-digit TOTP code.

## Running Locally

```bash
git clone <repo-url>
cd kumele-test
npm install
npm run dev
