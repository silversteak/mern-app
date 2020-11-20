import React, { Component } from "react";
import axios from "axios";

import { PORT } from "../../backend";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.countBattle = this.countBattle.bind(this);

    const style = {
      width: 18,
    };
  }

  countBattle = () => {
    axios.get(PORT + "/api/count").then((response) => {
      console.log(response.data);
      this.setState({
        isLoaded: true,
        value: response.data,
      });
    });
    console.log(this.state.value);
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6" color="white">
          <h3>{this.state.value}</h3>
        </div>
        <div className="col-md-6">
          <button
            onClick={this.countBattle}
            type="button"
            className="btn btn-primary"
          >
            Count
          </button>
        </div>
      </div>
    );
  }
}

export default Count;
