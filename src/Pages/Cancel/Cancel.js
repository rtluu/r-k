import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import CancelCarousel from './CancelCarousel';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/home');

const CancelStyled = styled.div`
    &.main{
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;

        .block{
            margin: 3.5rem 0;
            max-width: 36rem;
            width: 80%;
            @media (max-width: 50rem) {
                margin: 3rem 0;
                width: 90%;
            }

            p{
                text-align: left;
                margin: 2.25rem 0 0 0;
                @media (max-width: 50rem) {
                    margin: 1.5rem 1rem 0 1rem;
                }
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
    }
`;

const Cancel = () => (
    <CancelStyled className="main">
        <div className="block">
            <h3 className="h3-cursive">HowWeMet</h3>
            <h5 className="date">April 16, 2016</h5>
            <p>We met at an event where Kristina was the catering manager and I was the greenscreen photographer. Kristina will tell you that I pursued her the whole night, but the truth is she was doing everything in her power to get me to ask her out, including ‘pulling linens’ right by my gear while I was on my way out. I asked her to dinner and she played hard to get for months before I finally won her over.</p>
        </div>
        <div className="carousel">
            <CancelCarousel />
        </div>
    </CancelStyled >
);


export default Cancel;