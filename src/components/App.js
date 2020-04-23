import React from 'react';
import CharacterList from './CharacterList.js'
import Header from './designStructure/Header.js';
import Filter from './Filter.js';
import Footer from './designStructure/Footer.js';
import fetchData from '../services/Fetch';
import '../stylesheets/App.scss';
/* import { Link, Route, Switch } from 'react-router-dom'; */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue=this.handleInputValue.bind(this)
    this.state={
      totalData:[],
      inputValue:''
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
  handleInputValue(inputValue){
    this.setState({
      inputValue: inputValue
    })
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Filter handleInputValue={this.handleInputValue}
                  inputValue={this.state.inputValue}
          />
          <CharacterList  totalData={this.state.totalData}
                          inputValue={this.state.inputValue}
          />
        <Footer/>
      </div>
    );
  }
}

export default App;
