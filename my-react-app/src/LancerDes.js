import React from "react";
import De from "./De";
import Des from './images/De.css'


class LancerDes extends React.Component {
    //constructeur des props 
    constructor(props) {
        super(props);
        this.state = {
          dice1: 0,
          dice2: 0,
          rolledOnce: false
        };
      }
      //la mtehode lancer qui permet de lancer deux dés aleatoirement 
      lancer = () => {
        this.setState({
          dice1: Math.floor((Math.random() * 6) + 1),
          dice2: Math.floor((Math.random() * 6) + 1),
          rolledOnce: true
        });
      }
      // ce qu'affiche la page 
      render() { 
          // dans le cas ou tu es le gagnant 
        if (parseInt(this.state.dice1) > parseInt(this.state.dice2))
        {
            return (
                <div className="dice">
                    <h1 className="win">
                    YOU WIN 
                    </h1>
                  <br/>
                  <div class = "diceFace">
                    <De roll = {this.state.dice1}/>
                    <De roll = {this.state.dice2}/>
                  </div>
                  <button class = "diceButton" onClick={this.lancer}> Lancer les Dés</button>                
                </div>
              )
        }
         // dans le cas contraire ou une égalité, avec le bouton lancer dés qui permet d'executer la methode lancer
        else {
            return (
                <div className="dice">
                 <h1 className="win">
                     Try again :( 
                 </h1>
                  <br/>
                  <div class = "diceFace">
                    <De roll = {this.state.dice1}/>
                    <De roll = {this.state.dice2}/>
                  </div>
                  <button class = "diceButton" onClick={this.lancer}> Lancer les Dés</button>     
                </div>
              )                 
        }                   
        }
      }

export default LancerDes;