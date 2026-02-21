<<<<<<< HEAD
# Sneha A — AI/ML Portfolio

A modern, production-grade portfolio website for an AI/ML and Generative AI practitioner. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom theme: violet, indigo, blue, cyan glassmorphism)
- **Framer Motion** (animations, scroll reveals)
- **Lucide React** (icons)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your resume**  
   Place your resume PDF in the `public` folder and name it:
   ```
   public/Resume_DS_new.pdf
   ```
   The "Download Resume" and "Open in New Tab" links will use this file.

3. **Update contact info**  
   Edit `src/data/content.ts` to set your real email, phone, and social links (GitHub, LinkedIn, etc.).

4. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

- `src/app/` — App Router layout and page
- `src/components/` — Section components (Header, Hero, About, Expertise, Career, Projects, Research, Resume, Contact, Footer)
- `src/data/` — Content and copy (content.ts, projects.ts, research.ts)
- `src/lib/utils.ts` — Utility (e.g. `cn` for classnames)

## Customization

- **Colors & theme:** `tailwind.config.ts` and `src/app/globals.css`
- **Copy:** `src/data/content.ts`, `src/data/projects.ts`, `src/data/research.ts`
- **SEO:** `src/app/layout.tsx` (metadata)

## License

Private — for personal portfolio use.
=======
# portfolio
>>>>>>> 217e517084d4314527b70cc1cdef2bec3c9915bd
