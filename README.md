# React Investment Calculator

This project is a **React-based Investment Calculator** that allows users to calculate the growth of their investments over time based on user-provided inputs such as initial investment, annual contributions, expected return rate, and investment duration.

## Features

- **Dynamic Input Handling**: Users can input their investment details, and the app dynamically updates the results.
- **Investment Growth Visualization**: Displays a detailed breakdown of yearly investment growth, including interest earned and total capital.
- **Validation**: Ensures that the investment duration is greater than 0 before displaying results.
- **Responsive Design**: Styled with CSS for a clean and user-friendly interface.

## Project Structure
01-starting-project/
├── public/
│   └── investment-calculator-logo.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Input.jsx
│   │   └── Result.jsx
│   ├── util/
│   │   └── investment.js
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── index.html

Key Files
    App.jsx: The main component that manages state and renders the header, input form, and results table.
    Input.jsx: A form component for collecting user input.
    Result.jsx: Displays the calculated investment results in a table format.
    investment.js: Contains the logic for calculating investment growth and formatting currency.
    index.css: Styles the application with a modern and responsive design.

Clone the repository:
git clone <repository-url>
cd Investment_Calculator/01-starting-project

Install dependencies:
npm install

Start the development server:
npm run dev

Usage
    Enter the following details in the input form:
        Initial Investment: The starting amount of your investment.
        Annual Investment: The amount you plan to invest annually.
        Expected Return: The annual rate of return (in percentage).
        Duration: The number of years you plan to invest.

    The app will calculate and display:
        Yearly investment value.
        Interest earned each year.
        Total interest earned.
        Total invested capital.

    If the duration is invalid (less than or equal to 0), a validation message will be displayed.

Scripts
    npm run dev: Starts the development server.
    npm run build: Builds the app for production.
    npm run preview: Previews the production build.
    npm run lint: Runs ESLint to check for code quality issues.

Technologies Used
    React: Frontend library for building the user interface.
    Vite: Fast build tool for development and production.
    CSS: For styling the application.
    JavaScript: For investment calculation logic.

Thankyou for using the Investment Calculator!