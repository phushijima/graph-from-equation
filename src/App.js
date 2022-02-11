import React, { useState } from 'react';
import { InlineMath } from 'react-katex';
import functionPlot from 'function-plot';

import { EquationInput } from './components';

import 'katex/dist/katex.min.css';

function App() {
  const [equation, setEquation] = useState('');

  const graphPlot = (graphEquation) => {
    functionPlot({
        target: '#graph',
        data: [{
          fn: graphEquation 
        }]
      });
};

  const onChange = (event) => {
    setEquation(event.target.value);
  };

  const onSubmit = (event) => {
    graphPlot(equation);

    event.preventDefault();
  }

  return (
    <div className='main'>
      <div className='main_top'>
          <div className='main_top_content'>
            <h1>Type your equation here</h1>
            <EquationInput
              type="text"
              value={equation}
              onChange={onChange}
              onSubmit={onSubmit} 
            />
          </div>
          <div className='main_top_katex'>
            <InlineMath>{equation}</InlineMath>
          </div>
        
      </div>
      <div className='main_bottom'> 
        <div className='main_bottom_left_div'></div>
        <div className='main_bottom_right_div'>
          <div className='main_bottom_right_div_content'>  
            <h1>Graph</h1>
            <div id='graph'></div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default App;