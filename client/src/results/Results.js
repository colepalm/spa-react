import React from 'react';
import PieChart from 'react-simple-pie-chart';


class Results extends React.Component {

  constructor(props) {
    super(props);
    this.state.id = this.props.id;
    this.state.slices = [];
  }

  state = {id: -1};

  componentWillMount() {
    fetch('/graphData/' + this.state.id)
      .then(res => res.json())
      .then(data => {
        this.setState({data});
        this.fillSlices();
    })
  }

  fillSlices() {
    let tempSlices = [];

    for(let key in this.state.data) {
      let color = this.props.getRandomColor();

      tempSlices.push({
        color: color,
        value: this.state.data[key]
      })
    }

    this.setState({slices: tempSlices})
  }

  render() {
    if (!this.state.slices.length === 0)
      return (<div>Loading...</div>);

    else {
      return (
        <PieChart slices={this.state.slices}/>
      )
    }
  }
}

export default Results