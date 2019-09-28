import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/home');

const HomeStyled = styled.div`
    &.main{
        display: flex;
        flex-direction: column;
        position: relative;

        img{
            position: relative;
            width: 100%;
        }
    }
`;

const homeHero = require("./images/home-hero.png");
const proposalPic = require("./images/proposal-pic.png");
const homeBottom = require("./images/home-bottom.png");

const Home = () => (
    <HomeStyled className="main">
        <img className="home-hero" src={homeHero} />
    </HomeStyled>
);


export default Home;