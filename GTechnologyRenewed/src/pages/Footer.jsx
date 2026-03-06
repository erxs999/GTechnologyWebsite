import '../css/Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function footer(){
    return(
        <div className="footer">
            <p><CopyrightIcon />Copyright <b>GTechnology</b>. All Rights Reserved | Designed by <span className="gtech"> GTechnology</span></p>
        </div>
    )
}