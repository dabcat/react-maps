import React, { Component } from "react";
import Button from "../Button/Button";
import "./RouteDetails.scss";
import { googleMapsSettings } from "../../constants/GoogleMapsSettings";
import { ErrorHandler } from '../../services/ErrorHandler';

const google = (window.google = window.google ? window.google : {});
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps(googleMapsSettings),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new google.maps.LatLng(this.props.location.state.origin),
          destination: new google.maps.LatLng(
            this.props.location.state.destination
          ),
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            ErrorHandler(`Directions returned ${result.status}`);
          }
        }
      );
    }
  })
)(props => {
  const renderText = () => {
    if (props && props.directions) {
      const { distance, duration } = props.directions.routes[0].legs[0];
      return (
        <div className="RouteDetails__text">
          {distance.text}. About {duration.text}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(props.location.state.origin)}
      >
        {props.directions && (
          <DirectionsRenderer directions={props.directions} />
        )}
      </GoogleMap>
      {renderText()}
    </>
  );
});

class RouteDetails extends Component {
  render() {
    const { destination, origin } = this.props.location.state;
    return (
      <div className="RouteDetails">
        <Button
          classes={["RouteDetails__btn"]}
          isRouterLink
          routerLink={{ pathname: "/" }}
        >
          Back
        </Button>
        <h1>
          {origin.name} - {destination.name}
        </h1>
        <MapWithADirectionsRenderer {...this.props} />
      </div>
    );
  }
}

export default RouteDetails;
