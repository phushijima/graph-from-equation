import React from "react";

import './index.scss';

const MathCommands = () => {
    const refs = [
        {
            name: 'Square Root',
            command: 'sqrt',
            id: 1
        },
        {
            name: 'Power',
            command: '^',
            id: 2
        },
        {
            name: 'nth Root',
            command: 'nthRoot(x, n)',
            id: 3
        },
    ];

    const listRefNames = refs.map((ref) => 
        <li key={ref.id}>{ref.name}</li>
    );
    
    const listRefCommands = refs.map((ref) => 
        <li key={ref.id}>{ref.command}</li>
    );

    return (
        <div className="ul-div">
            <ul className="ul-right">
                {listRefNames}
            </ul>
            <ul className="ul-left">
                {listRefCommands}
            </ul>
        </div>
    );
};

export default MathCommands;