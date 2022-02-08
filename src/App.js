import React from 'react';
import { InlineMath } from 'react-katex';

import { EquationInput } from './components';

import 'katex/dist/katex.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      equation: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({ equation: event.target.value });
  }

  render() {
    const { equation } = this.state;

    return (
      <div className='main'>
        <div className='main_left_div'>
          <div className='main_left_top_div'>
            <div className='main_left_top_div_content'>
              <h1>Type your equation here</h1>
              <EquationInput
                type="text"
                value={equation}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className='main_left_bottom_div'></div>
        </div>
        <div className='main_right_div'> 
          <div className='main_right_div_content'>
            <InlineMath>{equation}</InlineMath>
            <div className='graph-div'>
              <h1>Graph</h1>
              <div className='graph'>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
 
} 

export default App;