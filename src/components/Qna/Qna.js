import React from 'react';

const Qna = () => {
    return (
        <div className='mt-10 mb-10'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does React work ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>React is a library developed by facebook. React uses a declarative paradigm that makes easier to reason about one's application and aims to be both efficient and flexible. It uses a virtual DOM to efficiently update and render only the needed component when anything is changed.</p>
                </div>
                <br />
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is the difference between props and state ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Props are used to pass data from one component to another. <br />
                    The state is a local data component used for only one component where it is used</p>
                </div>
                <br />
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What does useEffect do (without data load) ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Without loading data through useEffect programmer can perform a operation after rendering. Programmer has that opportunity to tell react to do something after render through using useEffect.</p>
                </div>
                <br />
            </div>
        </div>
    );
};

export default Qna;