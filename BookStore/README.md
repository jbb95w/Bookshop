# 📚 Book Hub (Phase 2 Project)

#### Date: 24/10/2025

#### By *Jabir Ali, Judy Ogachi, Tobijah Otieno*

## Description
A modern, responsive Book Store web application built with React, Vite, and Tailwind CSS, featuring client-side routing and interactive components. Users can browse books using the Google Books API, search for specific titles, and manage their own reading collection — all within a clean, intuitive interface.

## Core Features
1. Book Search
Users can search for books in real-time through the Google Books API.
The search results are displayed dynamically below the Hero section.

2. Reading Collection
Each book card includes an “Add to Reading Collection” button.
Clicking the Basket icon on the NavBar allows users to view all books they’ve added.

3. User Authentication (Sign Up)
Users can sign up or log in using their email and password via the SignUp component.

4. Routing
Integrated React Router for seamless navigation between pages:
Home – The default landing page displaying the Hero section and search results.
About – Shares details about the app’s purpose and functionality.
Reading Collection – Displays all books added by the user.

5. Modern Styling
Built using Tailwind CSS for clean, responsive, and modern design.
React Icons enhance UI with visual cues (e.g., Basket- Navigation icons).

## Installation & Setup
Prerequisites:
Node.js and npm installed.

Steps:
1. Clone the repository
```
git clone git@github.com:jbb95w/Bookshop.git
```
cd book-hub

2. Install dependencies
```
npm install
```
3. Run the development server
```
npm run dev
```
4. Access the app
Open your browser and go to http://localhost:5173

## Live Link
[Git] https://github.com/jbb95w/Bookshop.git

## API Reference
Google Books API Endpoint:
https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}

## Technologies Used
- React.js
- Vite
- Tailwind CSS
- React Router
- Google Books API

## How It Works
1. The user lands on the Home page, which displays the Hero and search bar.
2. When the user types in the search bar, the Google Books API fetches matching books.
3. The results appear in the BookList section below the Hero.
4. Each book card has an “Add to Reading Collection” button to save favorite books.
5. Clicking the Basket icon on the NavBar displays the saved books.
6. Users can also visit the About page to learn more about the app or use the SignUp page to login.


## Folder Structure

BookStore/<br>
├── src/<br>
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BookList.jsx
│   │   ├── Hero.jsx
│   │   ├── Home.jsx
│   │   ├── NavBar.jsx
│   │   ├── SignUp.jsx
│   │   └── ReadingCollection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/<br>
├── package.json<br>
├── tailwind.config.js<br>
└── vite.config.js<br>

## Future Enhancements
- Add an "Add to cart" feature with a payment method option.
- Add a “Remove from Collection” feature.
- Add book details pages with author info, ratings, and previews.

## Authors
- Jabir Ali - https://github.com/jbb95w
- Judy Ogachi - https://github.com/Bonarerijt
- Tobijah Otieno - https://github.com/tobijaotieno-hue

### License
The content of this site is licensed under the MIT license