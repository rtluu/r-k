// @flow
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    width: 100vw;
    text-align: center;
  }

  .panel span {
    position: relative;
    display: block;
    overflow: visible;
    top: 50%;
    font-size: 32px;
  }

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
    margin-bottom: 800px;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel blue">
          <span>What does love mean?</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise">
          <span>it's the moments together,</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel green">
          <span>it's the little things that we'll always remember.</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel bordeaux">
          <span>The great thing is - it only gets better,</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel blue">
          <span>which is why I'm honored to make this gesture,</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise">
          <span>in asking...</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel green">
          <span>will you marry me? 💍</span>
        </div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;

//What does love mean?
// It's the moments together,
// It's the little things that we'll always remember.
// The great thing is, it only gets better
// which is why I'm honored to make this gesture,

// in asking...
// will you marry me? 💍
