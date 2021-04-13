import React, { Component } from "react";
import styles from "../NewsBreeding/NewsBreeding.module.css";
class NewsBreeding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1 className={styles.mainHeader}>
          Planification de la première portée
        </h1>
        <div>
                <div>Le CS est de 0,195 %</div>
                <div>L'indice d'implexe est de 96,77 %</div>
              </div>
      </div>
    );
  }
}

export default NewsBreeding;
