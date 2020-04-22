import React from 'react';
import CharacterList from './CharacterList.js'
import Header from './designStructure/Header.js';
import Footer from './designStructure/Footer.js';
import fetchData from '../services/Fetch';
import '../stylesheets/App.scss';
/* import { Link, Route, Switch } from 'react-router-dom'; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      totalData:[]
    }
  }

  componentDidMount(){
    fetchData()
    .then(data=>{
      this.setState({
        totalData: data.results,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <CharacterList totalData={this.state.totalData}
          />
        <Footer/>
      </div>
    );
  }
}

export default App;
