# APP·PRO - Application Showcase

A modern, responsive website built with Next.js and Nextra to showcase a collection of software applications. This site provides elegant documentation and presentation for various apps developed by the author.

## Project Overview

APP·PRO is a curated collection of software applications, providing elegant solutions for digital life. The site currently features:

- **ExifSnap**: A cross-platform application for viewing and modifying EXIF metadata in images
- **ClipSmart**: (In development)

The site is built with a minimalist yet sophisticated design philosophy, focusing on the perfect balance between user experience and functionality.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) 15.3.2 with App Router
- **Documentation**: [Nextra](https://nextra.site/) 4.2.17 with Docs theme
- **UI**: React 19 with TailwindCSS 4
- **Search**: Pagefind for static site search functionality
- **Development**: TypeScript 5 with ESLint 9
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm (recommended) or npm/yarn/bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Paxxs/apps-site.git
cd apps-site/my-apps

# Install dependencies
pnpm install
```

### Development

Start the development server with Turbopack for faster builds:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the content by modifying files in the `src/content` directory. The site auto-updates as you edit the files.

### Building for Production

```bash
pnpm build
```

This will generate static HTML files in the `out` directory and create a search index using Pagefind.

## Project Structure

```
├── .github/workflows/  # GitHub Actions workflows for deployment
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js App Router components
│   │   ├── layout.tsx  # Root layout component
│   │   └── [...mdxPath] # Dynamic routes for MDX content
│   ├── content/        # MDX content files
│   │   ├── _meta.jsx   # Navigation and page metadata
│   │   ├── index.mdx   # Homepage content
│   │   ├── exifsnap/   # ExifSnap documentation
│   │   └── clipsmart/  # ClipSmart documentation
│   └── mdx-components.ts # Custom MDX components
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions as defined in `.github/workflows/deploy.yml`.

The deployment workflow:
1. Checks out the code
2. Sets up Node.js and pnpm
3. Installs dependencies
4. Builds the Next.js application
5. Generates a search index with Pagefind
6. Uploads the build artifacts
7. Deploys to GitHub Pages

## Adding New Content

To add a new application to the showcase:

1. Create a new directory in `src/content/` with the app name
2. Add an `index.mdx` file with the app documentation
3. Update `src/content/_meta.jsx` to include the new app in the navigation
