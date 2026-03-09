import { useState } from "react";
import logo from '../assets/logo.png'
import useScrolled from "../hooks/useScrolled";
import '../css/Topbar.css'

export default function Topbar() {

  const scrolled = useScrolled(50);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
      
      <div className="topbar-container">

        <div className="logo">
          <img src={logo} alt="GTechlogo" />
          <span>Technology</span>
        </div>

     
       

   
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

       <div className="right-icons">
        <div className="facebook">
          <a
            href="https://www.facebook.com/people/G-Technology/100045189956593/"
            target="_blank"
            rel="noreferrer"
          >
            FB Page
          </a>
        </div>
         <div 
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
       </div>
        

      </div>
    </div>
  );
}