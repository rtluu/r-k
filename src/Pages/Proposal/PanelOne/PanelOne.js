import React from "react";
import styled from "styled-components";

const bouquet1 = require("./images/bouquet1.png");
const bouquet2 = require("./images/bouquet2.png");
const butterfly1 = require("./images/butterfly-blue.png");
const butterfly2 = require("./images/butterfly-yellow.png");

const PanelOneStyled = styled.div`
 

  .bouquet1 {
    left: 0;
    max-width: 24rem;
    min-width: 15rem;
    position: absolute;
    top: 0;
    width: 50%;
  }

  .bouquet2 {
    bottom: 0;
    max-width: 24rem;
    min-width: 15rem;
    position: absolute;
    right: 0;
    width: 50%;
  }

  .butterfly1 {
    left: 30%;
    max-width: 4.75rem;
    min-width: 3rem;
    position: absolute;
    top 75%;
    width: 10%;
  }

  .butterfly2 {
    left: 75%;
    max-width: 6rem;
    min-width: 4.25rem;
    position: absolute;
    top 25%;
    width: 12%;
  }
`;

const PanelOne = () => (
  <PanelOneStyled>
    <img className="bouquet1" src={bouquet1} />
    <img className="bouquet2" src={bouquet2} />
    <img className="butterfly1" src={butterfly1} />
    <img className="butterfly2" src={butterfly2} />
    <span>
      <h1>What does love mean?</h1>
    </span>
  </PanelOneStyled>
);

export default PanelOne;
