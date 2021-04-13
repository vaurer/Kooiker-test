import React, { Component } from 'react';
import styles from './BreedingCard.module.css';
/* import Gallery from '../Gallery/Gallery'; */
import Constants from '../../helper/Constants';
// import Car from "../Aboutus/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ResponsiveGallery from 'react-responsive-gallery';

class BreedingCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            puppies: [],
            showGallery: false,
            tileData: [],
            actualDog: '',
            showSubNav: false,
            images:[],
        }
    }

    componentDidMount() {
        fetch(Constants.dogs + this.props.breeding.id)
            .then(response => response.json())
            .then(data => {
                let puppies = [];
                data.data.forEach(element => {
                    let puppy = {
                        id: element.id,
                        name: element.name,
                        dateOfBirth: element.date_of_birth,
                    }
                    puppies.push(puppy);
                });
                this.setState({
                    puppies: puppies
                })
            });
    }

    onDogSelected = (dog) => {
        this.setState({
            showGallery: true,
            actualDog: dog,
            showSubNav: true

        })
        this.loadImagesOfDog(dog)
        this.props.onClick(dog);  
    }

    getPuppies = () => {
        let widgets = [];
        this.state.puppies.forEach(element => {
            widgets.push(<li onClick={() => { this.onDogSelected(element) }} key={element.id} > {element.name}</li>);
        });
        return widgets;
    }

    closeGallery = () => {
        this.setState({
            showGallery: false,
            showSubNav: false
        })
    }

    switch=()=>{
        let x =!this.state.showSubNav
        let y =!this.state.showGallery
        this.setState({
            showGallery: y,
            showSubNav: x
        })
    }
    getPuppiesNav = () => {
        let widgets = [];
        this.state.puppies.forEach(element => {
            widgets.push(< button onClick={() => { this.onDogSelected(element) }} key={element.id} >{element.name}</button>);
        });
        widgets.push(<button key={'50000'} onClick={() => { this.closeGallery() }}>X</button>);
        return widgets;
    }

    loadImagesOfDog(dog) {
        var id = dog.id;
        fetch('https://api.kooiker-fr.com/kooiker/items/dogs?filter[id][eq]=' + id + '&fields=id,images.directus_files_id.private_hash')
            .then(response => response.json())
            .then(data => {
                let tileData = [];
                let images =[];

                let index = 0;
                data.data[0].images.forEach(element => {
                    let url = "https://api.kooiker-fr.com/kooiker/assets/" + element.directus_files_id.private_hash + "?key=directus-medium-contain"
                    let cols = 1;
                    if (index % 3 === 0) {
                        cols = 1;
                    }
                    let tile = {
                        id: index,
                        img: url,
                        title: "empty",
                        cols: cols
                    }
                    images.push({ "src" : url});
                    tileData.push(tile);
                    index++;
                });

                this.setState({
                    images:images,
                    tileData: tileData
                })

            });
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.containerCard} onClick={() => {  this.onDogSelected(this.state.puppies[0]); this.switch() }}>
                    <div className={styles.imageContainer} /* style={{ backgroundImage: `url(${this.props.breeding.image})` }} */>
                    <img src={this.props.breeding.image} alt="bild"></img>
                    </div>
                    <div className={styles.dataContainer}>
                        <div><h3 className={styles.header}>{this.props.breeding.parents}</h3></div>
                        <ul>
                            {this.getPuppies()}
                        </ul>
                    </div>
                </div>
                <div>
                    {this.state.showSubNav ? <ul className={styles.subnav}>{this.getPuppiesNav()}</ul> : ""}
                    {/* {this.state.showGallery ? <Gallery name={this.state.actualDog.name} images={this.state.tileData} /> : ""}</div> */}
                   {/* {this.state.showGallery ? <div><Car images={this.state.tileData} /></div> : ""}</div> */}
                   {this.state.showGallery ? <div><ResponsiveGallery images={this.state.images} useLightBox={true}/></div> : ""}</div>
            </div>
        );
    }
}

export default BreedingCard;