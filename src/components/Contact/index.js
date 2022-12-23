import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters/index';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate') 
    const refForm = useRef()
    

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_dk1d4al',
            'template_7o4q7bq',
            refForm.current,
            't37EXKDekgOr8a6kv',
            
        )
        .then(() => {
            alert('Sucessfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Failed to send please try again!!')
        })
     }

    return(
        
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={('Contact me'.split(''))}
                    idx={15}/>
                    
                </h1>
                <p>I am intrested in freelancing opportunities, intern opportunity to gather more experirence. The goal is to design as many project as possible so if you have any opportunity don't hesitate to contact me using the below form either.</p>
           <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type="email" name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input placeholder="subject" type='text' name='subject' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required />
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value="SEND" />
                    </li>
                </ul>
            </form>
           </div>
            </div>
            <div className='info-map'>
                Nmeregini Johnhenry,
                <br />
                Nigeria <br/>
                Peace Estate Soluyi community <br/>
                Gbagada,Lagos state <br />
                <span>Johnhenrychibueze@gmail.com</span>
            </div>
            <div className='map-wrap'>
                hey
                <MapContainer center={[6.55140, 3.39175]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[6.55140, 3.39175]}>
                        <Popup>Meriles lives here, you can stop for a drink 
                            :) 
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
            </div>
            <Loader type="pacman" />
            </>
    )
}

export default Contact;