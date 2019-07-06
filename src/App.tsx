import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export class App extends React.Component<
  {},
  { characters: ICharacter[]; search: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      characters: [],
      search: "mit"
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(json_response => {
        this.setState({ characters: json_response.results });
      });
  }
  render() {
    return (
      <div className="App">
        <CardList
          characters={
            this.state.search
              ? this.state.characters.filter(character =>
                  character.name.includes(this.state.search)
                )
              : this.state.characters
          }
        />
      </div>
    );
  }
}

export default App;
