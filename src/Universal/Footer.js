import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const FooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 2.25rem 0 1.625rem;
    position: relative;
    margin: 1rem 0;
    z-index: 0;

    .footer-icons{
        align-items: center;
        display: flex;

        a{  
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 0.375rem;

            &:hover{
                img{
                    filter: brightness(0%);
                }
            }

            img{
                margin: 0.25rem;
            }
            
            #instagram{
                height: 1.5rem;
                width: 1.5rem;
                @media (max-width: 50rem) {
                    height: 1.25rem;
                    width: 1.25rem;
                }
            }
    
            #mail{
                height: 1.375rem;
                width: 2rem;
                @media (max-width: 50rem) {
                    height: 1.125rem;
                    width: 1.675rem;
                }
            }
        }   
    }

    .made-with{  
        cursor: default;
        color: #BFBDC1;
        font-size: 1.25rem;
        @media (max-width: 50rem) {
            font-size: 1.125rem;
        }
       
        .heart{
            font-size: 1rem;
            @media (max-width: 50rem) {
                font-size: 0.875rem;
            }
        }
    }
`

const mail = require("./images/mail.svg");
const instagram = require("./images/instagram.svg");

const Footer = () => (
    <FooterStyled>
        <div className="footer-icons">
            <a href="https://www.instagram.com/explore/tags/ourluubeginning/"><img src={instagram} id="instagram" /></a>
            <a href="mailto:kristinamgarcia2539@gmail.com"><img src={mail} id="mail" /></a>
        </div>
        <p className="made-with">Made with <span className="heart">❤️</span>by Ryan</p>
    </FooterStyled>
);

export default Footer;