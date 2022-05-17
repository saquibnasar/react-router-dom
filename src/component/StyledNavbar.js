import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
    </>
  );
}
