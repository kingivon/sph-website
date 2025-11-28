# Sapiential Publishing House Website

A professional Next.js website for Sapiential Publishing House, a Christian book publishing company.

## Features

- **Modern Stack**: Built with Next.js 15, React 18, TypeScript, and Tailwind CSS
- **7 Core Pages**:
  - Homepage - Hero section, featured books, services overview, testimonials
  - Our Books - Catalog of 8 books from 2 authors
  - Publishing Services - 8 services with "Contact for quote" pricing
  - For Authors - Submission guidelines and FAQs
  - Resources - Free downloads and blog section
  - About SPH - Mission, vision, and company story
  - Contact - Contact form and information
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Brand Colors**: Orange (#F7931E) primary, dark charcoal for text

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sph-website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── books/             # Books catalog page
│   ├── services/          # Publishing services page
│   ├── authors/           # For authors page
│   ├── resources/         # Resources page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout with nav and footer
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation bar
│   └── Footer.tsx         # Site footer
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration with brand colors
```

## Brand Guidelines

### Colors
- **Primary Orange**: #F7931E (with shades 50-900)
- **Charcoal**: #2D2D2D (with shades 50-900)
- **Background**: Clean white (#FFFFFF)

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, charcoal color
- Body: Regular weight, charcoal color

### Components
- Buttons: `.btn-primary` and `.btn-secondary` utility classes
- Sections: `.section-container` for consistent max-width and padding

## Next Steps

The project structure is complete and ready for content. To customize:

1. **Update Book Data**: Edit the books array in `app/books/page.tsx` with actual book information
2. **Add Author Bios**: Update author information in books and about pages
3. **Customize Services**: Modify the services array in `app/services/page.tsx`
4. **Add Real Content**: Replace placeholder text throughout all pages
5. **Add Images**: Place book covers and team photos in `public/` directory
6. **Configure Forms**: Set up form submission handling in `app/contact/page.tsx`
7. **SEO Optimization**: Update metadata in each page's metadata export

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Google Fonts](https://fonts.google.com/) - Inter font family

## License

Copyright © 2024 Sapiential Publishing House. All rights reserved.
