import React from 'react';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "./Grid/GridContainer.js";
import styles from "../assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

const Loading = () => {
    const classes = useStyles();
    return (
      <div className={classes.container} justify="center" >
        <GridContainer justify="center" className={classes.textCenter} >
            <h2>
             <img src={"https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"} alt="Loading..."/></h2>
        </GridContainer>
      </div>
    )
}

export default Loading;