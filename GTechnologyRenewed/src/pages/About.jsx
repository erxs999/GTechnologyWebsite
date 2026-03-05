import '../css/About.css' 
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { FaWindows, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';

export default function About(){
    const projects = [
    {
      description: "Checking System at Rural Bank Cauayan",
      location: "Cauayan City, Isabela",
      year: "2010",
      side: "left",
    },
    {
      description: "Scholarship Matrix of CHED (Commission on Higher Education) Region II",
      location: "Isabela",
      year: "2010",
      side: "right",
    },
    {
      description: "Record Management System for Dayos Hospital",
      location: "Roxas, Isabela",
      year: "2011",
      side: "left",
    },
    {
      description: "Attendance Monitoring System of Isabela State University-Roxas and Cabagan Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2011 - Present",
      side: "right",
    },
    {
      description: "SARIAS (Student Automated Registration Information and Accounting System) for Isabela State University Roxas and Cabagan Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2012 - Present",
      side: "left",
    },
     {
      description: "Online Grading, inquiry and evaluation system for ISU Cabagan and Roxas Campus",
      location: "Roxas & Cabagan, Isabela",
      year: "2013",
      side: "right",
    },
    {
      description: "Automated Voting System for SSC/SBO of Isabela State University Roxas Campus",
      location: "Roxas, Isabela",
      year: "2014",
      side: "left",
    },
    {
      description: "Technical Activity Board System",
      location: "Isabela",
      year: "2014",
      side: "right",
    },
    {
      description: "Attendance Monitoring System for Isabela State University Cauayan City Campus",
      location: "Cauayan City, Isabela",
      year: "2014",
      side: "left",
    },
    {
      description: "Hardware Sales and Inventory System of RJU Hardware",
      location: "Jones, Isabela",
      year: "2016",
      side: "right",
    },
    {
      description: "Human Resource Management System with Payroll at Rural Bank Cauayan",
      location: "Cauayan City, Isabela",
      year: "2019 - Present",
      side: "left",
    },
    {
      description: "Computer Parts Sales and Inventroy System of Tech Buddy Cauayan",
      location: "Cauayan City, Isabela",
      year: "2020",
      side: "right",
    },
    
];

    return(
        <div className="about">
            <div className="content">
                <h1>About Us</h1>
                <p>G. Technology is a freelance software developer named after its creator, Joel Maribbay Gumiran. In addition
                    GTechnology is a group of professionals who work collaboratively to design, develop, and maintain software
                    applications. The team typically consists of three members Joel Gumiran the founder a full stack developer,
                    Mart Silvestre a back-end developer, and database administrator and Rodolfo Tacang a front-end developer.
                    GTechnology use programming languages, frameworks, and tools to create software solutions that meet the
                    needs of their clients or organizations. The team members communicate effectively to ensure that the
                    software is developed according to the specifications and requirements of the project. They are skilled at
                    troubleshooting and debugging software issues, and are committed to producing high-quality software products
                    that are scalable, efficient, and secure.</p>
            </div>

            <div className='specialization'> 
              <h3>GTechnology specializations</h3>
              
                 
                 <ul className="specialization-list">
                    <li><DoneAllIcon className='done-icon'/> Set up and Configured Server since 2012 using Microsoft and Linux Server.</li>
                    <li><DoneAllIcon className='done-icon'/> Set up and Configured Database Server since 2012 using MariaDB, MySQL Server, and Microsoft.</li>
                    <li><DoneAllIcon className='done-icon'/> Set up and Configured Web Server since 2012 using IIS, Apache</li>
                    <li><DoneAllIcon className='done-icon'/> Set up and install SSL Certificate for Security.</li>
                    <li><DoneAllIcon className='done-icon'/> Network set up and configuration. Designs local and wide area network. Managed and configured the network for five years using Mikrotik Switch and PFSense</li>
                    <li><DoneAllIcon className='done-icon'/> PC Repair and Troubleshooting;</li>
                    <li><DoneAllIcon className='done-icon'/> CCTV Installation; and </li>
                    <li><DoneAllIcon className='done-icon'/> Other Related Technological Services</li>
                </ul>
              
            </div>
            
           <div className="projects-timeline">
                <h3>GTechnology projects through the time</h3>
                <div className="timeline">
                    {projects.map((item, index) => (
                        <div key={index} className={`timeline-item ${item.side}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h4>{item.description}</h4>
                                <p className="location">{item.location}</p>
                                <p className="year">{item.year}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
            
           <div className="softwares"> 
            <div className="softwares-container">
              <h2>Software Compatibility</h2>
              
              <div className="os-list">
                <p><FaWindows id='os-icon'/><br />Windows</p>
                <p><FaApple id='os-icon'/><br />MacOS</p>
                <p><FaLinux id='os-icon'/><br/>Linux</p>
                <p><FaAndroid id='os-icon'/><br />Android</p>
              </div>
            </div>
          </div>

        </div>
    )
}