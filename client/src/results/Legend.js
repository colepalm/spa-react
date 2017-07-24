import React from 'react';
import '../App.css';

class Legend extends React.Component {

  constructor(props) {
    super(props);
    this.state.legend = this.props.toDisplay;
  }

  state = {legend: []};

  render() {
    return (
      <ul>
        {this.state.legend.map((item, index) =>
          <li key={index}>
            <span style={{backgroundColor: item.backgroundColor}}>{item.response}</span>
          </li>
        )}
      </ul>
    )
  }
}

export default Legend;