import React from "react";
import { Route, Switch } from "react-router-dom";
import apiCharacters from "../api/characters";
import Header from "./Header";
import Filter from "./Filter";
import CharacterData from "./CharacterData";
import ListCharacters from "./ListCharacters";
import "../stylesheets/App.scss";
import FilterGender from "./FilterGender";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
      gender: "all"
    };
    this.renderCharacter = this.renderCharacter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGender = this.handleGender.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  //ayudantes

  filterBySearch() {
    return this.state.characters
      .filter(character => {
        return character.name.includes(this.state.search);
      })
      .filter(character => {
        console.log(character.species);

        return this.state.gender === "all" ? true : character.gender === this.state.gender;
      });
  }

  handleSearch(data) {
    this.setState({
      search: data.value
    });
  }

  handleGender(data) {
    this.setState({
      gender: data.value
    });
  }
  //render

  renderCharacter(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(item => item.id === routeId);
    if (character === undefined) {
      return <p>Personaje no encontrado</p>;
    } else {
      return <CharacterData character={character} />;
    }
  }

  render() {
    console.log(this.state.characters);

    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <FilterGender handleGender={this.handleGender} value={this.state.gender} />
            <Filter handleSearch={this.handleSearch} value={this.state.search} />
            <ListCharacters characters={this.filterBySearch()} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
