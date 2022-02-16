import React, { useState } from 'react';
import functionPlot from 'function-plot';
import { EquationInput, MathCommands } from './components';

function App() {
  const [equation, setEquation] = useState('');

  const graphPlot = (graphEquation) => {
    functionPlot({
        target: '#graph-div',
        title: 'Graph',
        width: 600,
        height: 450,
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
      </div>
      <div className='main_bottom'> 
        <div className='main_bottom_left_div'>
          <div className='main_bottom_left_div_content'>
            <h1>Commands</h1>
            <MathCommands />
          </div>
        </div>
        <div className='main_bottom_right_div'>
          <div className='main_bottom_right_div_content'>
            <div id='graph-div'></div>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default App;