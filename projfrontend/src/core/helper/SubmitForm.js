import React, { Component } from "react";
import axios from "axios";
class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      battles: [],
      isLoaded: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    console.log("A name was submitted: " + this.state.value);
    this.props.parentCallBack(this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label className="sr-only">Password</label>
          <input
            type="text"
            className="form-control"
            id="inputText"
            placeholder="King Name"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary mb-2"
          value="Submit"
          onClick={this.handleSubmit}
        ></input>
      </form>
    );
  }
}

export default SubmitForm;
