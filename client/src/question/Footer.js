import React from 'react';
import '../App.css'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toSubmit: '' }
  }

  componentWillUpdate(props) {
    this.state.toSubmit = props.toSubmit
  }

  submit() {
    if (!this.state.toSubmit) {
      return;
    }

    fetch('/responses', {
      method: 'POST',
      body: JSON.stringify({
        response: this.state.toSubmit
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