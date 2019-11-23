import React from "react";
import ReactGA from 'react-ga';
import styled from "styled-components";
import { Link } from 'react-router-dom';

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/accomodations');

const AccomodationsStyled = styled.div`
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

            .image-holder{
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: center;

                img{
                    margin: 0 1.5rem;
                    filter: invert(100%);
                }
            }
        }

        .accomodation-block{
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            margin: 1rem 0 4rem 0;
            @media (max-width: 50rem) {
                margin: 1rem 10% 4rem 10%;
            }

            .hotel-block{
                display: grid;
                grid-template-columns: 50% 50%;
                margin: 4rem 0 2rem 0;
                position: relative;
                width: 100%;

                @media (max-width: 50rem) {
                    grid-template-columns: 100%;
                    margin: 0rem 10% 0rem 10%;
                }

                .hotel-option{
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 2rem 3em;

                    button{
                        margin: 1.75rem 0;
                        padding: 1rem 7.5rem;
                    
                        &:hover{
                            background: white;
                            color: #7C99A7;
                        }
                    }

                    .img-holder{
                        height: 0;
                        margin-bottom: 1.5rem;
                        padding-bottom: 66.66%;
                        position: relative;
                        width: 100%;

                        @media (max-width: 50rem) {
                            
                        }

                        img{
                            bottom: 0px;
                            left: 0px;
                            position: absolute;
                            right: 0px;
                            top: 0px;
                            width: 100%;
                        }
                    }
                    
                }
            }
            

            .skyline{
                margin: 0 0 3rem 0;
                max-width: 35rem;
                width: 100%;
                filter: invert(100%);
                @media (max-width: 50rem) {
                    width: calc(100% - 4rem);
                }
            }



            h3{
                margin-bottom: 0.375rem;

                @media (max-width: 64rem) {
                    margin-bottom: 0.375rem;
                    font-size: 1.5rem;
                }
            }

            h4{
                margin-bottom: 0.25rem;

                @media (max-width: 64rem) {
                    margin-bottom: 0.1875rem;
                    font-size: 1.25rem;
                }
            }

            p{
                text-align: center;
                margin: 2.5rem 0 0 0;
                max-width: 35rem;
                @media (max-width: 50rem) {
                    margin: 1.5rem 3rem 0 3rem;
                }
            }

            .link{
                color: #CCB5B5;
                margin-left: 0.375rem;
                font-weight: 600;
            }
        }
        .separator{
            height: 2px;
            background: #EBEBEB;
            position: relative;
            margin: 1rem 0 4rem 0;
            max-width: 35rem;
            width: 80%;
        }
    }
        
`;

const hotel = require("./images/hotel-front.svg");
const plane = require("./images/airplane.svg");
const mason = require("./images/mason.png");
const madison = require("./images/madison.png");
const skyline = require("./images/skyline.svg");


const Accomodations = () => (
    <AccomodationsStyled className="main">
        <div className="intro">
            <div className="image-holder">
                <img className="hotel" src={hotel} />
                <img className="plane" src={plane} />
            </div>
            <p>Some notes on getting here and booking your stay.</p>
        </div>
        <div className="accomodation-block">
            <h1>Travel</h1>
            <img className="skyline" src={skyline} />
            <div className="airports">
                <h3>DCA - Reagan Nationl Airport</h3>
                <h3>IAD - Dulles International Airport</h3>
                <h3>BWI - Baltimore International Airport</h3>
            </div>
            <p>All three of these airports are within range of the wedding and are ordered from closest to furthest. We recommend booking as early as you can to get good flights at good prices! Try checking out a flight aggregator like Google Flights.</p>
        </div>
        <div className="separator" />
        <div className="accomodation-block">
            <h1>Hotels</h1>
            <p>A block of rooms has been reserved at these two hotels for your convenience.</p>
            <div className="hotel-block">
                <div className="hotel-option">
                    <div className="img-holder"><img src={mason} /></div>
                    <h3>MASON & ROOK</h3>
                    <h3>1430 RHODE ISLAND AVE NW</h3>
                    <h3>WASHINGTON, DC</h3>
                    <a href="https://be.synxis.com/?adult=1&arrive=2020-09-11&chain=1003&child=0&currency=USD&depart=2020-09-13&group=200911GARC&hotel=9028&level=hotel&locale=en-US&rooms=1" target="_blank"><button>BOOK HERE</button></a>
                    <h4>Phone Number: 202-742-3100</h4>
                    <h4>Group Name: Garcia-Luu Wedding</h4>
                </div>
                <div className="hotel-option">
                    <div className="img-holder"><img src={madison} /></div>
                    <h3>THE MADISON</h3>
                    <h3>1177 15TH ST NW</h3>
                    <h3>WASHINGTON, DC</h3>
                    <a href="https://g.page/TheMadisonDC?share" target="_blank"><button>BOOK HERE</button></a>
                    <h4>Phone Number: 202-862-1600</h4>
                    <h4>Group Name: Garcia-Luu Wedding</h4>
                </div>
            </div>
        </div>

    </AccomodationsStyled >
);


export default Accomodations;