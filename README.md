# Alejandro Rodriguez - Personal Portfolio

A modern, terminal-inspired portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed for cybersecurity professionals and AI engineers.

![Portfolio Preview](./public/preview.png)

## Features

- **Terminal-Style Design**: Dark theme with green/cyan accents inspired by cybersecurity tools
- **Interactive Terminal**: Easter egg terminal (Ctrl+T) that demonstrates technical skills
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first, works on all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards
- **Type-Safe**: Built with TypeScript

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif), JetBrains Mono (monospace)

## Sections

1. **Hero**: Terminal typing effect with call-to-action
2. **About**: Bio, experience timeline, education
3. **Skills**: Technical skills with progress bars
4. **Projects**: Featured cybersecurity & AI projects
5. **Research**: Academic publications and research areas
6. **Blog**: Latest articles preview
7. **Contact**: Contact form and information

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Hostinger (Recommended for your domain)

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be in the `dist` folder

3. Upload the contents of `dist` to your Hostinger public_html folder via FTP or File Manager

### Vercel (Alternative)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically on every push

## Customization

### Update Personal Information

Edit these files to customize:

- `src/app/layout.tsx` - Metadata, SEO
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section, timeline
- `src/components/Skills.tsx` - Technical skills
- `src/components/Projects.tsx` - Projects showcase
- `src/components/Research.tsx` - Publications
- `src/components/Contact.tsx` - Contact info

### Update Social Links

Replace these placeholders in the components:
- `YOUR_GITHUB_URL` - Your GitHub profile
- `YOUR_LINKEDIN_URL` - Your LinkedIn profile
- `contact@hackxolotl.com` - Your email

### Colors

The color scheme uses CSS variables in `src/app/globals.css`:
- `--terminal-green`: #22c55e (Primary accent)
- `--terminal-cyan`: #06b6d4 (Secondary accent)
- `--background`: #0a0a0a (Background)

## Interactive Terminal Commands

The terminal (Ctrl+T) supports these commands:
- `help` - Show available commands
- `about` - Display information
- `skills` - List technical skills
- `projects` - Show featured projects
- `contact` - Display contact info
- `resume` - Download resume
- `clear` - Clear terminal
- `exit` - Close terminal

## License

MIT License - Feel free to use this template for your own portfolio!

## Credits

Built with ❤️ by Alejandro Rodriguez
