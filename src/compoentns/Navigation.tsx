import React from "react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" className="cursor-pointer hover:opacity-80">
        Home
      </Link>
      <Link to="/about" className="cursor-pointer hover:opacity-80">
        About
      </Link>
    </nav>
  );
};

export default Navigation;
