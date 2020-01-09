import React, { Component} from 'react';
import {Character, Footer, Header, Wrapper} from "./components/index";
import characters from "./characters.json";
import './App.css';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {

  state = {
    characters,
    characterSelect: [],
    score: 0,
    highScore: 0,
    message: ""
  };

  clicked = key => {
    let prevState = this.state.characterSelect.slice();
    let score = this.state.score;
    let highScore = this.state.highScore;

    this.makeShuffle()
  }

  makeShuffle(){
    this.setState({characters: shuffle(characters)});
  };

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
         />
       ))}
      </Wrapper>
      <Footer />
      </>
    )
  }

}

export default App;
