import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // Life cycle methods only for classes
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monsters"
          handleChange={event => this.setState({ searchField: event.target.value })}
        />

        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
