import React from 'react';
import '../App.css'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toSubmit: '', id: -1}
  }

  componentWillUpdate(props) {
    this.state.toSubmit = props.toSubmit;
    this.state.id = props.question;
  }

  submit() {
    if (!this.state.toSubmit || this.state.id < 0) {
      return;
    }

    fetch('/responses', {
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        response: this.state.toSubmit,
        id: this.state.id.value
      })
    })
  }

  render () {
    return (
      <div className="panel-footer">
        <input className="btn btn-green btn-margin" type="button" value="Submit" onClick={() => this.submit()}/>
      </div>
    );
  }
}

export default Footer