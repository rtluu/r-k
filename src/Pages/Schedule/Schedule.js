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
            opacity: 0.4;
            margin: 3rem 0;

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

            .activity-block{
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;

                h1{
                    margin-bottom: 1.5rem;
                }
                h3{
                    margin-bottom: 1rem;
                }
            }

            .divider{
                background: #EBEBEB;
                height: 100%;
                position: absolute;
                left: 50%;
                width: 0.25rem;
                transform: translateX(-50%);
            }

            .location-block{
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 3.5rem 0;

                img{
                    margin-bottom: 1.5rem;
                }

                h3{
                    margin-bottom: 0.5rem;
                }

                button{
                    background: none;
                    border: 0.125rem solid black;
                    cursor: pointer;
                    margin-top: 1.75rem;
                    padding: 1rem 7.5rem;
                    transition: all 0.1s;

                    &:hover{
                        background: black;
                        color: white;
                    }
                }
            }
        }
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
            <div className="activity-block">
                <h1>Rehearsal</h1>
                <h3>SEPTEMBER, 11 2020</h3>
                <h4>TBD</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="clipboard" src={clipboard} />
                <h3>CARNEGIE INSTITUTE FOR SCIENCE</h3>
                <h3>1530 P ST NW</h3>
                <h3>WASHINGTON, DC</h3>
                <button>MAP</button>
            </div>
        </div>

        <div className="schedule-block">
            <div className="activity-block">
                <h1>Rehearsal Dinner</h1>
                <h3>SEPTEMBER, 11 2020</h3>
                <h4>TBD</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="dinner" src={dinner} />
                <h3>APPLEBEE'S WASHINGTON DC</h3>
                <h3>950 MASON STREET</h3>
                <h3>WASHINGTON, DC</h3>
                <button>MAP</button>
            </div>
        </div>

        <div className="schedule-block">
            <div className="activity-block">
                <h1>Wedding</h1>
                <h3>SEPTEMBER, 12 2020</h3>
                <h4>TBD</h4>
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