# Employee Directory - Full-Stack Application

## Overview
Full-stack employee directory built with MongoDB, Express, React, and Node.js (MERN stack). This application allows users to view, add, edit, delete, and search employees by name or ID. Employees can also be filtered by department.

## Technologies Used
**MongoDB** - NoSQL database for storing employee data
**Express.js** - Backend API framework
**React.js** - Frontend user interface library
**Node.js** - JavaScript runtime environment
**Mongoose** - MongoDB object modeling tool
**Axios** - HTTP client for API requests
**React Router v6** - Frontend navigation

---

## Project Structure
my-fullstack-app/
├── backend/
│   ├── models/
│   │   └── employee.js         # Employee schema and model
│   ├── routes/
│   │   └── employeeRoutes.js   # API route handlers
│   ├── .env                    # Environment variables
│   ├── package.json            # Backend dependencies
│   └── server.js               # Express server entry point
└── frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js           # Home page with navigation cards
│   │   ├── Employees.js      # All employees page with CRUD
│   │   └── Department.js     # Department filter page
│   ├── App.js                # Main app with routing
│   ├── index.js              # React entry point
│   └── index.css             # Application styles
└── package.json              # Frontend dependencies

 
------

  ## To Run The Application

------

## Navgiate to the backend folder
In the terminal run:
-cd backend


## Backend Dependencies - npm install the following:

**Express** for Web framework
**Mongoose** for MongoDB ODM
**Cors** for Cross-origin resource sharing
**dotenv** for Environment variable management
**nodemon** for Development auto-restart (dev dependency)

## Starting the Backend Server
In the terminal run:
-npm run dev

## Expected Output
Server running on port:5000
Connected to MongoDB at: mongodb://127.0.0.1:27017/employeedb

## Navgiate to the frontend folder
In the terminal run:
-cd frontend

## Frontend Dependencies - npm install the following:

**react** for UI library
**react-router-dom** for Client-side routing
**axios** for HTTP request library

## Starting the frontend React App
In the terminal run:
npm start

## Expected Output
Local:            http://localhost:3000
On Your Network:  http://192.168.10.50:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
