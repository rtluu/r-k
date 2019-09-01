import React, { Component } from "react";
import styled from "styled-components";

import ConfettiButton from "./ConfettiButton.js";

const ring = require("./images/ring.png");

const PanelSixStyled = styled.div`
  .ring {
    left: 50%;
    max-width: 12rem;
    min-width: 10rem;
    position: absolute;
    top: 10%;
    transform: translateX(-50%);
    width: 25%;
  }

  .yesno {
    bottom: 21%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;

    button {
      background: white;
      border-color: #d9d9d9;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      outline: none;
      margin: 0;

      &:focus {
        &#yes {
          border: 1px solid #61bda6;
          background-color: #61bda6;
          color: white;
        }
      }

      &:active {
        &#yes {
          border: 1px solid #61bda6;
          background-color: #61bda6;
          color: white;
        }
      }
    }

    #yes {
      border-radius: 0.5rem 0 0 0.5rem;
      color: #61bda6;
    }
    #no {
      border-radius: 0 0.5rem 0.5rem 0;
      color: #e66d6e;
    }
  }
`;

const config = {
  angle: 85,
  spread: 60,
  startVelocity: 45,
  elementCount: 50,
  dragFriction: 0.1,
  duration: 3000,
  stagger: 0,
  width: "12px",
  height: "12px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

export default class PanelSix extends Component {
  constructor(props) {
    super(props);

    this.setLoading = this.setLoading.bind(this);

    this.state = {
      isLoading: false,
      isYes: false
    };
  }

  setLoading(value) {
    this.setState({ isLoading: value });
    this.setState({ isYes: true });
  }

  render() {
    const { isLoading, isYes } = this.state;
    return (
      <PanelSixStyled>
        <img className="ring" src={ring} />
        <span>
          {isYes ? (
            <h1>
              <b>#aLuuBeginning</b>
            </h1>
          ) : (
            <h1>
              Kristina Marie Garcia, <b>Will you marry me?</b>
            </h1>
          )}
        </span>
        <div className="yesno">
          <ConfettiButton
            isLoading={isLoading}
            setLoading={this.setLoading}
            confettiConfig={config}
          />
          <button id="no">NO</button>
        </div>
      </PanelSixStyled>
    );
  }
}
