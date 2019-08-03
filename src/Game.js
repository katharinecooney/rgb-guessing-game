import React, { Component } from 'react';
import Square from './Square';
import uuid from 'uuid';
import './Game.css';

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let numSquares = 6;

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: `rgb(${red}, ${green}, ${blue})`,
      squares: Array.from({length: numSquares}),
    }
  }

  render() {
    return (
      <div className="Game">
        <div className="Game-title">
          <h1>The {this.state.color} Guessing Game!</h1>
        </div>
        <div className="Game-squareContainer">
          {this.state.squares.map(square => <Square key={uuid()}/>)}
        </div>  
      </div>
    )
  }
}

export default Game;