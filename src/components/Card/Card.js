import React from 'react';
import "./Card.css"

const Card = (props) => {
    const {card, handleAdd} = props
    const { picture, name, time } = card
  
    return (
        <div className='card shadow-xl'>
            <div className="card w-full bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl w-full h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Estimated Time: {time}hr</p>
                    <div className="card-actions">
                        <button onClick={()=> handleAdd(card)} className="btn btn-primary">Add To List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;