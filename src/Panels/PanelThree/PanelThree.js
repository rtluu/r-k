import React from "react";
import styled from "styled-components";

const taroSlush = require("./images/taro-slush.png");
const chance = require("./images/chance.png");
const taroMochi = require("./images/taro-mochi.png");
const penguins = require("./images/penguins.png");

const PanelThreeStyled = styled.div`
  .taroSlush {
    left: 5%;
    max-width: 16rem;
    min-width: 11rem;
    position: absolute;
    top: 3%;
    width: 30%;
  }

  .chance {
    max-width: 22rem;
    min-width: 15rem;
    position: absolute;
    right: 2%;
    top: 10%;
    width: 50%;
  }

  .taroMochi {
    right: 16%;
    max-width: 18rem;
    min-width: 14rem;
    position: absolute;
    top: 60%;
    width: 40%;
  }
  .penguins {
    bottom: 0;
    left: 0;
    max-width: 20rem;
    min-width: 13rem;
    position: absolute;
    width: 50%;
  }
`;

const PanelThree = () => (
  <PanelThreeStyled>
    <img className="taroSlush" src={taroSlush} />
    <img className="chance" src={chance} />
    <img className="taroMochi" src={taroMochi} />
    <img className="penguins" src={penguins} />
    <span>
      <h1>the little things we'll always remember.</h1>
    </span>
  </PanelThreeStyled>
);

export default PanelThree;
