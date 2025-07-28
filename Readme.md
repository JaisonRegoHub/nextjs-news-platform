# 📰 Routing & Rendering News App

This project is a full-stack application built with **Next.js 14 App Router** and a lightweight **Node.js + Express backend**. 
It demonstrates modern routing patterns (parallel routes, intercepted routes, layouts) and serves dynamic news content from a SQLite database.

---

## 🌐 Frontend (Next.js)

### Tech Stack

- **Framework:** Next.js 14
- **Routing:** App Router
- **Styling:** Custom CSS
- **Features:** 
  - Parallel routes
  - Intercepting routes
  - Modal routing
  - Middleware-based routing
  - API route handler (`app/api/route.js`)
  - Static assets and image optimization

### Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint
npm run lint
````

---

### 🗃️ Setup Database

No backend setup is needed. The SQLite database is initialized and seeded automatically on first run using local scripts.

If needed manually:

```bash
npm run db:setup
```

This will:

* Create `news.db` inside `/data`
* Seed it with dummy news articles

---

## 📁 Project Structure

```
├── app/                # Next.js app directory
│   └── ...             # Parallel/intercepted routes
├── components/         # Reusable components
├── lib/                # News data fetching logic
├── public/             # Static images
├── middleware.js       # Next.js middleware
├── dummy-news.js       # Initial news content
├── globals.css         # Styles
├── next.config.mjs     # Next.js config
└── README.md
```

---

## 📸 Screenshots

* Parallel routed archive and latest view
* Intercepted image route modal
* Filtered archive page
* Dynamic news article rendering

---

## ⚠️ Notes

* News images must exist in: `/public/images/news/`
* Backend is basic, not optimized for production
* Modify CORS settings in `backend/app.js` if needed for stricter rules

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).
