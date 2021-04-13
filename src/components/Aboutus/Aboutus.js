import React, { Component } from "react";
import Constants from "../../helper/Constants";
import styles from "./Aboutus.module.css";
import Car from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { GiJumpingDog } from "react-icons/gi";
import  Spinner from './../Spinner/Spinner'


class Aboutus extends Component {
  state = {
    photos: [],
    body: "",
    language: "fr",
    id: "",
    title: "",
    image: "",
    loaded: false,
    gallery:[]
  };

  componentDidMount() {
    fetch(Constants.aboutus)
      .then((resp) => resp.json())
      .then(
        (result) => {
          let translation = result.data[0].translations;
          translation.forEach((element) => {
            if (element.language === this.props.language) {
              this.setState({
                title: element.title,
                body: element.uebersetzung,
              });
            }
          });
          let gallery = [];
          result.data[0].gallery.forEach((element) => {
            let part = {
              key: element.directus_files_id.description,
              img: element.directus_files_id.data.thumbnails[7].url,
              thumbnail: element.directus_files_id.data.thumbnails[0].url,
              title: element.directus_files_id.description,
            };
            gallery.push(part);
          });
          this.setState({
            gallery: gallery,
            loaded: true,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  getAboutusContent = () => {
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
  };

  render() {
    if (!this.state.loaded) {
      // return <div style={{ textAlign: "center", color: 'rgb(167, 69, 39)' }}><GiJumpingDog size={'100vh'} /></div>;
      return(<Spinner/>)
    }
    if (this.state.loaded) {
      return (
        <div className={styles.container}>
          <div><h1 className={styles.mainHeader}>{this.state.title}</h1></div>
          <div className={styles.aboutUsCard}>
            <div className={styles.imageContainer}>
            <Car images={this.state.gallery} />
            </div>
            <div className={styles.dataContainer}>
              {this.getAboutusContent()}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Aboutus;
