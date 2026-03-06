import Topbar from './Topbar'
import bg from '../assets/hero-bg.jpg'
import '../css/Home.css'
import About from './About'
import Services from './Services'
import Client from './Client'
import Team from './Team'
import Contact from './Contact'
import Footer from './Footer'
import FAQ from './FAQ'


export default function Home() {
    return(
        <div id="home" className="home">
            
            <div className="home-container">
              <div className="home-background">
                 <img src={bg} alt="background" />
              </div>
              <div className="home-content">
                <h1>GTechnology</h1>
                <p>Provides <span className='highlight'>digital solutions</span>  for your digital challenges</p>
              </div>
          
            </div>
           
            <Topbar />
            <div id='about'><About /></div>
            <div id='services'><Services /></div>
            <div id='clients'><Client /></div> 
            <FAQ />
            <div id='team'><Team /></div>
            <div id='contact'><Contact /></div>
            <Footer />

        </div>
    )
}