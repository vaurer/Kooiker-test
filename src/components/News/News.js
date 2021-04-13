import React, { Component } from "react";
import styles from "./News.module.css";
import Constants from "../../helper/Constants";
import NewsPuppies from "./NewsPuppies/NewsPuppies";
import NewsBreeding from "./NewsBreeding/NewsBreeding";
//import { GiJumpingDog } from 'react-icons/fa/GiJumpingDog';
// import { GiJumpingDog } from "react-icons/gi";
import  Spinner from './../Spinner/Spinner'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loaded: false,
      // puppies: false,
      puppiesDOB: "",
      parents: false,
    };
  }
  showStates = () => {
    console.log("STATES: " + this.state.parents + "  " + this.props.poppies);
  };
  changeBreedingState = () => {
    this.setState({
      parents: true,
    });
  };
  puppies = () => {
    this.setState({
      puppies: true,
    });
  };
  componentDidMount() {
    fetch(Constants.news)
      .then((resp) => resp.json())
      .then((result) => {
        let news = [];
        result.data.forEach((element) => {
          if (element.topic === "3") {
            let part = (
              <div className={styles.newsCard} key={element.id}>
                <p>news</p>
                <div className={styles.content}>
                  {/* <div className={styles.imageContainer}><img className={styles.imgLeft} src={element.picture.data.thumbnails[7].url} alt={element.picture.title}></img></div> */}
                  <div className={styles.dataContainer}>
                    <h3 className={styles.header}>
                      {element.translations[0].title}
                    </h3>
                    {element.translations[0].uebersetzung}
                    {/* <div><button className={styles.buttonRight}>détails</button></div> */}
                  </div>
                </div>
              </div>
            );
            news.push(part);
          }
          if (element.topic === "1") {
            let part = (
              <div className={styles.newsCard} key={element.id}>
                <p>litter</p>
                <div className={styles.content}>
                  <div className={styles.imageContainer}>
                    <img
                      className={styles.imgLeft}
                      src={element.picture.data.thumbnails[7].url}
                      alt={element.picture.title}
                    ></img>
                  </div>
                  <div className={styles.dataContainer}>
                    <h3 className={styles.header}>
                      {element.translations[0].title}
                    </h3>
                    {element.translations[0].uebersetzung}
                    <div>
                      <button
                        className={styles.buttonRight}
                        onClick={() =>
                          this.setState(
                            { puppiesDOB: element.dob.dateofbirth },
                            this.props.togglePoppies
                          )
                        }
                      >
                        pictures
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
            news.push(part);
          }
          if (element.topic === "2") {
            console.log("BREEDING ");
            console.log(element);
            let part = (
              <div className={styles.newsCard} key={element.id}>
                <p>breeding</p>
                <div className={styles.content}>
                  <h1>{element.breeding_dog_mother.name}</h1> +{" "}
                  <h1>{element.breeding_dog_father.name}</h1>
                  {/* <div className={styles.imageContainer}><img className={styles.imgLeft} src={element.breeding_dog_mother.parent_image.data.thumbnails[7].url} alt={element.breeding_dog_mother.images[0].directus_files_id.title}></img></div> */}
                  <div className={styles.dataContainer}></div>
                </div>
                {/* <div ><img className={styles.imgRight} src={element.breeding_dog_father.parent_image.data.thumbnails[7].url} alt={element.breeding_dog_father.images[0].directus_files_id.title}></img></div> */}
                <div>
                  <button
                    className={styles.buttonRight}
                    onClick={this.changeBreedingState}
                  >
                    details
                  </button>
                </div>
              </div>
            );
            news.push(part);
          }
        });
        this.setState({
          news: news,
          loaded: true,
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      // return (
      //   <div style={{ textAlign: "center", color: "rgb(167, 69, 39)" }}>
      //     <GiJumpingDog size={"100vh"} />
      //   </div>
      // );
      return(<Spinner/>)
    }
    
    if (this.state.loaded && !this.props.poppies && !this.state.parents) {
      return (
        <div className={styles.container}>
        <div>
          <h1 className={styles.mainHeader}>Actualités</h1>
        </div>
      
        
        {this.state.news}</div>
      );
        

    }
    if (this.state.loaded && this.props.poppies && !this.state.parents) {
      return (
        <div>
          <NewsPuppies puppiesDOB={this.state.puppiesDOB} />
        </div>
      );
    }
    if (this.state.loaded && this.state.parents && !this.props.poppies) {
      return (
        <div>
          <NewsBreeding />
        </div>
      );
    }
  }
  
}

export default News;

