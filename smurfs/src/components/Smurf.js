import React from 'react';

const Smurf = props => {
    return (
        <li>
            <div className="card">
           


                <h2>{props.smurf.name}</h2>
                <h2>{props.smurf.age}</h2>
                <h2>{props.smurf.height}</h2>
                <h2>{props.smurf.id}</h2>
           
           
           
            </div>
        </li>
    );
};

export default Smurf;