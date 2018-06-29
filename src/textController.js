import React from 'react';
import ReactDOM from 'react-dom';
class TextController extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      text: "Hello World"
    };
 
  }


  handleChange(event) {
   this.props.textOutput(event.target.value);
  this.setState({text: event.target.value});
  }
 
  render() {
    return (
      <div id="JumboTron">
        <input type="text" placeholder="Your Text!" 
        value={this.state.text} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
export default TextController;