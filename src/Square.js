import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Square" style={{backgroundColor: this.props.color}}>
      </div>
    )
  }
}

export default Square;