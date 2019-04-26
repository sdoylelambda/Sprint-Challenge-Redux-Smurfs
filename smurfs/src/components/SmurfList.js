import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <ul>
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <div>        
                        <Smurf key={smurf.name} smurf={smurf} />
                    </div>
                );
            })}
        </ul>
    );
};

export default SmurfList;