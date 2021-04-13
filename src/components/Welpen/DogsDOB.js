import React, { Component } from "react";
import Constants from "../../helper/Constants";
// import ResponsiveGallery from 'react-responsive-gallery';
class DogsDOB extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            puppies:[]
         }
    }
    componentDidMount() {
        fetch(Constants.smallDogs + this.props.dob)
            .then(response => response.json())

            .then(data => {
                console.log( data.data)
                let puppies = [];

              if(data.data[1]){
                  

                data.data.forEach(element => {
                    if (element.images[0].directus_files_id.data.full_url){
                    puppies.push(<div key={element.id}><p>{element.name}</p><img src={element.images[0].directus_files_id.data.full_url} alt={element.id} width="300" height="300"></img></div>);
                    }
                });
                this.setState({
                    puppies: puppies
                })
              }
            });
    }
    render() { 
        return ( <div>{this.state.puppies}</div> );
    }
}
 
export default DogsDOB;
//<img src={element.images[0].directus_files_id.data.full_url} alt={elementelement.id} width="300" height="300">{element.name}</img>