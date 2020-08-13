import React from "react";
import "../assets/styles/Components/Header.scss";
import logo from "../assets/styles/img/unicorn_small_.png";

const Header = () => {
  return (
    <header className="header">
      <div className="nav-left-section">
        <a href="/">
          <img className="logo" src={logo} />
        </a>
      </div>

      <ul className="nav-right-section">
        <li>
          <a href="/"> Home </a>
        </li>

        <li>
          <a href="/faq"> FAQ </a>
        </li>

        <li>
          <a href="/blog"> Blog </a>
        </li>

        <li>
          <button className="nav-right-section__button">
            <a href="/postjob">POST A JOB</a>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
