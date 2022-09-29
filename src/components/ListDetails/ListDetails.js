import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ListDetails = (props) => {

    const times = props.time.activity

    let total = 0;
    for (const time of times) {
        total = total + time.time
    }

        const notify = () => {toast("Congratulations!!!");
    }

    return (
        <div className='mt-10'>
            <h1>Your Selection Details</h1>
            <h2 className='mt-5'>Activity time: {total}hr</h2>
            <h2 className='mt-5'>Break Time: { }min</h2>
            <div>
            <button onClick={notify} className='btn btn-success mt-10'>COMPLETED</button>
            <ToastContainer />
            </div>
        </div>
    );
};

export default ListDetails;