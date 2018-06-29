import React, { Component } from 'react';
import './App.css';
import JumboTron from './jumboTron.js';
import TextController from './textController.js';

class App extends Component {
   constructor(props) {
    super(props);

 
    this.state = {
      display: "Hello World"
    };
 
  }

   updateDisplay(text){
    this.state.display = text;
    var state = this.state;
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <header >
          <JumboTron display={this.state.display}/>
        </header>
            <TextController textOutput={this.updateDisplay.bind(this)}/>
      </div>
    );
  }
}

export default App;
