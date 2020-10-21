import React, { useState, useRef ,useContext} from 'react';
//Grid layout for images;
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//Customize the styles in the Grid layout;
import { makeStyles } from '@material-ui/core/styles';
// nodejs library to set properties for components
import PropTypes from "prop-types";

import {ImageContext} from '../ImageContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: "1000px",
    height: "100vh",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.1em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }
}));





const ImagesGrid=(props)=>{
// const {images,loading}=useContext(ImageContext);
const  {images,loading}=props;
// console.log(images);
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
       
return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {loading ? "":images.map((image) => (
          <GridListTile key={ image.id }>
            <img src={ image.urls.small } alt= { image.alt_description } onClick={() => {setIsOpen(true)}} />
            <GridListTileBar
              title= { image.alt_description }
              subtitle={<span>by: {image.user.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${image.alt_description}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))};
      </GridList>
    </div>
)
   }

   ImagesGrid.propTypes = {
    images: PropTypes.array,
    loading: PropTypes.bool,
    isOpen: PropTypes.bool,
    classes: PropTypes.object
};


export default ImagesGrid;