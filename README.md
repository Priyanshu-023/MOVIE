# ShowBox 🎬

A full-stack movie ticket booking web app. Users can browse movies, watch trailers, pick a show date, select seats and view their bookings. Admins get a separate dashboard to add shows and track bookings.

**Live demo:** https://movie-two-mocha.vercel.app

## Features

**For users**
- Browse now-showing movies with a hero banner and trailer section
- Movie details page with date selection for shows
- Interactive seat layout to choose seats
- "My Bookings" page to see booked tickets
- Favourite movies list
- Sign up / login with Clerk authentication

**For admins**
- Admin dashboard with an overview
- Add new shows
- List all shows and all bookings

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React (Vite), React Router, Tailwind CSS, lucide-react, react-hot-toast, react-player |
| Backend | Node.js, Express |
| Database | MongoDB with Mongoose |
| Auth | Clerk |
| Background jobs | Inngest (syncs Clerk users to the database) |
| Media | Cloudinary |
| Deployment | Vercel (frontend and backend) |

<!-- Screenshots: add images to a screenshots/ folder and embed them here -->

## Project Structure

```
ShowBox/
├── BACKEND/     # Express API: routes, Mongoose models, Inngest functions
└── FRONTEND/    # React + Vite client: pages, components, admin panel
```

## Run Locally

**1. Clone the repo**
```bash
git clone https://github.com/Priyanshu-023/ShowBox.git
cd ShowBox
```

**2. Backend**
```bash
cd BACKEND
npm install
npm run dev
```
Create `BACKEND/.env`:
```
MONGODB_URI=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

**3. Frontend**
```bash
cd FRONTEND
npm install
npm run dev
```
Create `FRONTEND/.env`:
```
VITE_CLERK_PUBLISHABLE_KEY=
VITE_BASE_URL=http://localhost:3000
```

## Roadmap
- [ ] Booking and show APIs connected to the frontend
- [ ] Online payments
- [ ] Email confirmation for bookings

## Author

**Priyanshu Kumar** · [GitHub](https://github.com/Priyanshu-023)
