import React from 'react';
import '../App.css'

class Warning extends React.Component {

  render() {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Oh snap!</strong> You need to include an answer to the question!
      </div>
    )
  }
}

export default Warning;