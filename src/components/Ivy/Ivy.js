import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Ivy.module.css";
import ivyImg from "../Ivy/ivy.jpg";
import ResponsiveGallery from "react-responsive-gallery";
// import { GiJumpingDog } from "react-icons/gi";
import  Spinner from './../Spinner/Spinner'

class Ivy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      dog: "",
      showGallery: "none",
      showExpositions: 'none',
      images: [],
      loaded: false,
      expositions:[]
    };
  }
  componentDidMount() {
    fetch(Constants.ivy)
      .then((resp) => resp.json())
      .then((result) => {
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
      fetch(Constants.expositions)
      .then((resp) => resp.json())
      .then((result) => {
        let expositions = result.data[0];
        this.setState({
          expositions: expositions,
        });
      });
  }

  showPedigree = () => {
    if (this.state.show === "none") {
      this.setState({
        show: "flex",
        showGallery: "none",
        showExpositions: "none",
      });
    } else {
      this.setState({
        show: "none",
        showGallery: "none",
        showExpositions: "none",
      });
    }
  };

  showImages = () => {
    if (this.state.showGallery === "none") {
      this.setState({
        showGallery: "flex",
        show: "none",
        showExpositions: "none",
      });
    } else {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "none",
      });
    }
  };

  showExpositions = () => {
    if (this.state.showExpositions === "none") {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "flex",
      });
    } else {
      this.setState({
        showGallery: "none",
        show: "none",
        showExpositions: "none",
      });
    }
  };


  render() {
    if (!this.state.loaded) {
      // return (
      //   <div style={{ textAlign: "center", color: "rgb(167, 69, 39)" }}>
      //     <GiJumpingDog size={"100vh"} />
      //   </div>
      // );
      return(<Spinner/>)
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container}>
          <div>
            <h1 className={styles.mainHeader}>{this.state.dog.name}</h1>
          </div>
          <div>
            <div className={styles.card}>
              <div className={styles.content}>
                <div>
                  <h3 className={styles.header}>
                    {this.state.dog.parent_full_name}
                  </h3>
                  <h4 className={styles.born}>
                    {this.state.dog.parent_date_of_birth}
                  </h4>
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
              </div>

              <div className={styles.media}>
                <img
                  className={styles.imgRight}
                  src={ivyImg}
                  alt={"card"}
                ></img>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <p className={styles.mainText}>
              Even though we had dogs (Leonberger and Tervueren) and two cats, I
              had a growing feeling that I needed a new task. I’m retired and I
              have always been very fond of dogs. Since we have plenty of space
              and time I decided to start breeding them. I wanted it to be a
              special breed, one that was not too common. After some
              investigation I came upon the Nederlandse Kooikerhondje.
              Character, appearance and size of this breed was immediately
              appealing to me. Since my husband agreed to fully support me the
              way forward was clear.
            </p>
            <p className={styles.mainText}>
              After some efforts I discovered the breeding site of Beate van
              Schelve/Wolfgang Brüner which was very attractive in all respects.
              We contacted the owners and after giving them some insight into
              our personal situation and living conditions we were added to the
              waiting list. Finally, after one year we were taken into account
              for the I-litter. At the beginning of Juli 2017 a good friend of
              mine and I drove 14 hours to pick up the puppy. The drive was long
              and quite tiring but it was definitely worth it. We are all -
              people as well as animials - very happy with our new family
              member.
            </p>
          </div>

          <div>
                <button onClick={this.showPedigree}>Ahnentafel</button>
         
                <button onClick={this.showImages}>Galerie</button>
        
                <button onClick={this.showExpositions}>Ausstellungen</button>
                
              </div>

              <img
          style={{ display: this.state.show }}
          src={this.state.pedigree}
          alt={"Ivy"} onClick={this.showPedigree}
        />
        <div style={{ display: this.state.showGallery }}><ResponsiveGallery images={this.state.images} useLightBox={true}/></div>
        <div style={{ display: this.state.showExpositions }}>{this.state.expositions.text}</div>
        <div style={{display:'flex', flexWrap: 'wrap'}}>
        <img
          style={{ display: this.state.showExpositions }}
          src={this.state.expositions.certificates[0].directus_files_id.data.thumbnails[2].url}
          alt={this.state.expositions.certificates[0].directus_files_id.title}
          width="300" height="300"
        />
        <img
          style={{ display: this.state.showExpositions }}
          src={this.state.expositions.certificates[1].directus_files_id.data.thumbnails[2].url}
          alt={this.state.expositions.certificates[1].directus_files_id.title}
          width="300" height="300"
        />
        <img
          style={{ display: this.state.showExpositions }}
          src={this.state.expositions.certificates[2].directus_files_id.data.thumbnails[2].url}
          alt={this.state.expositions.certificates[2].directus_files_id.title}
          width="300" height="300"
        /></div>

        </div>
      );
    }
  }
}
export default Ivy;
