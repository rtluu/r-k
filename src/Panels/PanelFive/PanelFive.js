import React from "react";
import styled from "styled-components";

const handholding = require("./images/handholding.png");
const heart = require("./images/heart.png");
const rose = require("./images/rose.png");
const love1 = require("./images/love1.png");
const love2 = require("./images/love2.png");
const love3 = require("./images/love3.png");
const love4 = require("./images/love4.png");

const PanelFiveStyled = styled.div``;

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
