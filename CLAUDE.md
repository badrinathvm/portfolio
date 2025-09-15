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

## Getting Started

When working on this portfolio:

1. Confirm technology stack preferences with the user
2. Set up project structure and dependencies
3. Configure development tools and workflows
4. Implement responsive design patterns
5. Optimize for performance and accessibility

- I need to have two tabs, Fierst tab will have the list of blogs and second tab will have the About section. Ulthra think and suggest some good templates to do this.
- i need to make it available to everyone and need a domain , what are the steps i need to do?