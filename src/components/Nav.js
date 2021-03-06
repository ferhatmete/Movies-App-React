import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">Movies</Link>
      </div>
      <div className="nav__links">
        <Link to="trending">Trending</Link>
        <Link to="top-rated">Top Rated</Link>
        <Link to="action-movies">Action</Link>
        <Link to="comedy-movies">Comedy</Link>
        <Link to="horror-movies">Horror</Link>
        <Link to="romance-movies">Romance</Link>
        <Link to="documentaries">Documentaries</Link>
      </div>
    </nav>
  );
}

export default Nav;
