import React from "react";

import './index.scss';

const EquationInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
        />
    );
}

export default EquationInput;