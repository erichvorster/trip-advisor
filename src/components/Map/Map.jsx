import React from 'react'
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from "./style";

//We import from /lab as the feature is still in development

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates ={ lat:0, lng:0}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyAMfWFadxWGpon2umcLmxk_Fjl5erY8OjM'}} 
        defaultCenter={coordinates} 
        center={coordinates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        options={''}
        onChange={''}
        onChildClick={''}>



      </GoogleMapReact>
    </div>
  )
}

export default Map