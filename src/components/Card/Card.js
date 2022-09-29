import React from 'react';
import "./Card.css"

const Card = (props) => {
    console.log(props.card)
    const {picture, name, time} = props.card
    return (
        <div className='card'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p><small>Estimated time: {time}hr</small></p>
        </div>
    );
};

export default Card;