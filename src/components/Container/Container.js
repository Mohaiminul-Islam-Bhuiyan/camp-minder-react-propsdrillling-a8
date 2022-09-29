import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import Qna from '../Qna/Qna';
import Selection from '../Selection/Selection';


const Container = () => {
    const [activity, setActivity] = useState([])

    const handleAdd = (card) => {
        const newCard = [...activity, card]
        setActivity(newCard)
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
        <Qna></Qna>
        </div>
    );
};

export default Container;