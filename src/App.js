import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CardDeck from "./components/CardDeck";

class App extends Component {
  state = {
    order: [],
    score: 0,
    topScore: 0,
    count: 0,
    status: 'Click an image to start!'
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
    this.setState({ order: array})
  }

  render() {  
    return (
      <div>
        <Navbar />
        <Header />
        <CardDeck order={this.state.order}/>
      </div>
    );
  }
}

export default App;
