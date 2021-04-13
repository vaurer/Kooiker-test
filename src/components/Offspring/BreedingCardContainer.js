import React, { Component } from 'react';
import BreedingCard from './BreedingCard';
import styles from './BreedingCardContainer.module.css';


class BreedingCardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actualDog: { "name": "unknown" },
            test: "hans"
        }
    }

    onDogSelected = (dog) => {

        let obj = {
            actualDog: dog,
/*             test: "sepp" */
        };
        this.setState(obj);
    }

    getBreedings = () => {
        let widgets = [];
        this.props.breedings.forEach(element => {
            widgets.push(<BreedingCard onClick={this.onDogSelected} key={element.id} breeding={element} />);
        });
        return widgets;
    }

/*     showActualDog = () => {
        if (this.state.actualDog.name !== "unknown") {
            return <p>Dog:{this.state.actualDog.name}</p>
        }
    } */

    render() {
        return (
            <div className={styles.container}>
                {this.getBreedings()}
{/*                 {this.showActualDog()} */}
            </div>
        );
    }
}

export default BreedingCardContainer;
