import '../css/Services.css'
import { VscVscode } from "react-icons/vsc";
import { CiServer } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { PiNetwork } from "react-icons/pi";
import { MdOutlineVpnLock } from "react-icons/md";
import { GiFirewall } from "react-icons/gi";
import { IoIosLaptop } from "react-icons/io";
import { BiCctv } from "react-icons/bi";
import { LuBoxes } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { IoShieldOutline } from "react-icons/io5";


export default function Services(){
    return(
        <div className="services">
            <div className='services-container'>
                  <h1>Our Services</h1>
                  <p>G. Technology aimed to integrate technology to help humane society, which offers you satisfaction
                    guaranteed and here are our services that we can offer.</p>
                    <div className="services-content">
                        <div className="service-card"> 
                            <div className='icon-container'>
                                <VscVscode className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>System Development</h3>
                                <p>Develop system software tailored based from client's business flow</p>
                            </div>
                        </div>
                          <div className="service-card"> 
                            <div className='icon-container'>
                                <CgWebsite className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>Website Development</h3>
                                <p>Develop system software tailored based from client's business flow</p>
                            </div>
                        </div>
                          <div className="service-card"> 
                            <div className='icon-container'>
                                <CiServer className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>Server Set up & Configuration</h3>
                                <p>Develop system software tailored based from client's business flow</p>
                            </div>
                        </div>
                    </div>
                      <div className="services-content">
                        <div className="service-card"> 
                            <div className='icon-container'>
                                <PiNetwork className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>Network Set up and Configuration</h3>
                                <p>Professionally configure's network to support impecable network communication</p>
                            </div>
                        </div>
                          <div className="service-card"> 
                            <div className='icon-container'>
                                <MdOutlineVpnLock className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>VPN Setup and Configuration</h3>
                                <p>Configure Virtual Private Network for maximum data privacy and security of your business from the internet</p>
                            </div>
                        </div>
                          <div className="service-card"> 
                            <div className='icon-container'>
                                <GiFirewall className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3> Firewall and Security Setup and Configuration</h3>
                                <p>Set up a premium security security and defense feature to prevent cyber attacks</p>
                            </div>
                        </div>
                    </div>
                    <div className="services-content">
                        <div className="service-card"> 
                            <div className='icon-container'>
                                <IoIosLaptop className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>PC Repair and Installation</h3>
                                <p>Professionally identify, troubleshoot and resolve problems and issues in a faulty computer</p>
                            </div>
                        </div>
                          <div className="service-card"> 
                            <div className='icon-container'>
                                <BiCctv className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>CCTV Installation</h3>
                                <p>Install's CCTV systems for both home and business owners for surveillance and security purposes</p>
                            </div>
                        </div>
                        <div className="service-card"> 
                            <div className='icon-container'>
                                <LuBoxes className='service-icon'/>
                            </div>
                            <div className='service-details'>
                                <h3>Other Related IT Services</h3>
                                <p>Provide's solution for any IT related problems</p>
                            </div>
                        </div>
                    </div>

                    <div className='other-services'>
                       <h2>Why Choose Us?</h2>
                            <div className='otherservice-card'>
                                <h2><IoNewspaperOutline className='otherservice-icon'/>Flexible Deals</h2>
                                <p>you can enjoy the benefits of our expertise and support without the stress of paying the full amount
                                    all at once. With installment payments, you can break up the cost into manageable chunks and pay over a
                                    period of time that works best for you.</p>
                            </div>
                            <div className='otherservice-card'>
                                <h2><FiBox className='otherservice-icon'/>Business Exclusive</h2>
                                <p>As one of our valued clients, we recognize the importance of providing personalized solutions that 
                                    truly address your individual concerns and goals. Our finish product will be exclusively and carefully
                                    crafted with your input and feedback, and we are confident that it will exceed your expectations.</p>
                            </div>
                            <div className='otherservice-card'>
                                <h2><IoShieldOutline className='otherservice-icon'/>Legitimacy</h2>
                                <p>We assure you that our Team is legitimate and registered to BIR. We understand that it can be
                                    challenging to navigate the market and find a reliable service provider, and we want to make sure that
                                    you have complete peace of mind when working with us.</p>
                            </div>
                    </div>
                   
            </div>
          
        </div>
    )
}