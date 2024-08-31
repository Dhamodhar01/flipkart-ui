import { Alert } from "bootstrap";
import React, { Component } from "react";

class parentcomponent extends Component() {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "patrent",
    };

    this.greetparent = this.greetparent.bind(this);
  }

  greetparent() {
    Alert(`hello this is ${this.state.parentName}`);
  }

  render() {
    return <div></div>;
  }
}

export default parent;
