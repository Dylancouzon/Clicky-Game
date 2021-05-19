import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardDeck from "./components/CardDeck";

class App extends Component {
  state = {
    order: [],
    clickedFlags: [],
    score: 0,
    topScore: 0,
    status: 'Click an image to start!',
    lose: ''
  };

  componentDidMount() {
    this.shuffleArray();
  }

  shuffleArray = () => {
    // Maybe need to make this Async ??
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ order: array })

  }

  flagClick = (flag) => {
    this.setState({ lose: '' })
    if (this.state.clickedFlags.includes(flag)) {
      this.setState({ 
        score: 0,
         status: 'You lost!',
         clickedFlags: [],
         lose: 'animate__wobble'
         })
    } else {
      this.setState({
        clickedFlags: [...this.state.clickedFlags, flag],
        score: this.state.score + 1,
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 })
      }

    }
    this.shuffleArray();
  }

  render() {
    console.log(this.state.clickedFlags)
    return (
      <div>
        <Navbar values={this.state} />
        <Header />
        <CardDeck order={this.state.order} flagClick={this.flagClick} style={this.state.lose} />
      </div>
    );
  }
}

export default App;
