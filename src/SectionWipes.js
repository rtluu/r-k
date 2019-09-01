import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

import PanelOne from "./Panels/PanelOne/PanelOne";
import PanelTwo from "./Panels/PanelTwo/PanelTwo";
import PanelThree from "./Panels/PanelThree/PanelThree";
import PanelFour from "./Panels/PanelFour/PanelFour";
import PanelFive from "./Panels/PanelFive/PanelFive";
import PanelSix from "./Panels/PanelSix/PanelSix";

const SectionWipesStyled = styled.div`
  overflow: hidden;

  .panel {
    height: 100vh;
    margin-bottom: 10rem;
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
      border: 2px solid #efa8b8;
      h1 {
        color: #efa8b8;
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

  .panel.purple {
    background-color: #8783d1;
    span {
      background-color: #8783d1;
      border: 2px solid #ffffff;
      h1 {
        color: #ffffff;
      }
    }
  }

  .panel.yellow {
    background-color: #f5e2c8;
    span {
      background-color: #f5e2c8;
      border: 2px solid #1d4e89;
      h1 {
        color: #1d4e89;
        margin: 0 0.5rem;
      }
    }
  }

  .panel.red {
    background-color: #aa4465;
    span {
      background-color: #aa4465;
      border: 2px solid #ffffff;
      h1 {
        color: #ffffff;
        margin: 0 0.5rem;
      }
    }
  }

  .panel.pink {
    background-color: #f7b2b7;
    span {
      background-color: #f7b2b7;
      border: 2px solid #373737;
      h1 {
        color: #373737;
        margin: 0 0.5rem;
      }
    }
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
        <div className="panel purple">
          <PanelThree />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel yellow">
          <PanelFour />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel red">
          <PanelFive />
        </div>
      </Scene>
      <Scene pin>
        <div className="panel pink">
          <PanelSix />
        </div>
      </Scene>
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
