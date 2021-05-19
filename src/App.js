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

  // Shuffle the images on page load
  componentDidMount() {
    this.shuffleArray();
  }

    //Shuffle the images, each number match an image ID
  shuffleArray = () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ order: array })

  }

  // Function executed each time the User click on an image.
  flagClick = (flag) => {
    this.setState({ lose: '' });

    // If the user has already clicked on that image, the game is lost.
    if (this.state.clickedFlags.includes(flag)) {
      this.setState({ 
        score: 0,
         status: 'You lost! Play Again!',
         clickedFlags: [],
         lose: 'animate__wobble'
         })

    } else {
      //Increment score and High score
      this.setState({
        clickedFlags: [...this.state.clickedFlags, flag],
        score: this.state.score + 1,
      });
      if (this.state.score >= this.state.topScore) {
        this.setState({ topScore: this.state.topScore + 1 })
      }

    }
    //Shuffle the images again
    this.shuffleArray();
  }

  render() {
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
