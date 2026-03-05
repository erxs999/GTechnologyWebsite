import logocomp from '../assets/logocomp.png'
import '../css/Topbar.css'

export default function Topbar() {
    return(
         <nav className="topbar">
            <div className="topbar-container">
                <ul className="logo">
                    <img src={logocomp} alt="GTechlogo" />
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
        </nav>
    )
}