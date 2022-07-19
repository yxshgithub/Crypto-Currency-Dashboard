import React, { Component } from "react";

export default class Aboutcoin extends Component {
  render() {
    this.namee = this.props.coinname2;
    return (
      <>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            height: " 300px",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "space-around",
          }}
        >
          <a
            className="btn btn-primary"
            href={"https://en.wikipedia.org/wiki/" + this.props.coinName2}
            // eslint-disable-next-line
            target="_blank"
            rel="noreferrer"
            style={{
              justifyItems: "center",
              alignItems: "center",
              border: "3px Solid white",
              borderRadius: "25px",
              padding: "20px 20px 20px 20px",
              fontSize: "20px",
              width: "auto",
              height: "auto",
            }}
          >
            More info on{" "}
            <span style={{ color: "black" }}>{this.props.coinName2}</span>
          </a>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              // backgroundColor: "black",
              border: "3px Solid black",
              borderRadius: "25px",
              background: "none",
              justifyItems: "center",
              alignItems: "center",
              padding: "20px 20px 20px 20px",
              fontSize: "20px",
              width: "auto",
              height: "auto",
            }}
          >
            Latest news on{" "}
            <span style={{ color: "black" }}>{this.props.coinName2}</span>
          </button>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <p style={{ color: "white" }}>{this.props.coininfo}</p>
          </div>
        </div>
      </>
    );
  }
}
