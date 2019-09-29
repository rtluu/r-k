import React from "react";
import styled from "styled-components";

const townhouse = require("./images/townhouse.png");
const la = require("./images/la.png");
const goldenDoodle = require("./images/golden-doodle.png");

const PanelFourStyled = styled.div`
  .townhouse {
    left: 50%;
    max-width: 14rem;
    min-width: 12rem;
    position: absolute;
    top: 2%;
    transform: translateX(-50%);
    width: 40%;
  }

  .la {
    max-width: 15rem;
    min-width: 12rem;
    position: absolute;
    left: 7%;
    top: 55%;
    width: 33%;
  }

  .goldenDoodle {
    bottom: 0;
    right: 16%;
    max-width: 14rem;
    min-width: 10rem;
    position: absolute;
    width: 30%;
  }
`;

const PanelFour = () => (
  <PanelFourStyled>
    <img className="townhouse" src={townhouse} />
    <img className="la" src={la} />
    <img className="goldenDoodle" src={goldenDoodle} />
    <span>
      <h1>And as we grow it keeps getting better,</h1>
    </span>
  </PanelFourStyled>
);

export default PanelFour;
