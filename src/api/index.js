import axios from "axios";

import { ErrorOutlineSharp } from "@material-ui/icons";
import React from "react";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "1238215840msh86bee828410a6fep1520e3jsnbd184877cf3e",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
