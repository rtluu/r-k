import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/schedule');

const ScheduleStyled = styled.div`
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

        

        .schedule-block{
            display: grid;
            margin: 2rem 10% 5rem 10%;
            grid-template-columns: 50% 50%;
            position: relative;
            width: 100%;

            @media (max-width: 50rem) {
                grid-template-columns: 100%;
                margin: 0rem 10% 3rem 10%;
            }

            .separator{
                display: none;
                height: 2px;
                background: #EBEBEB;
                position: relative;
                margin-bottom: 5.5rem;
                left: 50%;
                transform: translateX(-50%);
                width: 20rem;
    
                @media (max-width: 50rem) {
                    display: block;
                }
            }

            .activity-block{
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 2rem;

                h1{
                    margin-bottom: 1.5rem;
                }
                h3{
                    margin-bottom: 1rem;
                }
            }

            .divider{
                background: #ffffff;
                height: 100%;
                position: absolute;
                left: 50%;
                width: 0.125rem;
                transform: translateX(-50%);

                @media (max-width: 50rem) {
                    display: none;
                }
            }

            .location-block{
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 2rem;
                margin: 3.5rem 0;

                @media (max-width: 50rem) {
                    margin: 2.5rem 0;
                }

                img{
                    margin-bottom: 1.5rem;
                }

                h3{
                    margin-bottom: 0.5rem;
                }

                button{
                    margin-top: 1.75rem;
                    padding: 1rem 7.5rem;
                
                    &:hover{
                        background: white;
                        color: #7C99A7;
                    }
                }
            }
        }
    }

    img{
        filter: invert(100%);
    }
        
`;

const calendar = require("./images/calendar.svg");
const frisbee = require("./images/frisbee.svg");
const clipboard = require("./images/clipboard.svg");
const dinner = require("./images/dinner.svg");
const brideGroom = require("./images/bride-groom.svg");


const Schedule = () => (
    <ScheduleStyled className="main">
        <div className="intro">
            <img className="calendar" src={calendar} />
            <p>Here’s what to expect during our wedding weekend!</p>
        </div>
        <div className="schedule-block">
            <div className="separator" />
            <div className="activity-block">
                <h1>Ultimate Frisbee</h1>
                <h3>SEPTEMBER, 10 2020</h3>
                <h4>6:00pm</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="frisbee" src={frisbee} />
                <h3>NATIONAL MALL</h3>
                <h3>7th & MADISON</h3>
                <h3>WASHINGTON, DC</h3>
                <button>MAP</button>
            </div>
        </div>

        <div className="schedule-block">
            <div className="separator" />
            <div className="activity-block">
                <h1>Wedding</h1>
                <h3>SEPTEMBER, 12 2020</h3>
                <h4>5:00pm</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="bride-groom" src={brideGroom} />
                <h3>CARNEGIE INSTITUTE FOR SCIENCE</h3>
                <h3>1530 P ST NW</h3>
                <h3>WASHINGTON, DC</h3>
                <button>MAP</button>
            </div>
        </div>
    </ScheduleStyled >
);


export default Schedule;