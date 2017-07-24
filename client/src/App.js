import React, { Component } from 'react';
import ResponseList from './question/ResponseList';
import Results from './results/Results'
import './App.css';

class App extends Component {
  state = {questions: [], hasAnswered: false};

  constructor() {
    super();
    this.setState({hasAnswered: false});
  }

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  handleClick() {
    this.setState({hasAnswered: true});
  }

  render() {
    return (
      <div className="container">
        {this.state.questions.map((question, index) =>
          <div className="question" key={index}>
            <h5 key={question.id}><strong>{question.contents}</strong></h5>
            {this.state.hasAnswered ? <Results key={index} id={question.id}/> : <ResponseList key={index} id={question.id} hasAnswered={this.handleClick.bind(this)}/>}
          </div>
        )}
      </div>
    );
  }
}

export default App;