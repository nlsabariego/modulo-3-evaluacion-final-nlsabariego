import React from "react";
import { Route, Switch } from "react-router-dom";
import apiCharacters from "../api/characters";
import Header from "./Header";
import Filters from "./Filter";
import CharacterData from "./CharacterData";
import ListCharacters from "./ListCharacters";
import "../stylesheets/App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: ""
    };
    this.renderCharacter = this.renderCharacter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }

  //ayudantes

  filterBySearch() {
    return this.state.characters.filter(character => {
      return character.name.includes(this.state.search);
    });
  }

  //eventos

  handleSearch(data) {
    this.setState({
      search: data.value
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
    return (
      <div className='app'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Filters filter={this.filterBySearch()} characters={this.state.characters} handleSearch={this.handleSearch} value={this.state.search} />
            <ListCharacters characters={this.filterBySearch()} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
