# Next.js with Tailwind CSS - Sidebar & Footer Layout

This is a Next.js application with Tailwind CSS featuring a common sidebar and footer layout across all pages.

## Pages

The application includes the following pages:
- **Home** - Landing page with hero section and features
- **About** - Information about the company, values, and team
- **Services** - Details about services offered
- **Contact** - Contact form and office locations

## Features

- Responsive layout with sidebar navigation and footer
- Modern UI design using Tailwind CSS
- Type-safe development with TypeScript
- ESLint for code quality

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── components/      # Reusable components
│   │   ├── Footer.tsx   # Footer component
│   │   └── Sidebar.tsx  # Sidebar navigation component
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── contact/         # Contact Us page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with sidebar and footer
│   └── page.tsx         # Home page
├── public/              # Static assets
└── ...                  # Configuration files
```

## Customization

You can customize the appearance by modifying the Tailwind classes or editing the components directly. The layout structure can be found in `app/layout.tsx` which includes the sidebar and footer components.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## Deployment

This application can be easily deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-tailwind-sidebar-footer)
