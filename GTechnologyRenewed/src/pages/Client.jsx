import '../css/Client.css' 
import c1 from '../assets/clients/image4.png'
import c2 from '../assets/clients/image8.png'
import c3 from '../assets/clients/techbuddy.jpg'
import c4 from '../assets/clients/image9.png'
import c5 from '../assets/clients/pacificstar.png'
import c6 from '../assets/clients/isu.png'
import c7 from '../assets/clients/image2.png'
import c8 from '../assets/clients/midlanderslogo.png'
import c9 from '../assets/clients/ruralbankcyn.jpg'
import c10 from '../assets/clients/bisadeco.jpg'
import c11 from '../assets/clients/IGSMPC.png'
export default function Client(){
    return(
        <div className="client">
            <h1>Our Clients</h1>
            <p>Trusted by various businesses and organizations across Region 2</p>
            <div className='client-container'>
                <div className='client-card'><img src={c1} alt="client1" /></div>
                <div className='client-card'><img src={c2} alt="client2" /></div>
                <div className='client-card'><img src={c3} alt="client3" /></div>
                <div className='client-card'><img src={c4} alt="client4" /></div>
                <div className='client-card'><img src={c5} alt="client5" /></div>
                <div className='client-card'><img src={c6} alt="client6" /></div>
                
            </div>
            <div className='client-container'>
                <div className='client-card'><img src={c7} alt="client7" /></div>
                <div className='client-card'><img src={c8} alt="client8" /></div>
                <div className='client-card'><img id="ruralbank" src={c9} alt="client9" /></div>
                <div className='client-card'><img src={c10} alt="client10" /></div>
                <div className='client-card'><img src={c11} alt="client11" /></div>
                
            </div>
        </div>
    ) 
}