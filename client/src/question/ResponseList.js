import React from 'react';
import '../App.css';
import Footer from './Footer'

class ResponseList extends React.Component {

  constructor(props) {
    super(props);
    this.state.id = { value: this.props.id };
    this.state.selected = undefined;
  }

  state = {responses: []};

  componentWillMount() {
    fetch('/responses/' + this.state.id.value)
      .then(res => res.json())
      .then(responses => this.setState({ responses }));
  }

  handleChange(response) {
    this.setState({selected: response});
  }

  render() {
    return (
      <div>
        <form className="form-inline">
          {this.state.responses.map((response, index) =>
            <div key={index} className="radio radio-form">
              <label>
                <input key={index} value={response} name="value" type="radio" onChange={() => this.handleChange(response)} />
                <span className="response">{response}</span>
              </label>
            </div>
            )}
        </form>
        <Footer toSubmit={this.state.selected} question={this.state.id} footerClick={this.props.hasAnswered} />
      </div>
    );
  }
}

export default ResponseList;