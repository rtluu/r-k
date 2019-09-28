import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1.5rem 0;

    h1{
        margin: 0.5rem 0 1.5rem 0;
    }

    nav{
        display: flex;
        
        a{
            color: black;
            text-decoration: none;
            padding: 0.5rem;
            margin: 0 0.5rem;

            &:hover{
                text-decoration: underline;
            }
        }
    }
`

const Header = () => (
    <HeaderStyled>
        <h1>Kristina & Ryan</h1>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/schedule">SCHEDULE</Link>
            <Link to="/proposal">PROPOSAL</Link>
        </nav>
    </HeaderStyled>
);

export default Header;