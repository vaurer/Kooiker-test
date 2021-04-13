import React, { Component } from 'react';
import styles from './OffspringCard.module.css';

class OffspringCard extends Component {
    onClick = () => {
        this.props.onClick(this.props.date);
        alert("offspringcard:" + this.props.date);
        //alert("click" + this.props.id)
    }
    render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${this.props.image})` }}>
                </div>
                <div className={styles.dataContainer}>
                    <div><h1>{this.props.name}</h1></div>
                    <div>{this.props.mother} x {this.props.father}</div>
                    <div>Desription: {this.props.description}</div>
                    <div>Date of birth: {this.props.dob}</div>
                    <div>Litter: {this.props.litter}</div>
                </div>
            </div>
        );
    }
}
export default OffspringCard;