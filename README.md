# Product Listing Page

A clean and responsive product listing page built with Next.js, Tailwind CSS, and a mock API. This application displays a list of products, includes a search bar to filter products by name, and shows basic product details in a modal when a product is clicked. The layout is designed to work well on all devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Display a list of products fetched from a mock API.
- Search functionality to filter products by name.
- Modal to show basic product details when a product is clicked.
- Fully responsive design that works well on all devices.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-rendered or statically-exported React apps.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [FakeStore API](https://fakestoreapi.com/products): Mock API used to fetch product data.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-listing-page.git
   cd product-listing-page

   ```

2. Install Dependencies

   ```bash
   npm install

   ```

3. Run the development server

   ```bash
   npm run dev

   ```

4. Open your browser and visit `http://localhost:3000` to see the app in action.

### Usage

1. **Viewing Products**

- Products will be displayed in a grid format on the homepage.

2. **Search**

- Use the search bar at the top to filter products by their name.

3. **Product Details**

- Click on any product to open a modal with more details about the product.

## Project Structure

```plaintext
product-list-page/

├── public/
├── src\app
|   ├── components/
|   |    ├── loading.js
|   |    ├── modal.js
|   |    ├── product.js
|   |    ├── rating.js
│   ├── favicon.ico
│   ├── global.css
|   ├── layout.js
|   ├── loading.js
|   ├── page.js
│
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
