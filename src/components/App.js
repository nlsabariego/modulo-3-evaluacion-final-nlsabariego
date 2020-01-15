import React from "react";
import { Route, Switch } from "react-router-dom";
import apiCharacters from "../api/characters";
import Header from "./Header";
import Filter from "./Filter";
import CharacterData from "./CharacterData";
import ListCharacters from "./ListCharacters";
import "../stylesheets/App.scss";
import FilterGender from "./FilterGender";
import FilterSpecies from "./FilterSpecies";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: "",
      gender: "all",
      checked: ""
    };
    this.renderCharacter = this.renderCharacter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  //ayudantes

  filterBySearch() {
    return this.state.characters
      .filter(character => {
        return character.name.toLowerCase().includes(this.state.search.toLowerCase());
      })
      .filter(character => {
        return this.state.gender === "all" ? true : character.gender === this.state.gender;
      })
      .filter(character => {
        return this.state.checked === "" ? true : character.species === this.state.checked;
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

  handleSpecies(data) {
    this.setState({
      checked: data.value
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
            <FilterSpecies handleSpecies={this.handleSpecies} checked={this.state.checked} />
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
