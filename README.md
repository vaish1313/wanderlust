Wanderlust - Property Listing App

A full-stack web application that allows users to browse, list, review, and manage rental properties. Built with the MERN stack, Wanderlust includes authentication, CRUD operations, and a responsive UI.

Features

-  User Authentication (Register/Login)
-  List, update, and delete properties
-  Add reviews and ratings
-  Location support with dynamic URLs
-  Deployed and fully responsive

Tech Stack

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js, Express.js
- Database: MongoDB (with Mongoose)
- Authentication: Express-session
- Deployment: [Render](https://render.com)

Live Demo

👉 [Try Wanderlust](https://wanderlust-cv7g.onrender.com/listings)  
👉 [GitHub Repo](https://github.com/vaish1313/wanderlust)

What I Learned

- Creating a RESTful API for full CRUD functionality
- Implementing user authentication securely
- Structuring scalable backend code using MVC pattern
- Deploying full-stack apps with MongoDB in production

Future Improvements

- Integrate Google Maps for property locations
- Add property filters (price, type, rating)
- Upload images with Cloudinary or Multer
- Add real-time booking notifications

Folder Structure
```bash
wanderlust/
├── controllers/     # Route handlers for properties, reviews, and users
├── models/          # Mongoose schemas (User, Property, Review)
├── node_modules/    # Project dependencies
├── public/          # Static assets (CSS, JS, images)
├── routes/          # Express routes (modularized per feature)
├── utils/           # Custom middleware and helper functions
├── views/           # EJS templates for server-side rendering
├── .env             # Environment variables (excluded from repo)
├── index.js         # Main Express app entry point
```
Installation

```bash
# Clone the repository
git clone https://github.com/vaish1313/wanderlust.git
cd wanderlust

# Install dependencies
npm install

# Start the application
npm start
