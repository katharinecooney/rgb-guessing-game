import React, { Component } from 'react';
import Square from './Square';
import uuid from 'uuid';
import './Game.css';

let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
let randomColor = `rgb(${red}, ${green}, ${blue})`
let numSquares = 6;

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: this.createRandomColor(),
      squaresArray: Array.from({length: numSquares}),
      randomColors: [],
      hasWon: false
    }
    this.createRandomColor = this.createRandomColor.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.checkForWin = this.checkForWin.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.resetGame = this.resetGame.bind(this);
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
    numSquares = num;
    this.setState({
      color: this.createRandomColor(),
      randomColors: [],
      hasWon: false,
      squaresArray: Array.from({length: numSquares})
    }, () => this.shuffle());
  }

  resetGame(){
    this.setState({
      color: this.createRandomColor(),
      randomColors: [],
      hasWon: false,
      squaresArray: Array.from({length: numSquares})
    }, () => this.shuffle());
  }

  // <div className="Game-title" style={{backgroundColor: this.state.hasWon ? this.state.color : 'rgb(6, 173, 179)'}}></div>

  render() {
    return (
      <div className="Game">
        <div className="Game-title" >
          <h1>
            The <span>{this.state.color}</span> Guessing Game!
          </h1>
          <div className="Game-buttonContainer">
            <div className="Game-buttonContainer-inner">
              <div className="Game-resetButton">
                <button onClick={this.resetGame}> 
                  {
                    !this.state.hasWon ? 'RESET' : 'PLAY AGAIN'
                  }
                </button>
              </div>
              <div className="Game-difficultyButtons">
                <button onClick={() => this.setDifficulty(3)}>easy</button>
                <button onClick={() => this.setDifficulty(6)}>medium</button>
                <button onClick={() => this.setDifficulty(9)}>hard</button>
              </div>
            </div>
            
          </div> 
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