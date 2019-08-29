import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

import PanelOne from "./Panels/PanelOne/PanelOne";
import PanelTwo from "./Panels/PanelTwo/PanelTwo";

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    margin-bottom: 20rem;
    width: 100vw;
    text-align: center;
  }

  .panel span {
    align-items: center;
    display: flex;
    height: 8.75rem;
    justify-content: center;
    left: 50%;
    overflow: visible;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 17.5rem;

    h1 {
      font-size: 32px;
      font-weight: 400;
    }
  }

  .panel.white {
    background-color: #ffffff;
    span {
      background-color: #ffffff;
      border: 2px solid #d9c97c;
      h1 {
        color: #d9c97c;
      }
    }
  }

  .panel.blue {
    background-color: #1d4e89;
    span {
      background-color: #1d4e89;
      border: 2px solid #ffffff;
      h1 {
        color: #ffffff;
      }
    }
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
  }
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel white">
          <PanelOne />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel blue">
          <PanelTwo />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel green">
          <span>the little things we'll always remember.</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel bordeaux">
          <span>And as we grow it keeps getting better,</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel turqoise">
          <span>which is why I can't wait to make it forever</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel green">
          <span>Will you marry me? 💍</span>
        </div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
