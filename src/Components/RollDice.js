//Randomly Generates numbers for die on click and renders die icon from child
import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die.js';

class RollDice extends Component {
    state = {
        dieOneVal : 1,
        dieTwoVal : 1,
        rolling: false,
    };

    roll = () => {
        let dieOne = Math.floor(Math.random() * 6) +1;
        let dieTwo = Math.floor(Math.random() * 6) +1;
        this.setState(
            { 
                dieOneVal : dieOne,
                dieTwoVal : dieTwo, 
                rolling : true,
            }
        );
       
        setTimeout(() => {
            this.setState({rolling: false});            
          }, 500)
       
    };
    

    render() {
     
        let disabled = this.state.rolling ? true : false;
        let diceText = this.state.rolling ? "Rolling..." : "Roll the Dice!";
        return(
            <div className="rollDice">
                <h1>Hello...</h1>                
                
                <Die dieOneVal={this.state.dieOneVal} dieTwoVal={this.state.dieTwoVal} rolling={this.state.rolling}/> 
                
                <div><button id="Button" onClick={ this.roll } disabled={disabled}> { diceText } </button></div>            

                
            </div>
            
        )
    }
}

export default RollDice;