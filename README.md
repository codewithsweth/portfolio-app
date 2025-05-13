# 🚀 DevPort – Multi-User Portfolio Platform

A fullstack portfolio builder where developers can register, create profiles, and showcase projects. Built with **Next.js (App Router)** and **FastAPI**, styled using **Tailwind CSS**, and deployed via **Vercel** and **Render**.

---

## 🧰 Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: FastAPI, SQLAlchemy, Pydantic
- **Auth**: JWT (planned), GitHub OAuth (optional)
- **Database**: PostgreSQL (Render or Railway)
- **Deployment**: Vercel (frontend), Render (backend)

---

## 🧩 Features

- 🧑‍💻 User registration and login
- 🧍‍♂️ Public user profiles with bio and tech stack
- 🗂️ Project showcase with GitHub links
- 📬 Contact form with backend integration
- 🛠️ Admin dashboard (planned)
- 🌐 Responsive design with Tailwind CSS

---

## 📁 Project Structure
portfolio-app/
├── frontend/   # Next.js App Router
│   ├── app/
│   ├── components/
│   ├── hooks/
│   └── public/
├── backend/    # FastAPI app
│   ├── app/
│   │   ├── main.py
│   │   ├── models/
│   │   ├── routes/
│   │   └── schemas/
│   ├── venv/
│   └── requirements.txt

---

## 🧪 Local Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
````

### Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

---

## 🔗 Live Demo

Coming soon...

---

## 📸 Screenshots

Coming soon...

---

## 📄 License

MIT
