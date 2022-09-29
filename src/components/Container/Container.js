import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import Selection from '../Selection/Selection';


const Container = () => {
    const [activity, setActivity] = useState([])

    const handleAdd = (card) => {
        const newCard = [...activity, card]
        setActivity(newCard)
        // console.log(newCard)
    }

    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-2 m-5'>
            <div className='col-span-4'>
                <Cards
                handleAdd = {handleAdd}></Cards>
            </div>
            <Selection activity = {activity}></Selection>
        </div>
        </div>
    );
};

export default Container;