import React from 'react';

const ListDetails = (props) => {

    const times = props.time.activity

    let total = 0;
    for(const time of times){
        total = total + time.time
    }

    return (
        <div className='mt-10'>
            <h1>Your Selection Details</h1>
            <h2>Activity time: {total}hr</h2>
            <h2>Break Time: </h2>
        </div>
    );
};

export default ListDetails;