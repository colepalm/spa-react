import React from 'react';
import PieChart from 'react-simple-pie-chart';
import Legend from './Legend'


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
    let tempSlices = [], tempLegend = [];

    for(let key in this.state.data) {
      let color = this.props.getRandomColor();

      tempSlices.push({
        color: color,
        value: this.state.data[key]
      });

      let index = tempLegend.indexOf(key);
      if (index < 0) {
        tempLegend.push({
          backgroundColor: color,
          response: key
        })
      }
    }

    this.setState({slices: tempSlices, legend: tempLegend});
  }

  render() {
    if (this.state.slices.length === 0)
      return (<div>Loading...</div>);

    else {
      return (
        <div>
          <div className="col-sm-6">
            <PieChart slices={this.state.slices}/>
          </div>
          <div className="col-sm-6">
            <Legend toDisplay={this.state.legend}/>
          </div>
        </div>
      )
    }
  }
}

export default Results