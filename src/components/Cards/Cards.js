import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTent } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./Cards.css"

const Cards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div className='cards-container'>
           <div className='title'>
           <FontAwesomeIcon icon={faTent}></FontAwesomeIcon>
            <h1 className='font-extrabold text-4xl ml-2'>CAMP MINDER</h1>
           </div>
            <p className='text-3xl'>Select Your favourite activity to enjoy your camping.</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-1 pt-5'>
            {
                cards.map(card => <Card
                key = {card.id}
                card = {card}
                ></Card>)
            }
            </div>
        </div>
    );
};

export default Cards;