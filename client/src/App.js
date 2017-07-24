import React, { Component } from 'react';
import ResponseList from './question/ResponseList';
import Results from './results/Results'
import './App.css';

class App extends Component {
  state = {questions: [], hasAnswered: []};

  constructor() {
    super();
  }

  componentDidMount() {
    fetch('/questions')
      .then(res => res.json())
      .then(questions => {
        this.setState({ questions });

        const cached = localStorage.getItem('session');

        if (cached) {
          this.setState({hasAnswered: JSON.parse(cached)})
        }
        else {
          let tempArray = [].fill(false, 0, questions.length-1);
          this.setState({hasAnswered: tempArray})
        }
      });
  }

  handleClick(context) {
    let items = context.state.hasAnswered;
    items[this] = true;
    context.setState({hasAnswered: items});

    localStorage.setItem('session', JSON.stringify(context.state.hasAnswered));
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  render() {
    return (
      <div className="container">
        {this.state.questions.map((question, index) =>
          <div className="question" key={index}>
            <h5 key={question.id}><strong>{question.contents}</strong></h5>
            {this.state.hasAnswered[index] ? <Results key={index} id={question.id} getRandomColor={this.getRandomColor}/> : <ResponseList key={index} id={question.id} hasAnswered={this.handleClick.bind(index, this)}/>}
          </div>
        )}
      </div>
    );
  }
}

export default App;