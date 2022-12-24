import React from 'react';
import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import portfolioData from '../../data/portfolio.json'
// import { getDocs, collection } from 'firebase/firestore';
// import {db} from '../../fireebase'
const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
//    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });

//     useEffect(() => {
//         getPortfolio()
//     }, [])
    
//     const getPortfolio = async () => {
//       const querySnapshot = await  getDocs(collection(db, 'portfolio'));
//       console.log(querySnapshot);
//     }
  
// console.log(portfolio)
       
    const renderportfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className='image-box' key={idx}>
                                <img src={port.cover} className="portfolio-image"
                                alt="Welcome to my porfolio"/>
                                <div className='content'>
                                <p className='title'>{port.title}</p>
                                <h4 className='description'>{port.description}</h4>
                                <button
                                className='btn'
                                onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        )
    }
    return(
        <>
        <div className='container portfolio-page'>
            <h1 className='page-title'>
                <AnimatedLetters
                letterClass={letterClass} 
                strArray={"Porfolio".split("")}
                idx={15} 
                />
            </h1>
            <div>{renderportfolio(portfolioData.portfolio)}</div>
        </div>
        <Loader type="pacman"/>
        </>
     
    )
}

export default Portfolio;