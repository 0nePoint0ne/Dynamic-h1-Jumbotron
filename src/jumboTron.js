import React from 'react';
import ReactDOM from 'react-dom';

class JumboTron extends React.Component {
  constructor(props) {
    super(props);
 
  }
 
  render() {
    return (
      <div id="JumboTron">
        <h1>{this.props.display}</h1>
      </div>
    );
  }
}
export default JumboTron;