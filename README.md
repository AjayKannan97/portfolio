# Ajay Kannan — Portfolio

Personal portfolio site built with Next.js 14 (App Router) and Tailwind CSS. Designed to deploy to Vercel in about 60 seconds.

## Stack

- **Next.js 14** — App Router, React Server Components
- **Tailwind CSS** — utility-first styling
- **next/font (Google Fonts)** — Fraunces (display serif), IBM Plex Sans (body), IBM Plex Mono (labels)
- **Zero runtime JS libraries** beyond React — animations are CSS + a small IntersectionObserver hook

## Local development

Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All portfolio copy lives in **one file**: `lib/data.js`. Edit your bio, experience, projects, skills, and publications there — every component reads from it.

- `lib/data.js` — **edit this for content changes**
- `app/globals.css` — colors, typography, reveal animations (CSS variables at top)
- `tailwind.config.js` — theme tokens (`ink`, `paper`, `ember` palettes)

## Deploying to Vercel

### Option A — via the Vercel dashboard (recommended, 3 minutes)

1. **Push the project to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git branch -M main
   git remote add origin https://github.com/AjayKannan97/portfolio.git
   git push -u origin main
   ```
   (Create the empty repo on GitHub first.)

2. **Import on Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click **"Import Git Repository"** and select your portfolio repo
   - Vercel auto-detects Next.js — no configuration needed
   - Click **Deploy**

3. **Done.** Your site is live at `https://<project-name>.vercel.app`. Every `git push` to `main` re-deploys automatically.

### Option B — via the Vercel CLI

```bash
npm i -g vercel
vercel           # follow prompts; first run links the project
vercel --prod    # push to production
```

### Custom domain

In Vercel: **Project → Settings → Domains → Add**. Point your registrar's DNS to Vercel (they'll show the exact records). SSL is automatic.

## Project structure

```
portfolio/
├── app/
│   ├── layout.jsx         # fonts, metadata, body wrapper
│   ├── page.jsx           # composes all sections
│   └── globals.css        # theme, animations, grain overlay
├── components/
│   ├── Nav.jsx            # sticky nav with active-section tracking
│   ├── Hero.jsx           # large editorial hero
│   ├── About.jsx
│   ├── Experience.jsx     # numbered timeline
│   ├── Projects.jsx       # 6 projects with generative SVG visuals
│   ├── Skills.jsx
│   ├── Publications.jsx
│   ├── Contact.jsx
│   ├── SectionHeader.jsx  # shared section header
│   └── Reveal.jsx         # IntersectionObserver fade-in wrapper
├── lib/
│   └── data.js            # <-- all content lives here
├── tailwind.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## Design notes

- **Aesthetic**: warm editorial dark mode — cream on near-black with a single amber accent. Designed to feel like a print magazine rather than a generic developer template.
- **Typography**: Fraunces is a variable-axis serif; the italic-axis pull is used deliberately on accent words.
- **Motion**: staggered fade-ups on first paint (hero), IntersectionObserver reveals on scroll (everything else). No scroll-jacking.
- **Accessibility**: semantic headings, sufficient contrast, keyboard-navigable, reduced-motion respected via standard CSS.

## License

Content (bio, experience, project descriptions) © Ajay Kannan. Code scaffolding is free to reuse.
