import React from 'react'
import '../components/card.css'


const Card = props => (
    <div className="Card">
        <img src={props.image} />
        <h3>{props.title}</h3>
        <p>{props.role}</p>
    </div>
)

export default Card