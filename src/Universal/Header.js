import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

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
            padding: 0.5rem;
            margin: 0 0.5rem;
        }
    }

    .holder{
        opacity: 0;
        pointer-events: none;
        position: fixed;
        right: 0.75rem;
        top: 1.25rem;
        transition: all 0.1s;
        z-index: 2;

        &.show{
            display: inline-block;
            opacity: 1;
            pointer-events: all;
        }

        @media (max-width: 50rem) {
            display: inline-block;
            opacity: 1;
            pointer-events: all;
        }

        .hamburger{
            background: none;
            border: none;
            cursor: pointer;
            outline: none;
            padding: 0.25rem;
            position: relative;
            height: 1.875rem;
            width: 2.75rem;
            z-index: 3;
           
            &.x{
                .line-holder{
                    right: -0.125rem
                    top: -0.3125rem;

                    .line{
                        transition: all 0.2s;
                        &:nth-child(1){
                            position: absolute;
                            transform: rotate(45deg);
                            width: 1.5rem;
                        }
                        &:nth-child(2){
                            position: absolute;
                            transform: rotate(-45deg);
                            width: 1.5rem;
                        }
                        &:nth-child(3){
                        display: none;
                        }
                    }
                }
            }
    
            &:hover{
                .line-holder{
                    .line{
                        transition: all 0.1s;
                        background: black;
                    }
                }   
            }
            
            .line-holder{
                position: relative;
                .line{
                    transition: all 0.2s;
                    background: #BFBDC1;
                    height: 0.125rem;
                    margin: 0.25rem;
                    width: 1.75rem;
                }
            }
        }
        .menu{
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255,255,255,0.96);
            height: 100%;
            position: fixed;
            bottom: 0;
            left: 0;
            right 0;
            width: 100%;
            top: 0;
            z-index: 1;
    
            @media (max-width: 50rem) {
                display: block;
            }

            .menu-options{
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;
                padding: 0;
                text-align: center;

                h3{
                    font-size: 3.5rem;
                    margin: 1rem 0;
                    @media (max-width: 50rem) {
                        font-size: 2.5rem;
                    }
                    a{
                        display: inline-block;
                        padding: 1rem;
                    }
                }
            }
        }
    } 
`

export default class Header extends Component {
    constructor(props) {
        super(props);


        this.state = {
            menuOpen: false,
            menuShow: false
        };

        this.menuSwitch = this.menuSwitch.bind(this);
        this.menuClick = this.menuClick.bind(this);
        this.showHamburger = this.showHamburger.bind(this);
        this.hideHamburger = this.hideHamburger.bind(this);
    }

    showHamburger() {
        this.setState({ menuShow: true });
    }

    hideHamburger() {
        if (!this.state.menuOpen) {
            this.setState({ menuShow: false });
        }

    }

    menuClick() {
        this.setState({ menuShow: false });
        this.setState({ menuOpen: false });
    }

    menuSwitch() {
        this.setState({ menuOpen: !this.state.menuOpen });
    }

    render() {
        var holder = {};
        if (this.state.menuShow) {
            holder.class = 'holder show';
        } else {
            holder.class = 'holder';
        }
        var hamburger = {};
        if (this.state.menuOpen) {
            hamburger.class = 'hamburger x';
        } else {
            hamburger.class = 'hamburger';
        }
        return (
            <HeaderStyled>
                <h1>Kristina & Ryan</h1>
                <nav>
                    <Link onClick={this.menuClick} to="/">HOME</Link>
                    <Link onClick={this.menuClick} to="/schedule">SCHEDULE</Link>
                    <Link onClick={this.menuClick} to="/proposal">PROPOSAL</Link>
                </nav>
                <div className={holder.class}>
                    <button className={hamburger.class} onClick={this.menuSwitch}>
                        <div className="line-holder">
                            <div className="line" />
                            <div className="line" />
                            <div className="line" />
                        </div>
                    </button>
                    {
                        this.state.menuOpen &&
                        <div className={"menu"}>
                            <ul className="menu-options">
                                <h3><Link onClick={this.menuClick} to="/">HOME</Link></h3>
                                <h3><Link onClick={this.menuClick} to="/schedule">SCHEDULE</Link></h3>
                                <h3><Link onClick={this.menuClick} to="/proposal">PROPOSAL</Link></h3>
                            </ul>
                        </div>
                    }
                </div>

                <Waypoint
                    onLeave={this.showHamburger}
                    onEnter={this.hideHamburger}
                />
            </HeaderStyled >
        )
    }
}