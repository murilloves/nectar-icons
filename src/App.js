import React from 'react';
// import logo from './logo.svg';
import Icons from './Icons/Icons.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: 'Hello!'};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Icons/>
        </header>
      </div>
    );
  }
}

export default App;
