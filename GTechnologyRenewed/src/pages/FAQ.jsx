import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import idol from "../assets/img/idol.jpg"
import '../css/FAQ.css'

export default function FAQ(){
    return(
         <div className="faq"> 
                <div className='faq-text'>
                     <h1>Frequently Asked <span className='q'>Questions</span></h1>
                <Accordion expanded={true}>
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
                    <img src={idol} alt="idol" />
                </div>
            </div>
    )
}