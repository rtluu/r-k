import React from "react";
import styled from "styled-components";

const couple1 = require("./images/couple1.png");
const couple2 = require("./images/couple2.png");
const couple3 = require("./images/couple3.png");

const PanelTwoStyled = styled.div`
  .couple1 {
    left: 0;
    max-width: 24rem;
    min-width: 15rem;
    position: absolute;
    top: 0;
    width: 50%;
  }

  .couple2 {
    max-width: 22rem;
    min-width: 14rem;
    position: absolute;
    right: 0;
    top: 15%;
    width: 50%;
  }

  .couple3 {
    left: 50%;
    max-width: 12rem;
    min-width: 10rem;
    position: absolute;
    top: 62%;
    transform: translateX(-50%);
    width: 30%;
  }
`;

const PanelTwo = () => (
  <PanelTwoStyled>
    <img className="couple2" src={couple2} />
    <img className="couple1" src={couple1} />
    <img className="couple3" src={couple3} />
    <span>
      <h1>it's the moments together</h1>
    </span>
  </PanelTwoStyled>
);

export default PanelTwo;
