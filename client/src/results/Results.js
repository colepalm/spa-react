import React from 'react';
import '../App.css';

class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state.id = {value: this.props.id};
  }

  componentWillMount() {
    fetch('/graphData/' + this.state.id.value)
      .then(res => res.json())
      .then(responses => this.setState({ responses }));
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Results