import React from "react";
import styled from "styled-components";

const ring = require("./images/ring.png");
const yesno = require("./images/yesno.png");

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
    bottom: 20%;
    left: 50%;
    max-width: 16rem;
    min-width: 13rem;
    position: absolute;
    transform: translateX(-50%);
    width: 35%;
  }
`;

const PanelSix = () => (
  <PanelSixStyled>
    <img className="ring" src={ring} />
    <img className="yesno" src={yesno} />
    <span>
      <h1>Kristina Marie Garcia, will you marry me?</h1>
    </span>
  </PanelSixStyled>
);

export default PanelSix;
