import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Battlefield from "./Battlefield";

class SliderBattle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battles: [],
      isLoaded: false,
      error: null,
    };
  }

  render() {
    const battles = this.props.battles;
    if (battles != undefined && battles.length > 0) {
      return (
        <Carousel>
          {battles.map((battle) => (
            <Battlefield key={battle.name} value={battle} />
          ))}
        </Carousel>
      );
    } else return <h1>Empty</h1>;
  }
}

export default SliderBattle;
