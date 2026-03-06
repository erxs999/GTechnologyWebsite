import Topbar from './Topbar'
import bg from '../assets/hero-bg.jpg'
import '../css/Home.css'
import About from '../pages/About'
import Services from '../pages/Services'
import Client from '../pages/Client'
import Team from '../pages/Team'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faq from "../assets/img/faq.jpg"
import Contact from './Contact'

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
            <Services />
            <Client /> 
            
            <div className="faq"> 
                <div className='faq-text'>
                     <h1>Frequently Asked <span className='q'>Questions</span></h1>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Are we legitimate?</AccordionSummary>
                    <AccordionDetails>Yes! We are legitimate and we are registered to BIR and our software solutions are also built to
                                    comply with Republic Act 10173 - Data Privacy Act of 2012.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>Are your prices negotiable?</AccordionSummary>
                    <AccordionDetails>We value your business and want to make it as easy as possible for you to make payments on
                            your account. To help with this, we are pleased to offer several payment plans that may be more
                            convenient for you.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>What is your
                          standard timeframe for developing a software solution? </AccordionSummary>
                    <AccordionDetails> 
                        We understand that time is of the essence in today's fast-paced business environment. That's
                            why we have streamlined our development process to ensure maximum efficiency and minimize
                            delays. Our team members have years of experience working together, which allows us to communicate
                            effectively and work collaboratively to achieve your goals. Our team can develop a software
                            solution for you just within <b> 3-6 months</b> depends on the complexity of your business.
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className='faq-img'>
                    <img src={faq} alt="faq" />
                </div>
            </div>
            <Team />  
            <Contact />

        </div>
    )
}