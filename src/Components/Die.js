//Used to render the type of die
import React, { Component } from 'react';
import './Die.css';

class Die extends Component{ 

    render(){
        let dieOne = `fas fa-dice-${numWrite(this.props.dieOneVal)}`;
        let dieTwo = `fas fa-dice-${numWrite(this.props.dieTwoVal)}`;

        function numWrite(dieVal) {
            switch(dieVal) {
                case 1: 
                   return "one";
                case 2:
                    return "two";
                case 3:
                    return "three";
                case 4: 
                    return "four";
                case 5:
                    return "five";
                case 6:
                    return"six";
                default:
                    return "error";            
        };         
        }     
        let shaking = this.props.rolling ? "shake" : "";   
        return(
            <div id={shaking}>
                <i className={dieOne}></i>
                <i className={dieTwo}></i>
                
            </div>
        )
    }
}


export default Die;