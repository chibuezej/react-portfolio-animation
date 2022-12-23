import {  faCss3, faGithub, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])
     
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'> <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={'About me'.split('')}
                idx={15} />
                </h1>
                <p>I'm a very ambitious front-end developer who might not know the answers but is ready to search everywhere and everything to complete the project. <br />
                Looking for opportunities to learn from the best and challange myself to become a renowned software developer.</p>
                <p>I'm quiet confident that due to my taste for more knowledge in development i will continue to learn how to solve bugs.</p>
                <p>If i need to define myself in one sentence that world be a cheerful person, addicted to seeking knowledge</p>
                </div>
                
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faVuejs} color="#DD0031" />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
                        </div>
                    </div>
                </div>

                </div>
                <Loader type="pacman" />
                </>
    )
}

export default About;