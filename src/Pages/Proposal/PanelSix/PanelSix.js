import React, { Component } from "react";
import ReactGA from 'react-ga';
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

  span{
    overflow: hidden !important;
  }

  .yesno {
    bottom: 21%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 100%;

    &.is-yes{
      #yes{
        border: 1px solid #61bda6;
        background-color: #61bda6;
        color: white;
      }
    }

    button {
      background: white;
      border-color: #d9d9d9;
      font-size: 1.5rem;
      padding: 1rem 2rem;
      outline: none;
      height:70px;
      margin: 0;
      position: relative;

      &:focus {
        &#yes {
          border: 1px solid #61bda6;
          background-color: #61bda6;
          color: white;
        }

        &#no {
          border: 1px solid #e66d6e;
          background-color: #e66d6e;
          color: white;
        }
      }

      &:active {
        &#yes {
          border: 1px solid #61bda6;
          background-color: #61bda6;
          color: white;
        }
        &#no {
          border: 1px solid #e66d6e;
          background-color: #e66d6e;
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

      &.is-no{
        border: 1px solid #e66d6e;
        background-color: #e66d6e;
        color: white;
        }
      }
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
      isYes: false,
      isNo: false,
    };

    this.setNo = this.setNo.bind(this);
  }

  setLoading(value) {
    this.setState({ isLoading: value });
    this.setState({ isYes: true });
    this.setState({ isNo: false });

    ReactGA.event({
      category: 'YesNo',
      action: 'Answered Yes'
    });
  }

  setNo() {
    this.setState({ isNo: true });
    this.setState({ isYes: false });
    ReactGA.event({
      category: 'YesNo',
      action: 'Answered No'
    });
  }

  render() {
    const { isLoading, isYes, isNo } = this.state;

    var yes = {};
    if (this.state.isYes) {
      yes.class = 'yesno is-yes';
    } else {
      yes.class = 'yesno';
    }

    var no = {};
    if (this.state.isNo) {
      no.class = 'is-no';
    } else {
      no.class = '';
    }

    return (
      <PanelSixStyled>
        <img className="ring" src={ring} />
        <span>
          {isYes ? (
            <div>
              <h1>
                <b>#OurLuuBeginning</b>
              </h1>
            </div>
          ) : isNo ? (
            <img src="https://media2.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif?cid=790b76112f9a9a3716c657e42112e59527522ea561a1484a&amp;rid=giphy.gif" alt="sad face GIF" />
          ) : (
                <h1>
                  Kristina Marie Garcia, <b>Will you marry me?</b>
                </h1>
              )}
        </span>
        <div className={yes.class}>
          <ConfettiButton
            isYes={isYes}
            isLoading={isLoading}
            setLoading={this.setLoading}
            confettiConfig={config}
          />
          <button id="no" className={no.class} onClick={this.setNo}>{isNo ? "☠️" : "NO"}</button>
        </div>
      </PanelSixStyled>
    );
  }
}
