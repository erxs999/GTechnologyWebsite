import '../css/contact.css'
import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
export default function Contact(){
    return(
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Our team is dedicated to providing exceptional customer service, and we are here to assist you in any
                way we
                can. Whether you have a question about our products, need assistance with your account, or simply want
                to
                provide feedback, we are always here to help.

                Please don't hesitate to reach out to us through our website, email, or phone. We look forward to
                hearing
                from you and providing you with the support you need to achieve your goals with GTechnology. Thank you
                for
                choosing us as your partner.</p>
            <div className="contact-container">
                <div className="contact-card">
                    <h2>Email</h2>
                    <p><EmailIcon />  gtechnologyorg2023@gmail.com</p>
                    <p><EmailIcon />rodolfotacang@g-technology.org</p>
                    <p><EmailIcon />mart.silvestre@g-technology.org</p>
                    <p><EmailIcon />joel.gumiran@g-technology.org</p>
                </div>
                 <div className="contact-card">
                    <h2>Call/Text</h2>
                    <p><LocalPhoneIcon />0995 880 4502</p>
                    <p><LocalPhoneIcon />0997 225 7554</p>
                    <p><LocalPhoneIcon />0966 534 2216</p>
                </div>
                <div className="contact-card">
                    <h2>Location</h2>
                    <p><LocationPinIcon />Labinab, Cauayan City, Isabela</p>
                </div>
            </div>
        </div>
    )
}