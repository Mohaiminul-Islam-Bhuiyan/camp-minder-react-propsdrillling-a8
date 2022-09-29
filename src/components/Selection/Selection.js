import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap } from '@fortawesome/free-solid-svg-icons'
import ListDetails from '../ListDetails/ListDetails';

const Selection = (props) => {

    const [btime, setTime] = useState('')

    const handleBreakTime = (breakTime) => {
        const bTime = breakTime.target.innerText;
        setTime(bTime)
    }


    return (
        <div className='bg-gray-50 rounded-lg text-center'>
            <div className='flex justify-items-center items-center gap-2  p-4'>
                <div className='w-10 rounded-full'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1QSaAg6OvCUD9zfi36uFUAe1P1fKh_VBIw&usqp=CAU" alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-extrabold'>Sherlock Holmes</h1>
                    <p><small>
                        <FontAwesomeIcon icon={faMap}></FontAwesomeIcon> 221b, Baker Street, London
                    </small></p>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 justify-around'>
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
                <div className='mt-5'>
                    <h1 className='font-extrabold text-xl mb-5'>Add A Break</h1>
                    <button onClick={(breakTime) => handleBreakTime(breakTime)} className='btn btn-circle'>10min</button>
                    <button onClick={(breakTime) => handleBreakTime(breakTime)} className='btn btn-circle'>20min</button>
                    <button onClick={(breakTime) => handleBreakTime(breakTime)} className='btn btn-circle'>30min</button>
                    <button onClick={(breakTime) => handleBreakTime(breakTime)} className='btn btn-circle'>40min</button>
                    <button onClick={(breakTime) => handleBreakTime(breakTime)} className='btn btn-circle'>60min</button>
                </div>
            }
            {
                <ListDetails time={props} break ={btime}></ListDetails>
            }
        </div>
    );
};

export default Selection;