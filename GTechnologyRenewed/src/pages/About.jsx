import '../css/About.css' 


export default function About(){
    const projects = [
    {
      description: "Checking System at Rural Bank Cauayan",
      year: "2010",
      side: "left",
    },
    {
      description: "Scholarship Matrix of CHED (Commission on Higher Education) Region II",
      year: "2010",
      side: "right",
    },
    {
      description: "Record Management System for Dayos Hospital, Roxas Isabela",
      year: "2011",
      side: "left",
    },
    {
      description: "Attendance Monitoring System of Isabela State University-Roxas and Cabagan Campus",
      year: "2011 - Present",
      side: "right",
    },
    {
      description: "SARIAS (Student Automated Registration Information and Accounting System) for Isabela State University Roxas and Cabagan Campus",
      year: "2012 - Present",
      side: "left",
    },
     {
      description: "Online Grading, inquiry and evaluation system for ISU Cabagan and Roxas Campus",
      year: "2013",
      side: "right",
    },
    {
      description: "Automated Voting System for SSC/SBO of Isabela State University Roxas Campus",
      year: "2014",
      side: "left",
    },
    {
      description: "Technical Activity Board System",
      year: "2014",
      side: "right",
    },
    {
      description: "Attendance Monitoring System for Isabela State University Cauayan City Campus",
      year: "2014",
      side: "left",
    },
    {
      description: "Hardware Sales and Inventory System of RJU Hardware, Jones Isabela",
      year: "2016",
      side: "right",
    },
    {
      description: "Human Resource Management System with Payroll at Rural Bank Cauayan",
      year: "2019 - Present",
      side: "left",
    },
    {
      description: "Computer Parts Sales and Inventroy System of Tech Buddy Cauayan",
      year: "2020",
      side: "right",
    },
    
];

    return(
        <div className="about">
            <div className="aboutContent">
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
              
                 
                <ul>
                    <li>Set up and Configured Server since 2012 using Microsoft and Linux Server.</li>
                    <li>Set up and Configured Database Server since 2012 using MariaDB, MySQL Server, and Microsoft.</li>
                    <li>Set up and Configured Web Server since 2012 using IIS, Apache</li>
                    <li>Set up and install SSL Certificate for Security.</li>
                    <li>Network set up and configuration. Designs local and wide area network. Managed and configured the network for five years using Mikrotik Switch and PFSense</li>
                    <li>PC Repair and Troubleshooting;</li>
                    <li>CCTV Installation; and </li>
                    <li>Other Related Technological Services</li>
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
                                <p>{item.year}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
            
           <div className="softwares"> 
  <div className="softwares-container">
    <h2>Software Compatibility</h2>

    <div className="os-list">
      <p>Windows</p>
      <p>MacOs</p>
      <p>Linux</p>
      <p>Android</p>
    </div>

  </div>
</div>

        </div>
    )
}