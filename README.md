# HRIS Frontend

## Setup and Installation Guide

Follow these steps to recreate the development environment or set it up on a new machine. These instructions follow the official Vite and Tailwind CSS integration guidelines.

### 1. Create the Vite Project
Start by creating a new Vite project using the React and JavaScript template.

npm create vite@latest hris-frontend -- --template react
cd hris-frontend
npm install

### 2. Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite

### 3. Configure the vite.config.js
add:
1. import tailwindcss from '@tailwindcss/vite'
2. tailwindcss(), on plugins
