import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NAVBAR_CONTAINER } from '../styles/Navbar.styled.js';
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";


export default function Navbar({ isScrolled }) {

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <NAVBAR_CONTAINER>
      <nav className={`${isScrolled ? "scrolled" : ""} d-flex`}>
        <div className="left d-flex align-items-center">
          <div className="brand d-flex align-items-center justify-content-center">
            <img src={logo} alt="Logo" />
          </div>
          <ul className="links d-flex">
            {
              links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <div className="right d-flex align-items-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button onFocus={() => setShowSearch(true)} onBlur={() => {
              if (!inputHover) {
                setShowSearch(false);
              }
            }} > <FaSearch /> </button>
            <input type="text" placeholder="Search" onMouseEnter={() => setInputHover(true)} onMouseLeave={() => setInputHover(false)} onBlur={() => {
              setShowSearch(false);
              setInputHover(false);
            }} />
          </div>
          <button onClick={() => signOut(firebaseAuth)}> <FaPowerOff /> </button>
        </div>
      </nav>
    </NAVBAR_CONTAINER>
  );
}
