import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from "unsplash-js";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoLightbox from './PhotoLightbox';
import ImagesGrid from './ImagesGrid';

//Grid Style for the home page main container
import { makeStyles } from '@material-ui/core/styles';
import {TextField } from "@material-ui/core";
// import Button from '@material-ui/core/Button';
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import Button from "./CustomButtons/Button";
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import CardHeader from "./Card/CardHeader";

//Fontawesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter,faGooglePlus } from '@fortawesome/free-brands-svg-icons';

import {ImageContext} from '../ImageContext';
// nodejs library to set properties for components
import PropTypes from "prop-types";



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

// At this stage use unslpash.js, so make an instance of Unsplash
const unsplash = new Unsplash({
    accessKey: "5OUK6ToN68rS7YXWjPhBhvqeo_Tf5qP5Pe-mANWZs_c",
});


const SearchInput = () => {
    //If query is empty then load 10 random images with keyword "new zealand"
    const [query, setquery] = useState("new zealand");
    const [pageNum,setPageNum]=useState(1);
    const [images, setImages] = useState([]);
    const [error,setError]=useState(false);
    const [hasMore,setHasMore]=useState(true);
    const [value,setValue]=useState('test context value');
    const [loading, setIsloading] = React.useState(false);
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const classes = useStyles();

    useEffect(() => {
    urlToGetImages(10);
  }, []);


    //Send keywords to find images
    const findImages = async(e) => {
        const qString = query.replace(/\s/g, '-').toLowerCase();
        e.preventDefault();
        unsplash.search.photos(qString,1, 10)
            .then(toJson)
            .then(json => {setImages([...json.results])});
    }

    /*THIS IS THE MAIN FUNCTION TO CALL API INCASE Unsplash IS NOT USED IN FUTURE */
    const urlToGetImages = (oneCount = 10) => {
        //Maybe 'api.domain.com'
        const urlBase = "https://api.unsplash.com";
        const string = query.replace(/\s/g, '-').toLowerCase();
        const accessKey = "5OUK6ToN68rS7YXWjPhBhvqeo_Tf5qP5Pe-mANWZs_c";
        setIsloading(true);
        setError(false);
        let cancel;
        axios({
            method:'GET',
            url:`${urlBase}/search/photos?query=${string}&page=${pageNum}&client_id=${accessKey}&count=${oneCount}`,
            params:{query:string,page:pageNum,client_id:accessKey,count:oneCount},
            cancelToken: new axios.CancelToken(c=>cancel=c)
        })
        .then(res =>{setImages([...images,...res.data.results]);
                    setIsloading(false);})
        .catch(e=>{
            if(axios.isCancel(e)) return;
            setError(true);
        })
        // return ()=>cancel();

           
    };





    return ( 
    <div>
    <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <Card className={classes[cardAnimaton]}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                  <form noValidate autoComplete="off"
        onSubmit = { findImages } >
        <TextField name = "query" id="outlined-basic" variant="outlined" placeholder = { `Try "Taupo" or "Waterfall New Zealand" ` } onChange = { e => setquery(e.target.value) }/>
        <Button 
        type = "submit"
        variant = "contained"
        color = "primary" size="lg">
        Search </Button> 
        <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <FontAwesomeIcon icon={faGooglePlus} />
                      </Button>
    </form> 

                  </CardHeader>
 
                  <CardBody>
                  {/* <ImageContext.Provider images={images} loading={loading}> */}
    <ImagesGrid images={images} loading={loading}   />
    {/* </ImageContext.Provider>   */}
                  </CardBody>
              </Card>
            </GridItem>
          </GridContainer>

        </div>
    </div>
    )
};



SearchInput.propTypes = {
    query:PropTypes.string,
    pageNum:PropTypes.number,
    images: PropTypes.array,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    isOpen: PropTypes.bool,
    classes: PropTypes.object
};

export default SearchInput;