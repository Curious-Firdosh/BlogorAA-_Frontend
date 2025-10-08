🚀 DevBlogs – Frontend

A modern, responsive frontend for a Medium-like blogging platform built with React, TypeScript, and Zod.

🧾 Project Description

DevBlogs Frontend is a React + TypeScript web application that serves as the user interface for the DevBlogs platform — a modern, full-stack blogging site inspired by Medium.

The frontend communicates with a serverless backend (built on Cloudflare Workers + Hono + Prisma) and provides seamless user experiences for authentication, blog creation, and content browsing.

It’s designed for speed, scalability, and type safety — using Zod for input validation and type inference, and styled with a clean, responsive UI built using Tailwind CSS.

🌟 Key Features

🧍 User Authentication – Sign up, Sign in, and JWT-based session handling

📝 Create & Edit Blogs – Rich-text or Markdown-compatible blog creation

📖 View Blog Posts – Fetch individual blogs by ID (GET /api/v1/blog/:id)

📚 Browse Blogs – Display all blogs in bulk (GET /api/v1/blog/bulk)

🔍 Responsive UI – Optimized for mobile and desktop screens

🔐 Zod Validation – Ensures clean and type-safe form submissions

⚡ Fast API Integration – Built to communicate seamlessly with Cloudflare Workers backend

💾 State Management – React hooks and local state for simple, predictable behavior

🧭 Routing – React Router for navigation between pages

⚙️ Technical Specifications
Category	Technology / Tool
Frontend Framework	React (v18+)
Language	TypeScript
Validation Library	Zod (for schema validation + type inference)
Styling	Tailwind CSS
Routing	React Router DOM
API Client	Axios / Fetch API
State Handling	React Hooks / React Query (optional)
Build Tool	Vite
Authentication	JWT (from backend; cookie or header-based)
Backend Communication	REST API (Cloudflare Workers + Hono)
ORM / Database (Backend)	Prisma + PostgreSQL
Deployment (Frontend)	Vercel / Netlify / Cloudflare Pages