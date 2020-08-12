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

  // (event) is from the input. The (this) keyword is created in the arrow function
  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />

        <CardList
          monsters={filteredMonsters}
        />
      </div>
    );
  }
}

export default App;
