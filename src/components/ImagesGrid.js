import React, { useState} from 'react';
//Grid layout for images;
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
//Customize the styles in the Grid layout;
import { makeStyles } from '@material-ui/core/styles';
// nodejs library to set properties for components
import PropTypes from "prop-types";

import Lightbox from 'react-image-lightbox';
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
const  {images,loading}=props;
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex,setPhotoIndex]=useState(0);
       
return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>

        {loading ? "":images.map((image,index) => (
          <GridListTile key={ image.id }>
            <img src={ image.urls.small } alt= { image.alt_description } onClick={()=>{
              setIsOpen(true);
              setPhotoIndex(index);
              }} />
            <GridListTileBar
              title= { image.alt_description }
              subtitle={<span>by: {image.user.name}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${image.alt_description}`} className={classes.icon} href={image.urls.full}>
                  <CloudDownloadIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))};
      </GridList>
      {isOpen && 
      (
      <Lightbox
        mainSrc={images[photoIndex].urls.regular}
        nextSrc={images[(photoIndex + 1) % images.length].urls.regular}
        prevSrc={images[(photoIndex + images.length - 1) % images.length].urls.regular}
        onCloseRequest={() =>setIsOpen(false)}
        onMovePrevRequest={() =>setPhotoIndex((photoIndex + images.length - 1) % images.length)}
        onMoveNextRequest={() =>
        {setPhotoIndex((photoIndex + 1) % images.length)}
        }
      />
    )}
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