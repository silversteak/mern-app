import React, { Component } from "react";
import King1 from "../img/1.jpg";
import King2 from "../img/2.jpg";
class Battlefield extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      name,
      attacker_king,
      defender_king,
      attacker_size,
      defender_size,
      location,
    } = this.props.value;

    const style = {
      maxHeight: 500,
      maxWidth: 500,
      position: "relative",
    };
    const battleStyle = {
      position: "absolute",
      top: 10,
      left: 30,
      right: 0,
      color: "white",
    };

    const defenderStyle = {
      position: "absolute",
      top: 10,
      left: 30,
      right: 0,
      color: "black",
    };

    return (
      <div className="container body-content">
        <div className="container">
          <div className="row justify-content-center" position="absolute">
            <h1>{name}</h1>
          </div>
          <div className="row justify-content-start">
            <div className="col-sm-6">
              <div>
                <img width="100%" height="100%" style={style} src={King1} />
                <div style={battleStyle}>
                  <h3>{defender_king}</h3>
                  <h3>{defender_size}</h3>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div>
                <img width="100%" height="100%" style={style} src={King2} />
                <div style={defenderStyle}>
                  <h3>{attacker_king}</h3>
                  <h3>{attacker_size}</h3>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row justify-content-start">
            <label>SNOW</label>
          </div>
          <div className="row justify-content-end">
            <button className="btn btn-primary">START FIGHT</button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Battlefield;
