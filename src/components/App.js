import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Reservation from './reservation-form/form'
import "../css/global.css";
class App extends Component {
  render() {
    return (
      <Reservation />
    );
  }
}

export default hot(module)(App);
