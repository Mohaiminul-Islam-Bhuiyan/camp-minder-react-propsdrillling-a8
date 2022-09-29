import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMap } from '@fortawesome/free-solid-svg-icons'
import Break from '../Break/Break';
import ListDetails from '../ListDetails/ListDetails';

const Selection = (props) => {

    const breakValue = () => {
        
    }
    return (
        <div className='bg-gray-50 rounded-lg text-center'>
            <div className='flex justify-items-center items-center gap-2  p-4'>
                <div className='w-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFh4khqabC6PI70RD1_ydd0S1QrHR7oSiLQ&usqp=CAU" alt="" />
                </div>
                <div>
                <h1 className='text-xl font-extrabold'>Adnan Adim</h1>
                <p><small>
                    <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> 221b, Baker Street, London
                </small></p>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 justify-items-center items-center'>
                <div>
                    <h1>65<small>kg</small></h1>
                    <p>weight</p>
                </div>
                <div>
                    <h1>165<small>cm</small></h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>26<small>years</small></h1>
                    <p>Age</p>
                </div>
            </div>
            {
                <Break></Break>
            }
            {
                <ListDetails time = {props}></ListDetails>
            }
        </div>
    );
};

export default Selection;