import React, { Component } from 'react';
import './App.css';

const commaNumber = require('comma-number');
const commafy = commaNumber.bindWith(',', '.');

type Props = {};
type State = { fromInput: string; withCommas: string };

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { fromInput: '', withCommas: '' };
  }
  inputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const rawInput = e.currentTarget.value;

    let inputNumber = rawInput.split(',').join('');
    console.log(inputNumber);
    if (Number(inputNumber) || inputNumber === '') {
      this.setState({ withCommas: commafy(e.currentTarget.value) });
    }
  };
  render() {
    return (
      <div className="App">
        <input onChange={this.inputChangeHandler} />
        <p>{this.state.withCommas}</p>
      </div>
    );
  }
}

export default App;
