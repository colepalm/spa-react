import React, { Component } from 'react';
import './App.css';

class responseList extends Component {

  constructor(props) {
    super(props);
    this.state.id = { value: this.props.id };
  }

  static render () {
    return (
      <div>Hey</div>
    )
  }

  // state = {responses: []};
  //

  //
  // componentDidMount() {
  //   fetch('/responses/' + this.state.id)
  //     .then(res => res.json())
  //     .then(responses => {
  //       this.setState({ responses });
  //       console.log(responses)
  //     });
  // }
  //
  // render() {
  //   return (
  //     <div className="questions">
  //       {this.state.responses.content.map((response, index) =>
  //         <input key={index} value={response} type="radio" />
  //         )}
  //     </div>
  //   );
  // }
}

export default responseList;