import logo from "../assets/investment-calculator-logo.png";
import React from 'react';
export default function Header() {
  return (
    <header id="header">
        <img src={logo} alt="Logo" />
        <h1>Investment Calculator</h1>
    </header>
  );
}