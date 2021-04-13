import React, { Component } from 'react';
import OffspringCard from './OffspringCard';

class OffspringCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
getPuppies = () => {
    let widgets = [];
    this.props.puppies.forEach(element => {
        widgets.push(<OffspringCard id={element.id} name={element.name}/>)
    })
    return widgets;
}



render() {
    return (
        <div>
            {this.getPuppies()}
        </div>
         );
    }
}
 
export default OffspringCardContainer;