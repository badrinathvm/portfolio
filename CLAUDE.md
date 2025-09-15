# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a new portfolio project directory that is currently empty. When developing in this repository:

## Development Setup

Since this is a new project, you'll need to:

1. Initialize the project structure based on requirements
2. Set up the appropriate technology stack (React, Next.js, Vue, etc.)
3. Configure build tools, linting, and testing as needed

## Common Commands

- **Development server**: `npm run dev` - Start the Vite development server
- **Build**: `npm run build` - Build the application for production
- **Preview**: `npm run preview` - Preview the production build locally
- **Lint**: `npm run lint` - Run ESLint to check code quality
- **Install dependencies**: `npm install` - Install all project dependencies

## Architecture Notes

This is a React + Vite portfolio application with the following structure:

- **Tech Stack**: React 18, Vite, Tailwind CSS
- **Component Structure**:
  - `src/components/` - Reusable UI components
  - `src/data/` - Static data files (blogs, etc.)
- **Navigation**: Tab-based navigation between Blogs and About sections
- **Styling**: Tailwind CSS for responsive, utility-first design
- **State Management**: React useState for local component state

### Key Components:
- `TabNavigation` - Main navigation between tabs
- `BlogsTab` - Blog listing with search and filtering
- `AboutTab` - Personal information and experience
- `BlogCard` - Individual blog post display

## Deployment

This portfolio is ready for deployment with the following steps:

### Local Development
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. `npm run build` - Build for production
4. `npm run preview` - Preview production build

### Deploy to Production
1. **Vercel (Recommended)**:
   - Connect GitHub repo to Vercel
   - Auto-deploys on every push
   - Framework preset: Vite

2. **Netlify Alternative**:
   - Drag & drop `dist` folder
   - Or connect GitHub repo

### Custom Domain Setup
1. Purchase domain from Namecheap/Cloudflare ($8-15/year)
2. Add domain in deployment platform settings
3. Update DNS records as instructed
4. SSL certificate auto-generated

## Portfolio Content

The portfolio features:
- **Blogs Tab**: 13+ technical articles covering iOS, Swift, AI/ML, and MCP
- **About Tab**: Professional profile with skills and experience
- **Responsive Design**: Works on all devices
- **External Links**: Direct links to Substack and Medium articles
- i need to make it available to everyone and need a domain , what are the steps i need to do?