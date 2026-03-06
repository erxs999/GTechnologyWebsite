import joel from '../assets/team/joel_gumiranc.jpg'
import mart from '../assets/team/martc.jpg'
import donc from '../assets/team/donc.jpg'
import philip from '../assets/team/philip.jpg'
import '../css/Team.css'
export default function Team(){
    return (
        <div className="team">
            <h2>Meet the Team</h2>
            <div className="team-container">
                <div className="team-card">
                    <img src={joel} alt="Joel Gumiranc" />
                    <div className="overlay">
                        <h3>Joel Gumiran, DIT</h3>
                        <p>Full Stack Developer</p>
                        </div>
                </div>
                <div className="team-card">
                    <img src={mart} alt="Mart Silvestre" />
                    <div className="overlay">
                        <h3>Mart Silvestre</h3>
                        <p>Software Developer</p>
                        </div>
                </div>
                <div className="team-card">
                    <img src={donc} alt="Rodolfo Tacang" />
                    <div className="overlay">
                        <h3>Rodolfo Tacang</h3>
                        <p>Web Developer</p>
                        </div>
                </div>
            </div>
            <div className="team-container">
                <div className="team-card">
                    <img src={philip} alt="Joel Gumiranc" />
                    <div className="overlay">
                        <h3>Philip John Enrico L. Gonzales, CPA</h3>
                        <p>Accounting and Tax Consultant</p>
                        </div>
                </div>
                
            </div>


            
        </div>
    )
}