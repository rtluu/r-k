import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/home');

const HomeStyled = styled.div`
    &.main{
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;

        img{
            position: relative;
            width: 100%;
        }

        .block{
            margin: 5rem 0;
            max-width: 36rem;
            width: 80%;
            @media (max-width: 50rem) {
                margin: 3.5rem 0;
                width: 90%;
            }

            h3{
                margin: 2.5rem 0;
                @media (max-width: 50rem) {
                    margin: 2rem 0;
                }
            }

            h2{
                margin: 6.5rem 0 0 0;
                @media (max-width: 50rem) {
                    margin: 5rem 0 0 0;
                }
            }

            p{
                text-align: left;
                margin: 2.25rem 0 0 0;
                @media (max-width: 50rem) {
                    margin: 2.25rem 1rem 0 1rem;
                }
            }

            .link{
                color: #2080F2;
                margin-left: 0.375rem;
                font-weight: 600;
            }

            .proposal-pic{
                border-radius: 0.5rem;
                margin: 2rem 0;
                max-width: 24rem;
            }
        }

        .divider{
            background: rgb(235,235,235);
            height: 2px;
            margin: 1.25rem 0;
            max-width: 46rem;
            width: 80%;
            @media (max-width: 50rem) {
                margin: 1rem 0;
            }
        }

        .excited-message{
            margin: 2rem 0 9rem 0;
            @media (max-width: 50rem) {
               margin: 0rem 0 6rem 0;
            }
        }
    }
`;

const homeHero = require("./images/home-hero.png");
const proposalPic = require("./images/proposal-pic.png");
const homeBottom = require("./images/home-bottom.png");

const Home = () => (
    <HomeStyled className="main">
        <img src={homeHero} />
        <div className="block">
            <h1>Kristina Garcia</h1>
            <h3>AND</h3>
            <h1>Ryan Luu</h1>
            <h2>September 12, 2020</h2>
        </div>
        <span className="divider" />
        <div className="block">
            <h1>How We Met</h1>
            <p>We met at an event where Kristina was the catering manager and I was the greenscreen photographer. Kristina will tell you that I pursued her the whole night, but the truth is she was doing everything in her power to get me to ask her out, including ‘pulling linens’ right by my gear while I was on my way out. I asked her to dinner and she played hard to get for months before I finally won her over.</p>
        </div>
        <div className="block">
            <h1>The Proposal</h1>
            <p>A trip to Longwood Gardens in Pennsylvania was the scene for our union. Hit the knee and said a little poem that I recreated as a little memory
            <Link to="/proposal" className="link">here</Link>.</p>
            <img src={proposalPic} className="proposal-pic" />
        </div>
        <h2 className="excited-message">We're excited to celebrate with you!</h2>
        <img src={homeBottom} />
    </HomeStyled >
);


export default Home;