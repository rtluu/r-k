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
            margin: 2rem 10% 5rem 10%;
            @media (max-width: 50rem) {
                margin: 1rem 10% 4rem 10%;;
            }

            img{
                margin: 3rem 0;
                max-width: 35rem;
                width: 100%;
                @media (max-width: 50rem) {
                    margin: 2rem 0;
                }

                &.skyline{
                    filter: invert(100%);
                }
            }

            h3{
                margin-bottom: 0.5rem;
            }

            p{
                text-align: left;
                margin: 2.5rem 0 0 0;
                max-width: 35rem;
                @media (max-width: 50rem) {
                    margin: 1.5rem 0 0 0;
                }
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
const hotelPic = require("./images/hotel-pic.png");
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
            <h1>Hotel</h1>
            <img src={hotelPic} />
            <h3>MASON & ROOK</h3>
            <h3>1430 RHODE ISLAND AVE NW</h3>
            <h3>WASHINGTON, DC</h3>
            <p>A block of rooms has been reserved at Mason & Rook in Washington, DC. You can use this link to make your reservation online and use code GARCIA-LUU. Or you can call 202-742-3100 to make your reservation and mention the Luu Wedding in order to receive a discounted rate.<br /><br />Be sure to book your hotel room by Friday, May 20, 2020 in order to receive the discount.</p>
        </div>
        <div className="separator" />
        <div className="accomodation-block">
            <h1>Travel</h1>
            <img className="skyline" src={skyline} />
            <div className="airports">
                <h3>DCA - Reagan Nationl Airport</h3>
                <h3>IAD - Dulles International Airport</h3>
                <h3>BWI - Baltimore International Airport</h3>
            </div>
            <p>All three of these airports are within range of the wedding and are arranged from closest to furthest. We recommend booking as early as you can to get good flights at good prices! Try checking out a flight aggregator like Google Flights.</p>
        </div>

    </AccomodationsStyled >
);


export default Accomodations;