import Topbar from './Topbar'
import bg from '../assets/hero-bg.jpg'
import '../css/Home.css'
import About from '../pages/About'
export default function Home() {
    return(
        <div className="home">
            
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
            <About />
        </div>
    )
}