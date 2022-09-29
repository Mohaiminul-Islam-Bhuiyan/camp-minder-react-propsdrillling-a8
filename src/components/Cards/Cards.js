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
        <div className='cards'>
            {
                cards.map(card => <Card
                key = {card.id}
                card = {card}
                ></Card>)
            }
        </div>
    );
};

export default Cards;