import React, { Component } from "react";
import Constants from "../../../helper/Constants";
import ResponsiveGallery from 'react-responsive-gallery';

class NewsPuppies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images:[]
    };
  }

  componentDidMount() {
    fetch(Constants.offspring)
      .then((resp) => resp.json())
      .then((result) => {
        let images=[];
        result.data.forEach(element => {
          if(this.props.dob===element.dateofbirth.dateofbirth)
          // console.log('HELLO' + element.dateofbirth.dateofbirth)
        element.images.forEach(element => {
          images.push({ 
            "src" : element.directus_files_id.data.full_url,
        });
        });
        });
        

        this.setState({
          images:images,
        });
      });
  }

  render() {
    
    return (
      <div>
<ResponsiveGallery images={this.state.images} useLightBox={true}/>
        {/* <div>1ère semaine / 1st week / 1. Woche </div>
        <div>2ème semaine / 2nd week / 2. Woche </div>
        <div>3ème semaine / 3rd week / 3. Woche </div>
        <div>4ème semaine / 4th week / 4. Woche </div>
        <div>5ème semaine / 5th week / 5. Woche </div>
        <div>6ème semaine / 6th week / 6. Woche </div>
        <div>7ème semaine / 7th week / 7. Woche </div>
        <div>8ème semaine / 8th week / 8. Woche </div>
        <div>9ème semaine / 9th week / 9. Woche </div>
        <div>Au revoir! / Bye, bye! / Tschüss! </div> */}
      </div>
    );
  }
}
export default NewsPuppies;