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
                    <p><EmailIcon />gtechnologyorg2023@gmail.com</p>
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
                    <p><LocationPinIcon /> 76 Quezon St, Cauayan City, Isabela</p>
                     <div className="map-container">
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.106146795899!2d121.7671125!3d16.9346553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338551006981c9c9%3A0xb9b92b1d33a65975!2sG%20TECHNOLOGY%20BUSINESS%20SOLUTIONS%2C%20INC.!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                        width="100%"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="G TECHNOLOGY BUSINESS SOLUTIONS Map"
                        ></iframe>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}