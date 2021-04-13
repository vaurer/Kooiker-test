import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Parents.module.css";
import ivyImg from "../Ivy/ivy.jpg";
import jetSetImg from "../Ivy/jetset.jpg";
import { GiJumpingDog } from "react-icons/gi";

class Parents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      dog: "",
      showGallery: "none",
      images: [],
      loaded: false,
    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result.data[0]);
        let ivy = result.data[0];
        let pedigree = result.data[0].pedigree.data.full_url;
        let images = [];
        result.data[0].images.forEach((element) => {
          images.push({
            src: element.directus_files_id.data.full_url,
          });
        });
        this.setState({
          images: images,
          dog: ivy,
          pedigree: pedigree,
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div style={{ textAlign: "center", color: "rgb(167, 69, 39)" }}>
          <GiJumpingDog size={"100vh"} />
        </div>
      );
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.mainHeader}>
              {this.state.dog.name} x Jet-Set
            </h1>
          </div>
          <div>
            <div className={styles.containerdog1}>
              <div className={styles.dogbox1}>
                <h3 className={styles.header}>
                  {this.state.dog.parent_full_name}
                </h3>
                <h4 className={styles.dob}>
                  {this.state.dog.parent_date_of_birth}
                </h4>
                <div className={styles.img}>
                  <img
                    className={styles.imgRight}
                    src={ivyImg}
                    alt={"card"}
                  ></img>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.state.dog.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.state.dog.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.state.dog.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.state.dog.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
                      <td>{this.state.dog.height}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.expositions}>
                  <p>{this.state.dog.expositions}</p>
                </div>
              </div>
              <div className={styles.dogbox2}>
                <h3 className={styles.header}>Déclic Jet-Set</h3>
                <h4 className={styles.dob}>24.04.2014</h4>
                <div className={styles.img}>
                  <img
                    className={styles.imgRight}
                    src={jetSetImg}
                    alt={"card"}
                  ></img>
                </div>
                <table>
                  <tbody>
                    <tr>
                      <td>Von Willebrand/ENM: </td>
                      <td>{this.state.dog.willebrand}</td>
                    </tr>
                    <tr>
                      <td>Luxation de la rotule: </td>
                      <td>{this.state.dog.petella}</td>
                    </tr>
                    <tr>
                      <td>Tares oculaires: </td>
                      <td>{this.state.dog.eyes}</td>
                    </tr>
                    <tr>
                      <td>Dentition: </td>
                      <td>{this.state.dog.dentures}</td>
                    </tr>
                    <tr>
                      <td>Taille: </td>
                      <td>{this.state.dog.height}</td>
                    </tr>
                  </tbody>
                </table>
                <div className={styles.expositions}>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Parents;



