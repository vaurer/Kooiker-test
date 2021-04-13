import React, { Component } from "react";
import NewsPuppies from "../News/NewsPuppies/NewsPuppies";
import Spinner from "./../Spinner/Spinner";
import DogsDOB from "./DogsDOB";
import styles from "./WelpenElement.module.css";

class WelpenElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      welpen: [],
      loaded: true,
      showParents: "none",
      // welpenImages:[],
      welpenImagesShow: "none",
      breedingShow: "none",
    };
  }
  parentsSwitch = (element) => {
    if (this.state.showParents === "none") {
      this.setState({
        showParents: "flex",
        welpenImagesShow: "none",
        breedingShow: "none",
      });
    } else {
      this.setState({
        showParents: "none",
        welpenImagesShow: "none",
        breedingShow: "none",
      });
    }
  };

  welpenSwitch = () => {
    if (this.state.welpenImagesShow === "none") {
      this.setState({
        showParents: "none",
        welpenImagesShow: "flex",
        breedingShow: "none",
      });
    } else {
      this.setState({
        welpenImagesShow: "none",
        showParents: "none",
        breedingShow: "none",
      });
    }
  };

  breedingSwitch = () => {
    if (this.state.breedingShow === "none") {
      this.setState({
        showParents: "none",
        welpenImagesShow: "none",
        breedingShow: "flex",
      });
    } else {
      this.setState({
        welpenImagesShow: "none",
        showParents: "none",
        breedingShow: "none",
      });
    }
  };
/* 
     getWelpenContent = () => {
    let tempdata = [];
    let key = 0;
    let x = this.state.body;
    x.split("\n").map(function (item) {
      let line = (
        <span key={key}>
          {item}
          <br />
        </span>
      );
      tempdata.push(line);
      return key++;
    });
    return tempdata;
  };  */

  elements = () => {
    let welpen = [];
    this.props.elements.forEach((element) => {
      if (this.props.language === "en") {
        /* this.setState({
          body: element.translations[0].uebersetzung,
        }); */
        let part = (
          <div key={element.id}>
            <div className={styles.welpenCard}>
              <div className={styles.dataContainer}>
                <h3 className={styles.header}>
                  {element.translations[0].title}
                </h3>
{/*                 <div>{this.getWelpenContent()}</div> */}

{/* {this.props.text.split('\n').map(function(item, key) {
  return (
    <span key={key}>
      {item}
      <br/>
    </span>
  )
})} */}


                {element.translations[0].uebersetzung}{" "}
                <div>
                  <button onClick={() => this.parentsSwitch(element)}>
                    The parents
                  </button>
                  <button onClick={() => this.welpenSwitch()}>
                    Week 1 to 9
                  </button>
                  <button onClick={() => this.breedingSwitch()}>
                    In the new home
                  </button>
                </div>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={element.foto.data.thumbnails[3].url}
                  alt={element.name}
                ></img>
              </div>
            </div>
            <div style={{ display: this.state.showParents }}>
              <div>
                <div className={styles.containerdog1}>
                  <div className={styles.dogbox1}>
                    <h3 className={styles.header}>
                      {element.mutter.parent_full_name}
                    </h3>
                    <h4 className={styles.dob}>
                      {element.mutter.parent_date_of_birth}
                    </h4>
                    <div className={styles.img}>
                      <img
                        className={styles.imgRight}
                        src={element.mutter.parent_image.data.full_url}
                        alt={element.mutter.name}
                      ></img>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Von Willebrand/ENM: </td>
                          <td>{element.mutter.willebrand}</td>
                        </tr>
                        <tr>
                          <td>Patella: </td>
                          <td>{element.mutter.petella}</td>
                        </tr>
                        <tr>
                          <td>Eyes: </td>
                          <td>{element.mutter.eyes}</td>
                        </tr>
                        <tr>
                          <td>Dentures: </td>
                          <td>{element.mutter.dentures}</td>
                        </tr>
                        <tr>
                          <td>Height: </td>
                          <td>{element.mutter.height}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.expositions}>
                      <p>{element.mutter.expositions}</p>
                    </div>
                  </div>
                  <div className={styles.dogbox2}>
                    <h3 className={styles.header}>
                      {element.vater.parent_full_name}
                    </h3>
                    <h4 className={styles.dob}>
                      {element.vater.parent_date_of_birth}
                    </h4>
                    <div className={styles.img}>
                      <img
                        className={styles.imgRight}
                        src={element.vater.parent_image.data.full_url}
                        alt={element.vater.name}
                      ></img>
                    </div>
                    <table>
                      <tbody>
                        <tr>
                          <td>Von Willebrand/ENM: </td>
                          <td>{element.vater.willebrand}</td>
                        </tr>
                        <tr>
                          <td>Patella: </td>
                          <td>{element.vater.petella}</td>
                        </tr>
                        <tr>
                          <td>Eyes: </td>
                          <td>{element.vater.eyes}</td>
                        </tr>
                        <tr>
                          <td>Dentures: </td>
                          <td>{element.vater.dentures}</td>
                        </tr>
                        <tr>
                          <td>Hight: </td>
                          <td>{element.vater.height}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.expositions}>
                      <p></p>
                    </div>
                  </div>
                </div>
                {/*                 <div className={styles.containerdog1}>
                  <div className={styles.dogbox1}>
                    <h3 className={styles.header}>
                      {element.mutter.parent_full_name}
                    </h3>
                    <img
                      src={element.mutter.parent_image.data.full_url}
                      alt={element.mutter.name}
                      width="300"
                      height="300"
                    />
                    <p>willebrand: {element.mutter.willebrand}</p>
                    <p>petella: {element.mutter.petella}</p>
                    <p>eyes: {element.mutter.eyes}</p>
                    <p>dentures: {element.mutter.dentures}</p>
                    <p>height: {element.mutter.height}</p>
                    <p>dob: {element.mutter.parent_date_of_birth}</p>
                    <p>expositures: {element.mutter.expositions}</p>
                  </div>
                  <div>
                    <h1>{element.vater.parent_full_name}</h1>
                    <img
                      src={element.vater.parent_image.data.full_url}
                      alt={element.mutter.name}
                      width="300"
                      height="300"
                    />
                    <p>willebrand: {element.vater.willebrand}</p>
                    <p>petella: {element.vater.petella}</p>
                    <p>eyes: {element.vater.eyes}</p>
                    <p>dentures: {element.vater.dentures}</p>
                    <p>height: {element.vater.height}</p>
                    <p>dob: {element.vater.parent_date_of_birth}</p>
                    <p>expositures: {element.vater.expositions}</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "de") {
        let part = (
          <div key={element.id}>
            <div>{element.translations[1].title}</div>
            <div>{element.translations[1].uebersetzung}</div>
            <img
              src={element.foto.data.thumbnails[3].url}
              alt={element.name}
            ></img>
            <div>
              <button onClick={() => this.parentsSwitch(element)}>
                Die Eltern
              </button>
              <button onClick={() => this.welpenSwitch()}>Woche 1 bis 9</button>
              <button onClick={() => this.breedingSwitch()}>
                Im neuen Zuhause
              </button>
              <div>
                <p></p>
              </div>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <div style={{ display: this.state.showParents }}>
              <div>
                <div className={styles.containerdog1}>
                  <div className={styles.dogbox1}>
                    <h3 className={styles.header}>
                      {element.mutter.parent_full_name}
                    </h3>
                    <img
                      src={element.mutter.parent_image.data.full_url}
                      alt={element.mutter.name}
                      width="300"
                      height="300"
                    />
                    <p>willebrand: {element.mutter.willebrand}</p>
                    <p>petella: {element.mutter.petella}</p>
                    <p>eyes: {element.mutter.eyes}</p>
                    <p>dentures: {element.mutter.dentures}</p>
                    <p>height: {element.mutter.height}</p>
                    <p>dob: {element.mutter.parent_date_of_birth}</p>
                    <p>expositures: {element.mutter.expositions}</p>
                  </div>
                  <div>
                    <h1>{element.vater.parent_full_name}</h1>
                    <img
                      src={element.vater.parent_image.data.full_url}
                      alt={element.mutter.name}
                      width="300"
                      height="300"
                    />
                    <p>willebrand: {element.vater.willebrand}</p>
                    <p>petella: {element.vater.petella}</p>
                    <p>eyes: {element.vater.eyes}</p>
                    <p>dentures: {element.vater.dentures}</p>
                    <p>height: {element.vater.height}</p>
                    <p>dob: {element.vater.parent_date_of_birth}</p>
                    <p>expositures: {element.vater.expositions}</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>
          </div>
        );
        welpen.push(part);
      } else if (this.props.language === "fr") {
        let part = (
          <div key={element.id}>
            <div>{element.translations[2].title}</div>
            <div>{element.translations[2].uebersetzung}</div>
            <img
              src={element.foto.data.thumbnails[3].url}
              alt={element.name}
            ></img>
            <div>
              <button onClick={() => this.parentsSwitch(element)}>
                Les parents
              </button>
              <button onClick={() => this.welpenSwitch()}>Semaine 1 à 9</button>
              <button onClick={() => this.breedingSwitch()}>
                Dans le nouveau foyer
              </button>
            </div>
            <div style={{ display: this.state.showParents }}>
              <div>
                <h1>{element.mutter.parent_full_name}</h1>
                <img
                  src={element.mutter.parent_image.data.full_url}
                  alt={element.mutter.name}
                  width="300"
                  height="300"
                />
                <p>willebrand: {element.mutter.willebrand}</p>
                <p>petella: {element.mutter.petella}</p>
                <p>eyes: {element.mutter.eyes}</p>
                <p>dentures: {element.mutter.dentures}</p>
                <p>height: {element.mutter.height}</p>
                <p>dob: {element.mutter.parent_date_of_birth}</p>
                <p>expositures: {element.mutter.expositions}</p>
              </div>
              <div>
                <h1>{element.vater.parent_full_name}</h1>
                <img
                  src={element.vater.parent_image.data.full_url}
                  alt={element.mutter.name}
                  width="300"
                  height="300"
                />
                <p>willebrand: {element.vater.willebrand}</p>
                <p>petella: {element.vater.petella}</p>
                <p>eyes: {element.vater.eyes}</p>
                <p>dentures: {element.vater.dentures}</p>
                <p>height: {element.vater.height}</p>
                <p>dob: {element.vater.parent_date_of_birth}</p>
                <p>expositures: {element.vater.expositions}</p>
              </div>
            </div>
            <div style={{ display: this.state.welpenImagesShow }}>
              <NewsPuppies dob={element.dob.dateofbirth} />
            </div>
            <div style={{ display: this.state.breedingShow }}>
              <DogsDOB dob={element.dob.dateofbirth} />
            </div>
          </div>
        );
        welpen.push(part);
      }
    });
    return welpen;
  };
  render() {
    if (!this.state.loaded) {
      return (
        <div>
          <Spinner />
        </div>
      );
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container}>
          <h1 className={styles.mainHeader}>Litters</h1>
          <div>{this.elements()}</div>
        </div>
      );
    }
  }
}

export default WelpenElement;
