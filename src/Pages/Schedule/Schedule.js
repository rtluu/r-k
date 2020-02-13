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
                    margin-bottom: 4rem;
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

                .attire{
                    margin-top: 1.5rem;

                    @media (max-width: 50rem) {
                       font-size: 0.875rem;
                    }
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

        .notice{
            font-style: italic;
            margin: 0.5rem 0 3rem 0;
            max-width: 80%;
        }
    }

    img{
        filter: invert(100%);
    }

    h1{
        &.size-down{
            @media (max-width: 50rem) {
               font-size: 4rem;
            }
        }
    }
        
`;

const calendar = require("./images/calendar.svg");
const frisbee = require("./images/frisbee.svg");
const clipboard = require("./images/clipboard.svg");
const dinner = require("./images/dinner.svg");
const drinks = require("./images/drinks.svg");
const brideGroom = require("./images/bride-groom.svg");


const Schedule = () => (
    <ScheduleStyled className="main">
        <div className="intro">
            <img className="calendar" src={calendar} />
            <p>Here’s what to expect during our wedding weekend!</p>
        </div>
        <div className="schedule-block">
            <div className="activity-block">
                <h1 className="size-down">UltimateFrisbee</h1>
                <h3>THURSDAY, SEPTEMBER 10, 2020</h3>
                <h4>6:30 pm</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="frisbee" src={frisbee} />
                <h3>NATIONAL MALL LAWN</h3>
                <h3>7th & MADISON</h3>
                <h3>WASHINGTON, DC</h3>
                <a href="https://goo.gl/maps/UmcXd6tPr4GXE8YS6" target="_blank"><button>MAP</button></a>
            </div>
        </div>

        <div className="schedule-block">
            <div className="separator" />
            <div className="activity-block">
                <h1>Wedding</h1>
                <h3>SATURDAY, SEPTEMBER 12, 2020</h3>
                <h4>5:30 pm</h4>
                <h4 className="attire">ATTIRE: BLACK TIE OPTIONAL</h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="bride-groom" src={brideGroom} />
                <h3>CARNEGIE INSTITUTION FOR SCIENCE</h3>
                <h3>1530 P ST NW</h3>
                <h3>WASHINGTON, DC</h3>
                <a href="https://goo.gl/maps/BDkbgJAd8X9PFSPM7" target="_blank"><button>MAP</button></a>
            </div>
        </div>
        <div className="notice">
            <h4>*Although we love your little ones, this is an adult only affair.</h4>
        </div>

        {/* <div className="schedule-block">
            <div className="separator" />
            <div className="activity-block">
                <h1 className="size-down">AfterParty</h1>
                <h3>SATURDAY, SEPTEMBER 12, 2020</h3>
                <h4>11:00 pm - 12:30 am </h4>
            </div>
            <div className="divider" />
            <div className="location-block">
                <img className="drinks" src={drinks} />
                <h3>MASON & ROOK ROOFTOP </h3>
                <h3>1430 RHODE ISLAND AVE NW</h3>
                <h3>WASHINGTON, DC</h3>
                <a href="https://goo.gl/maps/TQnbH8ekBpoXpD9U8" target="_blank"><button>MAP</button></a>
            </div>
        </div> */}
    </ScheduleStyled >
);


export default Schedule;