# PetCare - Pet Shop & Grooming Services Website

A modern, responsive pet care services website built with Next.js 15, featuring smooth animations, a warm color palette, and a user-friendly booking system.

## Features

- **Hero Section** - Eye-catching landing with animated elements and call-to-action buttons
- **Services Section** - Showcase of pet care services (Grooming, Nail Cutting, Pet Hotel, Bathing, Body Check, Dental Care)
- **Packages Section** - Tiered pricing packages (Basic Care, Complete Care, Premium Stay)
- **Testimonials Section** - Customer reviews with pet avatars, ratings, and chat bubble design
- **Contact Form** - Comprehensive booking form with owner info, pet details, service selection, and scheduling
- **Smooth Scrolling** - Buttery smooth scroll experience powered by Lenis
- **Responsive Design** - Fully responsive across all device sizes
- **Toast Notifications** - User feedback on form submission using Sonner

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Smooth Scroll:** [Lenis](https://github.com/darkroomengineering/lenis)
- **Toast Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Font:** [Geist](https://vercel.com/font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pet-shop-website.git
   cd pet-shop-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pet-shop-website/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout with header, footer, providers
│   └── page.tsx          # Main landing page
├── components/
│   ├── layout/
│   │   ├── header.tsx    # Navigation header
│   │   └── footer.tsx    # Site footer
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── services.tsx      # Services section
│   ├── package.tsx       # Pricing packages section
│   ├── testimonials.tsx  # Customer testimonials
│   ├── contact.tsx       # Contact/booking form
│   └── smooth-scroll-provider.tsx  # Lenis smooth scroll
├── public/
│   └── pets/             # Pet avatar images
└── lib/
    └── utils.ts          # Utility functions
```

## Color Palette

The website uses a warm, friendly color scheme:

| Color | Light Mode | Description |
|-------|------------|-------------|
| Primary | Terracotta | Warm and welcoming |
| Secondary | Sage Green | Natural and calming |
| Accent | Amber/Honey | Playful and warm |
| Background | Warm Ivory | Cozy and inviting |

## Customization

### Adding Pet Images

Add your pet images to the `public/pets/` directory:
- `dog1.jpg`, `dog2.jpg`, `dog3.jpg`
- `cat1.jpg`, `cat2.jpg`, `cat3.jpg`

### Modifying Colors

Edit the CSS variables in `app/globals.css` under `:root` and `.dark` selectors to customize the color scheme.

### Adding Services

Edit the `services` array in `components/services.tsx` to add or modify services.

## Deployment

### Deploy on Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/pet-shop-website)

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icon library
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
