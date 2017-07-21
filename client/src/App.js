import React, { Component } from 'react';
import responseList from './responseList';
import './App.css';

class App extends Component {
  state = {questions: []};

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  render() {
    return (
      <div className="App">
        <h1>Questions</h1>
        {this.state.questions.map((question, index) =>
          <div key={index}>
            <div key={question.id}>{question.contents}</div>
            <responseList />
          </div>
        )}
      </div>
    );
  }
}

export default App;