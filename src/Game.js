import React, { Component } from 'react';
import Square from './Square';
import uuid from 'uuid';
import './Game.css';

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let randomColor = `rgb(${red}, ${green}, ${blue})`
let numSquares = 9;

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: randomColor,
      squaresArray: Array.from({length: numSquares}),
      randomColors: [],
      hasWon: false,
      hi: 'hi'
      
    }
    this.createRandomColor = this.createRandomColor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  componentDidMount(){
    this.shuffle();
  }

  shuffle() {
    let someRandomColors = Array.from(Array.from({length: numSquares - 1}), x => this.createRandomColor());
    let allRandomColors = [this.state.color, ...someRandomColors]
    var shuffledColors = [];
    while(allRandomColors.length > 0){
      var i = Math.floor(Math.random() * allRandomColors.length);
      shuffledColors.push(allRandomColors[i]);
      allRandomColors.splice(i,1);
    }
    this.setState({
      randomColors: shuffledColors
    })
} 

  createRandomColor(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
  }

  checkForWin(clickedColor){
    console.log(clickedColor);
    if(clickedColor === this.state.color) {
      this.setState({
        hasWon: true
      })
    } 
  }

  setDifficulty(num){
    let numSquares = num;
    this.setState({
      squaresArray: Array.from({length: numSquares}),
    })
  }

  render() {
    return (
      <div className="Game">
        <div className="Game-title" style={{backgroundColor: this.state.hasWon ? this.state.color : 'rgb(6, 173, 179)'}}>
          <h1 onClick={this.shuffle}>The {this.state.color} Guessing Game!</h1>
          <button onClick={() => this.setDifficulty(3)}>easy</button>
        </div>
        <div className="Game-squareContainer">
          {this.state.squaresArray.map( (square, i) => 
          <Square 
            hasWon={this.state.hasWon}
            checkForWin={this.checkForWin} 
            color={
              this.state.hasWon === true ? 
              this.state.color :
              this.state.randomColors[i]} 
            key={uuid()}
          />)}
        </div>  
      </div>
    )
  }
}

export default Game;