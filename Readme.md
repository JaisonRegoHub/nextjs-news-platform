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

## 🛠 Backend (Express + SQLite)

### 📁 Location

```
/backend
```

### 📦 Dependencies

* `express` – Minimal web framework
* `cors` – CORS support for frontend-backend communication
* `better-sqlite3` – Lightweight SQLite driver

### 🗃 Data

The server auto-seeds a SQLite database (`data.db`) on first run with predefined dummy news articles.

### 🌍 Endpoints

| Method | Route   | Description             |
| ------ | ------- | ----------------------- |
| GET    | `/news` | Fetch all news articles |

### 🔧 Setup

From the project root:

```bash
cd backend
npm install
npm start
```

The server will start on:

```
http://localhost:8080
```

---

## 📁 Project Structure

```
├── app/                # Next.js app directory
│   └── ...             # Parallel/intercepted routes
├── backend/            # Express server
│   ├── app.js
│   └── package.json
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
