import React from "react";

export const apiKey = "AIzaSyAVndFm8pJ-IoF1ZTBOLwC1gcA0N4v22X4";
export const googleMapsSettings = {
  googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `400px` }} />,
  mapElement: <div style={{ height: `100%` }} />
};
