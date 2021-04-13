import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const classes = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    gridList: {
        width: 500,
        height: 450,
        margin: '20px',
    },
}

export default class Gallery extends Component {
   

    render() {
        return (
            <div className={classes.root}>
               <div><h2>{ this.props.name}</h2></div>
                <GridList cellHeight={450} styles={classes.gridList} cols={4}>
                    {this.props.images.map((tile) => (
                        <GridListTile key={tile.id} cols={tile.cols || 1}>
                            <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        );
    }
}