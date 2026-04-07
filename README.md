# Adrar Website

Official website for **Adrar** — a digital marketing agency. Built with **Next.js**, **TypeScript**, and **Sanity CMS**.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/amalbycia/adrar-website.git
cd adrar-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=4w668b16
NEXT_PUBLIC_SANITY_DATASET=production
```

> ⚠️ This file is not included in the repo for security reasons. You must create it manually.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Sanity Studio (CMS)

The website uses **Sanity** as its content management system.

### Accessing Studio

Once the dev server is running, go to:

```
http://localhost:3000/studio
```

### ⚠️ Getting Access

You **must** be added as a member of the Sanity project to use the Studio. Ask the project owner to:

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Open the **Adrar** project
3. Go to **Members → Invite member**
4. Enter your email and assign the **Editor** or **Developer** role

Without this, Studio will show a permissions error.

---

## 🗂️ Project Structure

```
adrar-website/
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── our-work/         # Portfolio page
│   ├── contact/          # Contact page
│   └── studio/           # Sanity Studio (embedded)
├── components/
│   ├── home/             # Homepage-specific components
│   ├── layout/           # Navbar, Footer, etc.
│   └── shared/           # Reusable UI components
├── sanity/
│   ├── schemas/          # Content schemas (what fields exist in CMS)
│   └── lib/              # Sanity client & queries
├── public/               # Static assets (images, fonts)
└── .env.local            # ⚠️ You must create this (see above)
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework (App Router) |
| TypeScript | Type safety |
| Sanity v3 | Headless CMS |
| GSAP | Animations |
| Vanilla CSS | Styling |

---

## 📦 Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run lint` | Run linter |

---

## 🔗 Links

- **Live Site:** *(add URL when deployed)*
- **Sanity Studio (local):** [http://localhost:3000/studio](http://localhost:3000/studio)
- **Sanity Manage:** [sanity.io/manage](https://sanity.io/manage)
