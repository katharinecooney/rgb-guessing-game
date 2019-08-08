import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentColor: this.props.color,
      isClicked: false
    }
    this.handleCheckForWin = this.handleCheckForWin.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleColorChange(){
    console.log('handle color change');
    !this.props.hasWon && this.setState({
      currentColor: 'rgb(16, 16, 34)',
      isClicked: true
    })
  }

  handleCheckForWin(){
    console.log('handle click');
    this.props.checkForWin(this.props.color);
  }

  handleClick(){
    this.handleCheckForWin();
    this.handleColorChange();
  }

  render() {
    return (
      <div onClick={this.handleClick}  className={this.state.isClicked ? "Square Square-disappear" : "Square"} style={{backgroundColor: this.state.currentColor}}>
      </div>
    )
  }
}

export default Square;