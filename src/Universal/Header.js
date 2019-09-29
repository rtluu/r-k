import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 1.5rem 0;

    @media (max-width: 50rem) {
        margin: 0.75rem 0;
    }

    h1{
        margin: 0.5rem 0 1.5rem 0;

        @media (max-width: 50rem) {
            font-family: "Cormorant Garamond", serif;
            font-size: 2rem;
            margin: 0.25rem 0;
        }
    }

    nav{
        display: flex;

        @media (max-width: 50rem) {
            display: none;
        }
        
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

    button{
        background: none;
        border: none;
        cursor: pointer;
        display: none;
        outline: none;
        position: fixed;
        right: 1rem;
        top: 1.5rem;
        z-index: 2;

        @media (max-width: 50rem) {
            display: inline-block;
        }

        &:hover{
            div{
                background: black;
            }
        }

        div{
            background: #BFBDC1;
            height: 0.125rem;
            margin: 0.25rem;
            width: 1.75rem;
        }
    }

    .menu{
        background: rgba(255,255,255,0.96);
        display: none;
        height: 100%;
        position: fixed;
        width: 100%;
        z-index: 1;

        @media (max-width: 50rem) {
            display: block;
        }
    }
`

export default class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {
            menuOpen: false
        };

        this.menuSwitch = this.menuSwitch.bind(this);
    }

    menuSwitch() {
        this.setState({ menuOpen: !this.state.menuOpen });
        console.log(this.state.menuOpen);
    }

    render() {
        return (
            <HeaderStyled>
                <h1>Kristina & Ryan</h1>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/schedule">SCHEDULE</Link>
                    <Link to="/proposal">PROPOSAL</Link>
                </nav>
                <button onClick={this.menuSwitch}>
                    <div />
                    <div />
                    <div />
                </button>
                {this.state.menuOpen &&
                    <div className="menu"></div>
                }
            </HeaderStyled>
        )
    }
}