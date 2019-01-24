import React, { Component } from "react";
import { connect } from 'react-redux';
import "./Home.scss";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../Button/Button";

import { actionAddRoute, actionRemoveRoute, actionGetRoute } from './actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      origin: {},
      destination: {}
    };
  }

  componentDidMount() {
    this.setState({ routes: [this.props.dispatch(actionGetRoute())] });
  }

  handleAddRoute = () => {

    const newRoute = {
      origin: this.formatDirection(this.state.origin),
      destination: this.formatDirection(this.state.destination)
    };
    this.setState({
      routes: [...this.state.routes, newRoute],
      origin: {},
      destination: {}
    });
    this.props.dispatch(actionAddRoute(newRoute));
  };

  handleRemoveRoute = indexToDelete => {
    const routeCopy = [...this.state.routes];
    const updatedRoutes = routeCopy.filter(
      (route, index) => index !== indexToDelete
    );
    this.setState({ routes: updatedRoutes });
    this.props.dispatch(actionRemoveRoute(indexToDelete));
  };

  handleFromDirection = value => {
    this.setState({ origin: value });
  };

  handleToDirection = value => {
    this.setState({ destination: value });
  };

  formatDirection = value => {
    return {
      lat: value[0].geometry.location.lat(),
      lng: value[0].geometry.location.lng(),
      name: value[0].vicinity
    };
  };

  validateDirections = () => {
    return (
      Object.keys(this.state.origin).length === 0 ||
      Object.keys(this.state.destination).length === 0
    );
  };

  render() {
    const { routes } = this.props;

    return (
      <div className="Home">
        <h1 className="section__heading">Enter route</h1>
        <div className="Home__search">
          <SearchBox
            directionOutput={this.handleFromDirection}
            placeholder="Start"
          />
          <SearchBox
            directionOutput={this.handleToDirection}
            placeholder="End"
          />
          <Button
            classes={["Home__btn--submit"]}
            onClick={this.handleAddRoute}
            disabled={this.validateDirections()}
          >
            Submit
          </Button>
        </div>
        {routes.length > 0 && <div className="Home__routes">
          <h2 className="section__heading">Recent routes</h2>
          {routes.map((route, index) => {
            return (
              <div key={index} className="Home__routes-item">
                <div className="Home__routes-name">
                  <span className="Home__routes-name--id">#{index + 1}</span>
                  <span className="Home__routes-name--origin">
                    {route.origin.name}
                  </span>
                  <span className="Home__routes-name--destination">
                    {route.destination.name}
                  </span>
                </div>
                <div className="Home__routes-actions">
                  <Button
                    classes={["Home__btn--details"]}
                    isRouterLink
                    routerLink={{
                      pathname: "/route-details/",
                      state: route
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    classes={["Home__btn--remove"]}
                    onClick={() => this.handleRemoveRoute(index)}
                  >
                    X
                  </Button>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
    );
  }
}

const mapState = state => ({
  routes: state.routes
});

export default connect(mapState)(Home);
