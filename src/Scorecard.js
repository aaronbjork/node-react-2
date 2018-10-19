import React, { Component } from 'react';
import './Scorecard.css';

class Scorecard extends Component {
  render() {
    return (
      <div className="Scorecard">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.infrench}>Translate it</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Score' };
    this.infrench = this.infrench.bind(this);
  }

  infrench() {
    this.setState({ greeting: 'Par' });
  }
  
}



export default Scorecard;

