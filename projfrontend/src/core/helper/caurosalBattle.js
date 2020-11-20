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
    return (
      <Carousel>
        {battles.map((battle) => (
          <Battlefield key={battle.name} value={battle} />
        ))}
      </Carousel>
    );
  }
}

export default SliderBattle;
