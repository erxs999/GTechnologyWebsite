import logo from '../assets/logo.png'
import useScrolled from "../hooks/useScrolled";
import '../css/Topbar.css'

export default function Topbar() {
    const scrolled = useScrolled(50);

    return(
         <div className={`topbar ${scrolled ? "scrolled" : ""}`}>
            <div className="topbar-container">
                <ul className="logo">
                    <li><img src={logo} alt="GTechlogo" />Technology</li>
                </ul>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#clients">Clients</a></li>
                    <li><a href="#team">The Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>    
        </div>
    )
}