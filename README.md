🛍️ Mini E-Commerce Web Application

A fully functional mini e-commerce module built using React + TailwindCSS, featuring product listing, product details, cart, checkout, wishlist, filters, search, pagination, and dark mode.

📌 Live Demo

➡️ Live Site: https://mini-ecommerce-app-rho.vercel.app/

🚀 Tech Stack
Frontend

React – component-based UI

TailwindCSS – fast and responsive styling

LocalStorage – persistent cart, wishlist & theme

React Hooks – state and effect management

Why This Stack?

React allows fast, dynamic UI updates and modular code.

TailwindCSS provides clean, scalable styling with minimal CSS.

LocalStorage ensures cart/wishlist persist across refresh.

Entire app can be hosted easily on Vercel with zero backend requirements.

📦 Features
✔️ Core Requirements

Product List Page

Grid view showing image, name, price, short description

Add to Cart button

Click product → opens product details

Product Details Page

Large image, full description, price

Quantity selector

Add to Cart button

Back navigation

Recommended products

Shopping Cart

Add, remove, update quantity

View subtotal & grand total

LocalStorage persistence

Checkout Flow

Name, email, address, payment method (COD)

Input validation

Order Success confirmation screen

Responsive UI

Mobile-friendly navigation

Cart count indicator

Clean & modern layout

⭐ Bonus Features (Extra Points)

🔍 Search bar

🎯 Category filters

📑 Pagination

❤️ Wishlist system

🌙 Dark Mode with persistence

🧩 Recommended products filter

🗂️ Folder Structure
src/
│
├── components/
│   ├── CartItem.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Pagination.jsx
│
├── pages/
│   ├── ProductsPage.jsx
│   ├── ProductDetails.jsx
│   ├── CartPage.jsx
│   ├── CheckoutPage.jsx
│   ├── OrderSuccessPage.jsx
│   ├── WishlistPage.jsx
│
├── PRODUCTS.js         # Mock product data
├── App.jsx
└── index.js

🛠️ Installation & Setup
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO

2. Install dependencies
npm install

3. Run development server
npm start

4. Build for production
npm run build

📖 Project Logic Explanation
🔹 Product List Logic

Data is imported from PRODUCTS.js

Products can be filtered by category, searched by text, and paginated

Clicking a product sets selectedProduct state and opens details page

🔹 Product Details Logic

Receives product object from parent state

Allows selecting a quantity and adding to cart

Shows recommended products from same category

🔹 Cart Logic

Cart is stored in React state + LocalStorage

Supports:

addItem(product, qty)

removeItem(id)

updateQuantity(id, qty)

Recalculates totals dynamically

🔹 Checkout Flow

Requires name, email, address

Validates inputs

On submit → clears cart + shows success screen

📱 Responsive Design

Built using Tailwind’s mobile-first utilities:

grid-cols-1 sm:grid-cols-2 md:grid-cols-3

Responsive navbar

Cards stack on smaller screens

Fully optimized for mobile and desktop

🚀 Deployment (Vercel)

Push your code to GitHub

Go to vercel.com → New Project

Import your repo

Framework: Create React App

Build command:

npm run build


Output folder:

build

Click Deploy


Dark Mode

📄 License

This project is for educational and assessment purposes.
