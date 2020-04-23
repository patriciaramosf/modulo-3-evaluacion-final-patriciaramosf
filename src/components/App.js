import React from 'react';
import Header from './designStructure/Header.js';
import Filter from './Filter.js';
import CharacterList from './CharacterList.js'
import CharacterDetails from './CharacterDetails.js'
import CharacterError from './CharacterError.js'
import Footer from './designStructure/Footer.js';
import fetchData from '../services/Fetch';
import '../stylesheets/App.scss';
import {Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue=this.handleInputValue.bind(this)
    this.showDetails=this.showDetails.bind(this)
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
  showDetails(props){
    const urlId = props.match.params.id;
    const detailsObjects = this.state.totalData
    for(let detail of detailsObjects){
      if(detail.id === parseInt(urlId)){
        return <CharacterDetails  detailObj={detail}
              />
      }
    }

  }

  render() {
    const {totalData, inputValue} = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Header/>
              <Filter handleInputValue={this.handleInputValue}
                      inputValue={inputValue}
              />
              <CharacterList  totalData={totalData}
                              inputValue={inputValue}
              />
              <CharacterError/>
            <Footer/>
          </Route>
          <Route path='/character/:id' render={this.showDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
