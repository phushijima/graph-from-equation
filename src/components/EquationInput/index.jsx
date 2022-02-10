import React from "react";

import './index.scss';

const EquationInput = ({ value, onChange, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default EquationInput;