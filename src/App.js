import React from 'react';
import { InlineMath } from 'react-katex';

import { EquationInput } from './components';

import 'katex/dist/katex.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      equation: '',
      graphEquation: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ equation: event.target.value });
  }

  onSubmit(event) {
    const { equation } = this.state;
    this.setState({ graphEquation: equation });

    event.preventDefault();
  }

  render() {
    const { equation } = this.state;

    return (
      <div className='main'>
        <div className='main_top'>
            <div className='main_top_content'>
              <h1>Type your equation here</h1>
              <EquationInput
                type="text"
                value={equation}
                onChange={this.onChange}
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