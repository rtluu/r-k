import React from "react";
import styled from "styled-components";

const handholding = require("./images/handholding.png");
const heart = require("./images/heart.png");
const rose = require("./images/rose.png");
const love1 = require("./images/love1.png");
const love2 = require("./images/love2.png");
const love3 = require("./images/love3.png");
const love4 = require("./images/love4.png");

const PanelFiveStyled = styled.div`
  .handholding {
    left: 50%;
    max-width: 21.5rem;
    min-width: 18rem;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 50%;
  }

  .heart {
    left: 5%;
    max-width: 4rem;
    min-width: 1.75rem;
    position: absolute;
    top: 5%;
    width: 7%;
  }

  .rose {
    bottom: 3%;
    max-width: 7rem;
    min-width: 5rem;
    position: absolute;
    right: 5%;
    width: 15%;
  }

  .love1 {
    max-width: 12rem;
    min-width: 8rem;
    position: absolute;
    right: 5%;
    top: 12%;
    width: 20%;
  }

  .love2 {
    bottom: 20%;
    left: 8%;
    max-width: 10rem;
    min-width: 8rem;
    position: absolute;
    width: 20%;
  }

  .love3 {
    bottom: 25%;
    max-width: 10rem;
    min-width: 8rem;
    position: absolute;
    right: 15%;
    width: 20%;
  }

  .love4 {
    bottom: 5%;
    max-width: 10rem;
    min-width: 8rem;
    position: absolute;
    left: 40%;
    width: 20%;
  }
`;

const PanelFive = () => (
  <PanelFiveStyled>
    <img className="handholding" src={handholding} />
    <img className="heart" src={heart} />
    <img className="rose" src={rose} />
    <img className="love1" src={love1} />
    <img className="love2" src={love2} />
    <img className="love3" src={love3} />
    <img className="love4" src={love4} />
    <span>
      <h1>which is why I can't wait to make it forever.</h1>
    </span>
  </PanelFiveStyled>
);

export default PanelFive;
