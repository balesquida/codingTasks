import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the Home page */}
        </li>
        <li>
          <Link to="/products">Products</Link> {/* Link to the Products page */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to the About page */}
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
