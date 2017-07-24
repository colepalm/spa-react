import React, { Component } from 'react';
import ResponseList from './question/ResponseList';
import './App.css';

class App extends Component {
  state = {questions: [], hasAnswered: false};

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  render() {
    return (
      <div className="container">
        {this.state.questions.map((question, index) =>
          <div className="question" key={index}>
            <h5 key={question.id}><strong>{question.contents}</strong></h5>
            {this.state.hasAnswered ? <Results key={index} id={question.id}/> : <ResponseList key={index} id={question.id}/>}

          </div>
        )}
      </div>
    );
  }
}

export default App;