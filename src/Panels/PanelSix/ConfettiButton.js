import React, { Component } from "react";
import Confetti from "react-dom-confetti";
import styled from "styled-components";

const ConfettiButtonStyled = styled.button`
  outline: none;
`;

const slowClick = setLoading => () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 200);
};

export default ({ confettiConfig, isLoading, setLoading }) => {
  return (
    <ConfettiButtonStyled
      className="button button-primary loading-button"
      id="yes"
      onClick={slowClick(setLoading)}
    >
      <Confetti
        className="loading-button__confetti"
        active={!isLoading}
        config={confettiConfig}
      />

      {isLoading ? "YAY!" : "YES"}
    </ConfettiButtonStyled>
  );
};
