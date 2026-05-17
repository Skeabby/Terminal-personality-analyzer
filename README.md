# ⚡ TERMINAL PERSONALITY ANALYZER

```
██████╗ ███████╗██╗   ██╗ ██████╗██╗  ██╗███████╗    ███████╗██╗  ██╗███████╗
██╔══██╗██╔════╝╚██╗ ██╔╝██╔════╝██║  ██║██╔════╝    ██╔════╝╚██╗██╔╝██╔════╝
██████╔╝███████╗ ╚████╔╝ ██║     ███████║█████╗      █████╗   ╚███╔╝ █████╗
██╔═══╝ ╚════██║  ╚██╔╝  ██║     ██╔══██║██╔══╝      ██╔══╝   ██╔██╗ ██╔══╝
██║     ███████║   ██║   ╚██████╗██║  ██║███████╗    ███████╗██╔╝ ██╗███████╗
╚═╝     ╚══════╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═╝╚══════╝
```

> **Brutally accurate AI-powered internet personality diagnostics. No mercy. All facts.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff69b4?style=flat-square)](https://www.framer.com/motion)
[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 🖥️ What Is This?

**Terminal Personality Analyzer** (a.k.a. `PSYCHE.EXE`) is a cinematic hacker-aesthetic web app that takes any text — messages, bios, tweets, shower thoughts — and delivers a **funny, eerily accurate AI personality diagnosis**.

Think: *a terminal that reads your soul.*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔬 **AI Analysis** | Powered by Gemini 1.5 Flash or Groq Llama 3 (both free) |
| 🖥️ **Terminal UI** | Cinematic hacker aesthetic with CRT scanlines & matrix rain |
| ⚡ **Typing Animation** | Results appear character-by-character like a real terminal |
| 🔍 **Fake Scan Sequence** | Multi-phase loading animation before results appear |
| 📊 **Rich Results** | Archetype, threat level, traits, flags, internet age, verdict |
| 🎨 **Color-coded Threats** | 5-level threat system: LOW → MAXIMUM with matching colors |
| 📋 **Copy Report** | One-click copy of the full formatted analysis |
| ⌨️ **Keyboard Shortcuts** | `Ctrl+Enter` to analyze, `Esc` to reset |
| 📱 **Fully Responsive** | Works beautifully on mobile |
| 🔔 **Toast Notifications** | Terminal-style notifications for all actions |
| 🌧️ **Matrix Rain** | Canvas-based animated background |
| 🛡️ **Error Handling** | Graceful error states with helpful messages |

---

## 🏗️ Project Structure

```
terminal-personality-analyzer/
├── app/
│   ├── globals.css          # Terminal CSS, animations, custom styles
│   ├── layout.tsx           # Root layout with fonts & toast provider
│   ├── page.tsx             # Main page & state management
│   └── api/
│       └── analyze/
│           └── route.ts     # POST /api/analyze — AI backend
├── components/
│   ├── matrix-rain.tsx      # Canvas matrix rain animation
│   ├── hero-section.tsx     # Animated landing hero
│   ├── analyzer-terminal.tsx # Main input terminal UI
│   ├── scan-sequence.tsx    # Loading scan animation
│   ├── result-display.tsx   # Analysis result cards
│   ├── footer-terminal.tsx  # Footer
│   └── ui/
│       └── toast-provider.tsx # Toast notification system
├── lib/
│   ├── types.ts             # Shared TypeScript types
│   ├── ai/
│   │   ├── prompt.ts        # AI prompt builder
│   │   ├── gemini.ts        # Google Gemini integration
│   │   └── groq.ts          # Groq integration
│   └── utils/
│       ├── cn.ts            # Class name utility
│       ├── parse.ts         # AI response parser
│       └── validate.ts      # Input validation
├── .env.example             # Environment variable template
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start (Local)

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/terminal-personality-analyzer.git
cd terminal-personality-analyzer
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your API key (see [Connecting the AI API](#-connecting-the-ai-api) below).

### 3. Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live. 🎉

---

## 🤖 Connecting the AI API

You have two free options. Pick one:

### Option A: Google Gemini (Recommended)

1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Create a free API key
3. In `.env.local`:
   ```
   GEMINI_API_KEY=your_key_here
   AI_PROVIDER=gemini
   ```

**Free tier:** 15 requests/minute, 1500 requests/day. More than enough.

### Option B: Groq (Fastest)

1. Go to [https://console.groq.com/keys](https://console.groq.com/keys)
2. Create a free API key
3. In `.env.local`:
   ```
   GROQ_API_KEY=your_key_here
   AI_PROVIDER=groq
   ```

**Free tier:** Very generous. Llama 3 8B is extremely fast (< 1 second).

### No API Key?

The app includes a **mock fallback** — it works without any API key during development with a sample result.

---

## ☁️ Deploy to Vercel (Free)

### Option 1: One-Click (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Option 2: CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Add Environment Variables on Vercel

1. Go to your project dashboard on [vercel.com](https://vercel.com)
2. **Settings → Environment Variables**
3. Add:
   - `GEMINI_API_KEY` = your key
   - `AI_PROVIDER` = `gemini`
4. Redeploy

That's it. Your app is live on a `.vercel.app` domain for free.

---

## 🎨 Customization

### Change AI Model

In `lib/ai/gemini.ts`:
```ts
// Change from Flash to Pro for higher quality (slower)
const GEMINI_API_URL = "...models/gemini-1.5-pro:generateContent";
```

In `lib/ai/groq.ts`:
```ts
// Available Groq models:
model: "llama3-8b-8192"    // Fastest, free
model: "llama3-70b-8192"   // Better quality
model: "mixtral-8x7b-32768" // Good balance
```

### Tweak the Analysis Prompt

Edit `lib/ai/prompt.ts` to change the personality categories, tone, or output format.

### Change the Color Theme

All colors are CSS variables in `app/globals.css`:
```css
--terminal-green: #00ff88;   /* Primary accent */
--terminal-cyan: #00d4ff;    /* Secondary */
--terminal-amber: #ffb300;   /* Warning */
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| AI (Option A) | Google Gemini 1.5 Flash |
| AI (Option B) | Groq Llama 3 8B |
| Hosting | Vercel (free tier) |
| Fonts | JetBrains Mono, Share Tech Mono, Exo 2 |

---

## 📊 Analysis Output

Each analysis produces:

```
ARCHETYPE     — 2-4 word personality label
THREAT LEVEL  — LOW / MODERATE / HIGH / CRITICAL / MAXIMUM
SUMMARY       — 2-3 sentence diagnosis (typed character by character)
TRAITS        — 5 specific detected behaviors
FLAGS         — 3-5 system alert behavioral warnings
INTERNET AGE  — How old their internet personality is
VERDICT       — Final savage one-liner
CONFIDENCE    — 75–99% match percentage
```

---

## 📜 License

MIT — do whatever you want with it.

---

*PSYCHE.EXE — Initializing soul scanner... Please hold.*
