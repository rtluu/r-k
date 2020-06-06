import React, { Component } from "react";
import styled from "styled-components";

const NoticeStyled = styled.div`
    background: #E5BFB6;
    margin: 0;
    padding: 20px 0;

    .notice-text{
        color: #554D4A;
        font-size: 18px;
        margin: 0 auto;
        max-width: 900px;
        width: 80%;
        @media (max-width: 50rem) {
            width: 70%;
        }
    }

`

export default class Notice extends Component {
    constructor(props) {
        super(props);


        this.state = {

        };


    }

    render() {

        return (
            <NoticeStyled>
                <p className="notice-text">In order to prioritize everyone's health and wellbeing, we are postponing our wedding. We look forward to celebrating with everyone on our new date, <b>September 11, 2021</b>. Please continue to check this site for updates!</p>
            </NoticeStyled >
        )
    }
}