import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/big M.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faSuitcase, faUser,   } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return(
        <div className='nav-bar'> 
        <Link className="logo" to='/'>
<img src={LogoS} alt="logo" />
<img className="sub-logo" src={LogoSubtitle} alt="Meriles" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
       
        </nav>
        <ul>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/johnhenry-chibueze-b01ba41b3/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://github.com/chibuezej">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/itz_meriles/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Merilesjohn">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            
        </ul>
       </div>
    )
}

export default Sidebar;