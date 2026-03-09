import '../css/Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer(){
    return(
        <div className="footer">
            <p><CopyrightIcon />Copyright 
            <span className='gtech1'> GTechnology.</span>
            All Rights Reserved | Designed by 
            <span className="gtech"> GTechnology</span></p>
        </div>
    )
}