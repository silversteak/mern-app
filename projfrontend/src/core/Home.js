import React, { Component } from "react";
import "../styles.css";
import axios from "axios";
import "../App.css";
import Form from "./helper/SubmitForm";
import Battlefield from "./helper/Battlefield";
import SliderBattle from "./helper/caurosalBattle";
import Count from "./helper/Count";

import { PORT } from "../backend";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battles: [],
      isLoaded: false,
      error: null,
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  displayGrid(battles) {
    console.log(battles);
    return () => {
      this.setState({
        battles: battles,
      });
    };
  }

  handleSubmitForSearchKing = (childData) => {
    console.log("A name was submitted: " + childData);
    axios.get(PORT + "/api/search?king=" + childData).then((response) => {
      console.log(response.data);
      this.setState({
        isLoaded: true,
        battles: response.data,
        value: "",
      });
    });
    console.log(this.state.battles);
  };

  componentDidMount() {
    console.log(PORT);
    axios.get(PORT + "/api/list").then((response) => {
      console.log(response.data);
      this.setState({
        isLoaded: true,
        battles: response.data,
        value: "",
      });
    });
    console.log(this.state.battles);
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Form parentCallback={this.handleSubmitForSearchKing} />
            </div>
            <div className="col-md-4">
              <Count />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <SliderBattle battles={this.state.battles}></SliderBattle>
            </div>
          </div>
        </div>
      );
    }
    return <h3>Loading 60%</h3>;
  }
}

export default Home;
