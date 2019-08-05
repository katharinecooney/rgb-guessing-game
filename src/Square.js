import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.checkForWin(this.props.color);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="Square" style={{backgroundColor: this.props.color}}>
      </div>
    )
  }
}

export default Square;