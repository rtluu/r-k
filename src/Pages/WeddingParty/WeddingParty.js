import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/weddingparty');

const WeddingPartyStyled = styled.div`
    &.main{
        align-items: center;
        display: flex;
        flex-direction: column;
        position: relative;

        .intro{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 3rem 0;

            @media (max-width: 50rem) {
                max-width: 15rem;
            }

            .calendar{
                height: 64px;
                width: 64px;
            }

            p{
                font-style: italic;
            }
        }
    }
        
`;

const calendar = require("./images/calendar.svg");
const frisbee = require("./images/frisbee.svg");
const clipboard = require("./images/clipboard.svg");
const dinner = require("./images/dinner.svg");
const brideGroom = require("./images/bride-groom.svg");


const WeddingParty = () => (
    <WeddingPartyStyled className="main">
        <div className="intro">
            <img className="calendar" src={calendar} />
            <p>Here’s what to expect during our wedding weekend!</p>
        </div>

    </WeddingPartyStyled >
);


export defaultWeddingParty;