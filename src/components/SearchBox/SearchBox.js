import React, { Component } from "react";
import { googleMapsSettings } from "../../constants/GoogleMapsSettings";
import "./SearchBox.scss";

const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const PlacesWithStandaloneSearchBox = compose(
  withProps(googleMapsSettings),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          this.props.directionOutput(places);
          this.setState({
            places
          });
        }
      });
    }
  }),
  withScriptjs
)(props => (
  <div data-standalone-searchbox="" className="SearchBox">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder={props.placeholder}
        className="SearchBox__input"
      />
    </StandaloneSearchBox>
  </div>
));
class Home extends Component {
  render() {
    return <PlacesWithStandaloneSearchBox {...this.props} />;
  }
}

export default Home;
