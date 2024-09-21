---
title: App Architecture
allDay: false
startTime: 11:30
endTime: 12:00
date: 2024-09-19
completed: null
---
## **Introduction**

This project is a React application built with Vite, utilizing various libraries for state management, routing, styling, and more. It aims to provide a robust and scalable foundation for building modern web applications.


## **Installation**

To install the project dependencies, run:

```bash
npm install
```

## **Development**

To start the development server, run:

```bash
npm dev
```

To build the project for production, run:

```bash
npm build
```

To check for linting errors, run:

```bash
npm lint
```

To preview the production build, run:

```bash
npm serve
```

## **Dependencies**

### **Core Dependencies**

- **React**: A JavaScript library for building user interfaces.
- **React DOM**: Provides DOM-specific methods that can be used at the top level of a web app.

### **State Management**

- **@reduxjs/toolkit**: The official, recommended way to write Redux logic. It provides a set of tools to simplify Redux development.
- **react-redux**: Official React bindings for Redux, making it easier to connect React components to the Redux store.

### **Page Routing**

- **react-router-dom**: A collection of navigational components that compose declaratively with your application.

### **Styling**

- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **@emotion/react**: Library for writing CSS styles with JavaScript.
- **@emotion/styled**: Styled-components library built for Emotion.
- **@mui/material**: Material-UI components for faster and easier web development.
- **@mui/icons-material**: Material-UI icons.
- **styled-components**: A library for writing CSS-in-JS.

### **Utilities**

- **axios**: Promise-based HTTP client for the browser and Node.js.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **jwt-decode**: A small library that helps decode JWT tokens.
- **react-icons**: Include popular icons in your React projects easily.
- **react-toastify**: Allows you to add notifications to your app with ease.

### **Testing**

- **@testing-library/react**: Simple and complete testing utilities that encourage good testing practices.
- **@testing-library/jest-dom**: Custom jest matchers to test the state of the DOM.
- **@testing-library/user-event**: Simulates user interactions with the application.

This stack provides a robust setup for building a full-stack application with a React frontend and an Express backend, utilizing Sequelize for database management and various tools for security, authentication, and development efficiency.****

## **[[Folder Structure]]**

### **Frontend**

```css
.
├── .git
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── images
│   │   └── svgs
│   ├── components/
│   │   └── tailwindcardclass/
│   ├── features/
│   ├── layouts/
│   ├── pages/
│   ├── App.js
│   ├── Constants.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── .reviewboardrc
├── eslint.config.js
├── package-lock.json
├── package.json
├── pnpm-lock.yaml 
├── postcss.config.js
├── tailwind.config.js
└── vite.config.ts

```

## **Configurations**

### **Vite**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  server: {
    host: true,
    port: 4000
  },
  test:{ 
    /*
     * this is for unit testing purposes
     */
    globals: true,
    environment: "jsdom",
    css: true,
  }
})

```

