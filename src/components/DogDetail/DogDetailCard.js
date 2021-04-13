import React, { Component } from "react";
import styles from "./DogDetailCard.module.css";
import ivyImg from "../Ivy/ivy.jpg";

class DogDetailCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // parent_full_name: "",
      // parent_date_of_birth: "",
      // willebrand: "",
      // petella: "",
      // eyes: "",
      // dentures: "",
      // height: "",
      // pedigree: "",
      // images: [],
      // parent_image: "",
      // tests: "Tests:",
      show: "none",

      dog:[]

    };
  }
  // componentDidMount() {
  //   console.log(this.props.dog.pedigree.data.full_url)
  //   let temp = this.props.dog
  //   this.setState({
  //     dog:temp,
  //   });
  // }

  showPedigree = () => {
    if (this.state.show === "none") {
      this.setState({
        show: "flex",
      }
      );
    }else{
      this.setState({
        show: "none",
      }
      );
    }
  };


  render() {
    return (
      <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>{this.props.dog.name}</h1>
        </div>
        <div className={styles.detailCard}>
          <div className={styles.content}>
            <div className={styles.dataContainer}>
              <h3 className={styles.header}>
                {this.props.dog.parent_full_name}
              </h3>
              <h4 className={styles.born}>
                {this.props.dog.parent_date_of_birth}
              </h4>

              <div>
                <div>Tests:</div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.props.dog.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.props.dog.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.props.dog.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.props.dog.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
                      <td>{this.props.dog.height}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.expositions}>
                <p>{this.props.dog.expositions}</p>
              </div>
              <div>
                <button onClick={this.showPedigree}>Ahnentafel</button>
                
              </div>
              <div>
                <button onClick={() => { this.showGallery(); this.showPedigree() }}>Galerie</button>
                
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.imgRight} src={ivyImg} alt={"card"}></img>
            </div>
          </div>
        </div> {" "} 
        <img
                  style={{ display: this.state.show }}
                  src={this.props.pedigree}
                  alt={'Ivy'}
                />
      </div>
    );
  }
}

export default DogDetailCard;
