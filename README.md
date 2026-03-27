# Amitt Bhardwj — Portfolio

AI-First Python Developer portfolio built with Next.js 14 + TypeScript + Tailwind CSS.

## 🚀 Deploy to Vercel (3 commands)

Open Terminal and run:

```bash
cd ~/Downloads/portfolio
npm install
npx vercel --prod
```

That's it! Vercel CLI will:
1. Open your browser to log in (free account at vercel.com)
2. Ask a few project setup questions (press Enter for all defaults)
3. Deploy and give you a live URL like `https://amitt-portfolio.vercel.app`

## 🛠 Local Development

```bash
cd ~/Downloads/portfolio
npm install
npm run dev
# Open http://localhost:3000
```

## 📧 Wiring Up the Contact Form

The contact form API route is at `app/api/contact/route.ts`.
To actually send emails, sign up at [resend.com](https://resend.com) (free tier),
then follow the instructions in that file.

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page
│   ├── globals.css       # All styles + animations
│   └── api/contact/      # Contact form API
├── components/
│   ├── Navigation.tsx    # Sticky nav
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About + education
│   ├── Services.tsx      # Agent as a Service
│   ├── Skills.tsx        # Tech stack badges
│   ├── Projects.tsx      # OpenClaw + more
│   ├── Experience.tsx    # Timeline
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx
```
