import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/cardList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    return (
      <div className="App">
        <CardList name={'monsters'}>
          {
            this.state.monsters.map(monster => <h1>{monster.name}</h1>)
          }
        </CardList>

      </div>
    );
  }
}

export default App;
