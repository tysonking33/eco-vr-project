#!/bin/bash

# Create project structure if not already present
echo "Setting up project structure..."
mkdir -p frontend backend

# Navigate into the frontend folder
cd frontend

# Initialize React app
echo "Initializing React app..."
npx create-react-app .

# Install frontend dependencies
echo "Installing frontend dependencies..."
npm install tailwindcss three chart.js

# Set up Tailwind CSS
echo "Setting up Tailwind CSS..."
npx tailwindcss init

cat <<EOT > tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOT

echo '@tailwind base;' > src/index.css
echo '@tailwind components;' >> src/index.css
echo '@tailwind utilities;' >> src/index.css

# Create 3D folder
mkdir src/3D

# Navigate to the backend folder
cd ../backend

# Initialize Node.js project
echo "Initializing Node.js project..."
npm init -y

# Install backend dependencies
echo "Installing backend dependencies..."
npm install express mongoose dotenv cors

# Create main server file
echo "Creating main server file..."
cat <<EOT > server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to the Future Eco-VR Explorer API' });
});

app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
EOT

# Create .env file
echo "PORT=5000" > .env

# Project setup complete
echo "Project setup complete. You can now run the frontend with 'npm start' in the frontend folder and the backend with 'node server.js' in the backend folder."
