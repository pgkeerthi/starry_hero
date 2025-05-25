
# 🌟 Starry Hero - Superhero T-Shirt eCommerce Website

**Starry Hero** is a modern, full-stack eCommerce web application dedicated to selling superhero-themed T-shirts. It combines a stylish frontend with a powerful backend and database to provide a seamless shopping experience.

---

## 🚀 Tech Stack

* **Frontend:** React.js, Tailwind CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Package Manager:** npm
* **Linting/Formatting:** ESLint
* **Build Tool:** Vite or similar (based on `index.html` & setup)

---

## 📦 Features

* 👕 Browse a collection of superhero T-shirts
* 🔍 Search and filter through products
* 🛒 Add to cart and checkout functionality
* 📋 Order summary display
* 🔐 Optional user authentication
* 📱 Fully responsive design (mobile-friendly)

---

## 📁 Project Structure

```
starry_hero/
├── backend/              # Backend logic (Express server)
├── public/               # Static assets
├── src/                  # React frontend source files
├── .gitignore
├── README.md
├── bun.lockb             # Bun lockfile (if using Bun instead of npm/yarn)
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
```

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/starry_hero.git
cd starry_hero
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in terminal).

---

# ⚙️ MongoDB Setup

If you're using **MongoDB Atlas**:

1. [Create a cluster](https://www.mongodb.com/cloud/atlas)
2. Get your connection string.
3. Add this to a `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/starryhero?retryWrites=true&w=majority
```

4. In your backend, connect using:
js
mongoose.connect(process.env.MONGO_URI);




## 📌 Notes

* If you're using **Vite**, make sure it’s correctly set up in your project.
* Make sure MongoDB is running locally or Atlas connection is active.
* Customize `.env` variables for your environment.

---

## 🤝 Contributing

Feel free to fork the repository and submit a pull request with improvements or fixes!


