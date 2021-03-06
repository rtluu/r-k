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

            .image-holder{
                align-items: center;
                display: flex;
                flex-direction: row;
                justify-content: center;

                img{
                    margin: 0 1.5rem;
                }
            }

            p{
                font-style: italic;
            }
        }

        .wedding-party-block{
            align-items: start;
            display: grid;
            margin: 2rem 10% 4rem 10%;
            grid-template-columns: 50% 50%;
            position: relative;
            padding: 2rem 0 1rem 0; 
            width: 100%;

            @media (max-width: 50rem) {
                grid-template-columns: 100%;
                margin: 0rem 10% 3rem 10%;
                padding: 0; 
            }

            .party-holder{
                align-items: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 2rem;

                @media (max-width: 50rem) {
                    margin: 0.5rem 0;
                }

                .spacer{
                    margin-top: 3.5rem;

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
        }

        .officiant-block{
            margin-bottom: 3rem;
            @media (max-width: 50rem) {
                margin-bottom: 4rem;
            }
        }

        .separator{
            display: none;
            height: 2px;
            background: #EBEBEB;
            position: relative;
            margin-bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            width: 20rem;

            @media (max-width: 50rem) {
                display: block;
            }

            &.second{
                margin-top: 3rem;
            }

            &.officiant{
                left: 0;
                transform: translateX(0);
            }
        }

        h2{
            margin-bottom: 1rem;
        }
    }
        
`;

const vest = require("./images/vest.svg");
const dress = require("./images/dress.svg");


const WeddingParty = () => (
    <WeddingPartyStyled className="main">
        <div className="intro">
            <div className="image-holder">
                <img className="dress" src={dress} />
                <img className="vest" src={vest} />
            </div>

            <p>The ladies and gentlemen in our wedding party!</p>
        </div>

        <div className="wedding-party-block">
            <div className="party-holder">
                <h2>Maid of Honor</h2>
                <h3>Jennie Remington</h3>

                <h2 className="spacer">Bridesmaids</h2>
                <h3>Sirley Micks</h3>
                <h3>Jessica Whisnand</h3>
                <h3>Kandace Levy</h3>
                <h3>Julie Taguding</h3>
                <h3>Miranda Lopez</h3>
                <h3>Madie Galloway</h3>
            </div>
            <div className="divider" />
            <div className="separator second" />
            <div className="party-holder">
                <h2>Best Man</h2>
                <h3>Brendan Luu</h3>

                <h2 className="spacer">Groomsmen</h2>
                <h3>Ben Simon</h3>
                <h3>Josh Anderson</h3>
                <h3>Diego Quispe</h3>
                <h3>Ben Barone</h3>
                <h3>Osebo Akhigbe</h3>
                <h3>Sean Mahan</h3>
            </div>
        </div>
        <div className="separator officiant" />
        <div className="officiant-block">
            <h2>Officiant</h2>
            <h3>Steven Elenberg</h3>
        </div>

    </WeddingPartyStyled >
);


export default WeddingParty;