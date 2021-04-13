import "./App.css";
import BreedingCardContainer from "./components/Offspring/BreedingCardContainer";
import React, { Component } from "react";
import DogDetail from "./components/Offspring/DogDetail";
import Constants from "./helper/Constants";
import Aboutus from "./components/Aboutus/Aboutus";
import getUserLocale from "get-user-locale";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
// import News from './components/News/News';
import Ivy from './components/Ivy/Ivy';
import { If, Else } from 'rc-if-else';
import * as ReactBootStrap from 'react-bootstrap';
import Contact from "./components/Contact/Contact";

import Welpen from "./components/Welpen/Welpen";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppies: [],
      breedings: [],
      showDetail: false,
      language: '',
      image:'',
      showApp: false,
      poppies:false
    }
  }

  togglePoppies = () => {
    this.setState(state => ({ poppies: !state.poppies }));
  };
  togglePoppiesNews = () => {
    this.setState(state => ({ poppies: false }));
  };

  componentDidMount() {
    let userLocale = getUserLocale();
    var res = userLocale.substring(0, 2);
    this.setState({
      language: res,
      showApp: true,
    });
    fetch(Constants.breeding)
      .then((response) => response.json())
      .then((data) => {
        let breedings = [];
        data.data.forEach((element) => {
          let breeding = {
            id: element.id,
            father: element.father.name,
            mother: element.mother.name,
            dateOfBirth: element.dateofbirth,
            description: element.description,
            image: element.image.data.thumbnails[7].url,
            parents: element.mother.name + " x " + element.father.name,
          };
          breedings.push(breeding);
        });
        this.setState({
          image: data.data[0].image.data.thumbnails[7].url,
          breedings: breedings,
        });
       
      });
  }

  onBreedingSelected = (id) => {
    alert("top App:" + id);
    this.setState({
      showDetail: true,
      actualBreeding: id,
    });
  };

  getBreedingContent = () => {
    if (this.state.showDetail) {
      return (
        <div>
          Detail{this.state.breedings[this.state.actualBreeding].name}
          <DogDetail />
        </div>
      );
    } else {
      return (
        <BreedingCardContainer
          onBreedingSelected={this.onBreedingSelected}
          breedings={this.state.breedings}
        />
      );
    }
  };

  render() {
    return (
      <If condition={!this.state.showApp} >
        {<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}
        <Else >
      <div className="App">
        <Navbar language={this.state.language} togglePoppiesNews={this.togglePoppiesNews}/>
        <Switch>
          <Route path="/" exact render={() => <Home language={this.state.language}/>} />
        </Switch>

        <Switch>
        <Route path='/offspring' exact render ={()=>
          <div className="center">
          <div className="doglist">
          <h1 className="mainHeader">Offspring</h1>
            {this.getBreedingContent()}
          </div>
        </div>}/>
        </Switch>

        <Switch>
          <Route path='/ivy' exact render ={()=><Ivy /> }/>
        </Switch>

        {/* <Switch>
          <Route path='/news' exact render ={()=><News picture={this.state.image} togglePoppies={this.togglePoppies} poppies={this.state.poppies}/> }/>
        </Switch> */}

        <Switch>
          <Route path='/puppys' exact render ={()=><Welpen togglePoppies={this.togglePoppies} poppies={this.state.poppies} language={this.state.language}/> }/>
        </Switch>

        <Switch>
        <Aboutus path='/aboutus' language={this.state.language}/>
        </Switch>
 
        <Switch>
          <Route path='/contact' exact render ={()=><Contact/> }/>
        </Switch>
 
        <Footer/>
      </div>
      </Else>
        </If>
    );
  }
}
