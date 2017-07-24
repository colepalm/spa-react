import React from 'react';


class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state.id = this.props.id;
  }

  state = {id: -1};

  componentWillMount() {
    fetch('/graphData/' + this.state.id)
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