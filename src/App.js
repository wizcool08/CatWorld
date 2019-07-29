import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchInput from "./components/search-input/SearchInput";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ cats: data }));
  }

  handleSearchChange = val => {
    this.setState({ searchTerm: val });
  };

  render() {
    const { cats, searchTerm } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="App">
        <h1>CatWorld</h1>
        <SearchInput handleSearchChange={this.handleSearchChange} placeholder={'Search Cats..'} />
        <CardList cats={filteredCats} />
      </div>
    );
  }
}

export default App;
