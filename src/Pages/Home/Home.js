import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

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
            margin: 3.5rem 0;
            max-width: 36rem;
            width: 80%;
            @media (max-width: 50rem) {
                margin: 3rem 0;
                width: 90%;
            }

            &.gallery{
                @media (max-width: 50rem) {
                    margin: 3rem 0 0 0;
                } 
            }


            h1{
                &.size-down{
                    @media (max-width: 50rem) {
                       font-size: 4rem;
                    }
                }
            }

            .wedding-date{
                font-size: 2.125rem;
                margin: 3.5rem 0 0 0;
                @media (max-width: 50rem) {
                    font-size: 1.875rem;
                    margin: 2rem 0 0 0;
                }
            }

            .date{
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
                @media (max-width: 50rem) {
                    font-size: 1.25rem;
                    margin-bottom: 0.25rem;
                }
            }

            .hashtag{
                display: none;
                font-size: 1.125rem;
                position: relative;
                @media (max-width: 50rem) {
                    display: block;
                    margin: 1.5rem 0 0.75rem 0;
                }
            }

            p{
                text-align: left;
                margin: 2.25rem 0 0 0;
                @media (max-width: 50rem) {
                    margin: 1.5rem 1rem 0 1rem;
                }
            }

            .link{
                color: #CCB5B5;
                margin-left: 0.375rem;
                font-weight: 600;
            }

            .proposal-pic{
                border-radius: 0.5rem;
                margin: 2rem 0;
                max-width: 24rem;
            }
        }

        .carousel{
            margin: 0rem auto 3rem auto;
            max-width: calc(36rem - 106px);
            width: 80%;

            @media (max-width: 50rem) {
                margin: 2.5rem auto 3rem auto;
                max-width: calc(100% - 106px);
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
            margin: 1rem 0 6rem 0;
            @media (max-width: 50rem) {
               margin: 0rem 0 4rem 0;
            }
        }
    }
`;

const homeHero = require("./images/home-hero.png");
const homeBottom = require("./images/home-bottom.png");

const Home = () => (
    <HomeStyled className="main">
        <img src={homeHero} />
        <div className="block">
            <h1>Kristina Garcia</h1>
            <h3>~ AND ~</h3>
            <h1>Ryan Luu</h1>
            <h3 className="wedding-date">September 12, 2020</h3>
            <h4 className="hashtag">#OURLUUBEGINNING</h4>
        </div>
        <span className="divider" />
        <div className="block">
            <h1 className="size-down">HowWeMet</h1>
            <h5 className="date">April 16, 2016</h5>
            <p>We met at an event where Kristina was the catering manager and I was the greenscreen photographer. Kristina will tell you that I pursued her the whole night, but the truth is she was doing everything in her power to get me to ask her out, including ‘pulling linens’ right by my gear while I was on my way out. I asked her to dinner and she played hard to get for months before I finally won her over.</p>
        </div>
        <div className="block gallery">
            <h1>The Proposal</h1>
            <h5 className="date">September 22, 2019</h5>
            <p>A trip to Longwood Gardens in Pennsylvania was the scene for our union. Hit the knee and said a poem that I recreated as a little memory
            <Link to="/proposal" className="link">here</Link>.</p>
        </div>
        <div className="carousel">
            <Carousel />
        </div>
        <h2 className="excited-message">We're excited to celebrate with you!</h2>
        <img src={homeBottom} />
    </HomeStyled >
);


export default Home;