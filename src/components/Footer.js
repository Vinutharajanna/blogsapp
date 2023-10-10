import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from 'react-router-dom';

const Footer = ()=>{
    return(
    <div className="footer">
        <p>Design and developed by Vinutha A-R</p>
        <p className="footer__icons">
            <NavLink exact="true" target="_blank" to="https://github.com/vinutharajanna" className="footer__links_git"><GitHubIcon/></NavLink>
            <NavLink exact="true" target="_blank" to="https://www.linkedin.com/in/vinutha-rajanna/" className="footer__links_linkedin"><LinkedInIcon fontSize="large"/></NavLink>  
        </p>
    </div>
    );
};


export default Footer;