import React, { Component } from 'react';
import BellA from './BellA.jpg';
import BellB from './BellB.jpg';


export class NewComp extends Component {
  
  styles = {
    fontStyle: "italic",
    color: "grey"
  };

  ButtonChange=()=> {
    this.setState({
      message: "Hit the bell to not miss bla bla bla",
      sub:"subscribed !"
    })
  }

  constructor(props) {
    super(props)
  
    this.state = {
       message: "Subscribe to School of Tao ",
       sub: "Subscribe now! ",
       imageURL: BellA
    }
  }
  
  imageChange=() => {
    this.setState({
      imageURL: BellB,
      message: "THANKS! "
    })
  }

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.ButtonChange}>{ this.state.sub}</button>
        <p/>
        <img style={{width: "30px", heigth: "30px"}} src={this.state.imageURL} alt="" 
            onClick={this.imageChange}/>
      </div>
    )
  }
}

export default NewComp
