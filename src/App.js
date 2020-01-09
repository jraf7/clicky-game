import React, { Component} from 'react';
import {Character, Footer, Header, Wrapper} from "./components/index";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters,
    characterSelect: [],
    score: 0,
    highScore: 0,
    message: ""
  };

  clicked = (id) => {
    let prevState = this.state.characterSelect.slice();
    let score = this.state.score;
    let highScore = this.state.highScore;

    console.log(id)

  }

  render () {
    return (
      <>
      <Header state={this.state} />
      <Wrapper>
       {this.state.characters.map( character => (
        <Character 
         image={character.image}
         alt={character.key}
         key={character.key}
         clicked={this.clicked}
        //  id={character.id}
        //  key={character.id}
         />
       ))}
      </Wrapper>
      <Footer />
      </>
    )
  }

}

export default App;
