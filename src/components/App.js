import React from 'react';
import CharacterList from './CharacterList.js'
import Header from './designStructure/Header.js';
import Footer from './designStructure/Footer.js';
import '../stylesheets/App.scss';
/* import { Link, Route, Switch } from 'react-router-dom'; */

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <CharacterList/>
        <Footer/>
      </div>
    );
  }
}

export default App;
