import React, { Component } from "react";
import  Spinner from './../Spinner/Spinner'
import Constants from "../../helper/Constants";
import WelpenElement from "./WelpenElement";

class Welpen extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    componentDidMount() {
        fetch(Constants.welpen)
          .then((resp) => resp.json())
          .then((result) => {
            let elements = result.data;
            this.setState({
                elements:elements,
                loaded: true,
            });
          });
      }
    render() { 
        if (!this.state.loaded) {return (<div><Spinner/></div>)}
        if (this.state.loaded) {return (<WelpenElement elements={this.state.elements} language={this.props.language}/>)}
    }
}
 
export default Welpen;