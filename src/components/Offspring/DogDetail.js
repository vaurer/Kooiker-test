import React, { Component } from 'react';
import styles from './DogDetail.module.css';

class DogDetail extends Component {
    state = {}
    render() {
        return (
            <div className={styles.container} onClick={this.onClick}>
                <div className={styles.imageContainer} style={{ backgroundImage: `url(${this.props.image})` }}>
                </div>
                <div className={styles.dataContainer}>
                    <div><h1>{this.props.name}</h1></div>
                    <div>DogDetail   Parents: {this.props.parents}</div>
                    <div>DogDetail   Date of birth: {this.props.dob}</div>
                    <div>DogDetail   Siblings: {this.props.siblings}</div>
                </div>
            </div>

        );
    }
}

export default DogDetail;