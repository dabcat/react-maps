import React, { Component } from "react";
import "./Home.scss";
import SearchBox from "../SearchBox/SearchBox";
import Button from "../Button/Button";

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
    this.syncStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  syncStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
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
  };

  handleRemoveRoute = indexToDelete => {
    const routeCopy = [...this.state.routes];
    const updatedRoutes = routeCopy.filter(
      (route, index) => index !== indexToDelete
    );
    this.setState({ routes: updatedRoutes });
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
    const { routes } = this.state;

    return (
      <div className="Home">
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
        <div className="Home__routes">
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
                    Remove
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
