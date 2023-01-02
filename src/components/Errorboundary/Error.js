import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import LogoTitle from '../../assets/images/P.jpeg'
import { Link, useNavigate } from "react-router-dom";
import Loader from "react-loaders";
import './Error.scss';

const ErrorBoundary = () => {
    const navigate = useNavigate()

    const [letterClass, setLetterClass] = useState('text-animate')
    


    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

   

     useEffect(() => {
         setTimeout(() => {
             navigate('/', )
         },7000)
     // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])

    return (
        <div className="error">
<div className="container home-page">
    <div className="error-page">
            <div className="text-zone"> 
            <h1>
                <span className={letterClass}>E</span>
                <span className={` ${letterClass} _12`}>r</span>
                <span className={` ${letterClass} _14`}>r</span>
                <span className={` ${letterClass} _15`}>o</span>
                <span className={` ${letterClass} _16`}>r</span>
            <img src={LogoTitle} alt="error-page"/>
            < AnimatedLetters letterClass={letterClass} 
            strArray={('age'.split(''))}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} 
            strArray={'you`re lost'.split('')} idx={22} />
            </h1>
            <h2>click here to go home</h2>
            <Link to="/" className='flat-button'>Go back Home</Link>
            </div>
            </div>
            </div>
            <Loader type="pacman" />
            </div>
    )
    
}

export default ErrorBoundary;