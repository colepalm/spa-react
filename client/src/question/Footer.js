import React from 'react';
import Warning from './Warning'
import '../App.css'

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { toSubmit: '', id: -1, warningMessage: false }
  }

  componentWillUpdate(props) {
    this.state.toSubmit = props.toSubmit;
    this.state.id = props.question;
  }

  submit() {
    if (!this.state.toSubmit || this.state.id < 0) {
      this.setState({warningMessage: true});
      return;
    }

    else {
      this.setState({warningMessage: false})
    }

    fetch('/responses', {
      method: 'post',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: JSON.stringify({
        response: this.state.toSubmit,
        id: this.state.id.value
      })
    });

    this.props.footerClick();
  }

  render () {
    return (
      <div className="panel-footer">
        <div className="col-sm-6">
          {this.state.warningMessage ? <Warning />: <div></div>}
        </div>
        <div className="col-sm-6">
          <input className="btn btn-green btn-margin" type="button" value="Submit" onClick={() => this.submit()}/>
        </div>
      </div>
    );
  }
}

export default Footer