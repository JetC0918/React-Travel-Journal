import { FaMapMarker } from 'react-icons/fa';
import React from 'react';


export default function Card(props) {
    return (
        <section className="card">
           <img className ='cardImg' src= {props.image}></img>
           <div className="cardInfo">
                <div className='cardLocation'>
                    <div className='cardIcon'><FaMapMarker /> </div>
                    <h4>{props.country}</h4>
                    <a className = "cardLink" href={props.googleMapURL}>View on Google Maps</a>
                </div>
                <h2 className='cardPlace'>{props.location}</h2>
                <p className='cardDate'>{props.date}</p>
                <p className='cardDetail'>{props.info}</p>
           </div>
        </section>
    )
}