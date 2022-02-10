import React from "react";
import functionPlot from 'function-plot'

import './index.scss';

const Graph = ({ value }) => {
    if (value === '') {
        return null;
    }

    console.log(value);

    functionPlot({
        target: '#quadratic',
        data: [{
          fn: value
        }]
    });
};

export default Graph;