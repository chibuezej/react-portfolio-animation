import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/big M.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser,   } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Sidebar = () => {

    const [showNav, setShowNav] = useState(false);


    return(
        <div className='nav-bar'> 
        <Link className="logo" to='/'>
<img src={LogoS} alt="logo"/>

        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" 
            activeclassname="active" to="/"   
             onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname="active" className="about-link" to="/about"
               onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link" to="/portfolio"
               onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink 
            activeclassname="active" 
            className="contact-link" to="/contact"    
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        
        <FontAwesomeIcon 
        onClick={() => setShowNav(false)}
        icon={faClose} 
        color="#ffd700" 
        size='3x' 
        className='close-icon' 
        />
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
        <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size='3x'
        className='hamburger-icon'/>
       </div>
    )
}

export default Sidebar;