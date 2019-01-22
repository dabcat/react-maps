import React from "react";
import { GoogleApiKey } from './GoogleApiKey';

export const googleMapsSettings = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GoogleApiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};
