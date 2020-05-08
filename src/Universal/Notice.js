import React, { Component } from "react";
import styled from "styled-components";

const NoticeStyled = styled.div`
    background: #EB9486;
    margin: 0;
    padding: 20px 0;

    .notice-text{
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
                <p className="notice-text">We're continuing to monitor the Covid-19 pandemic and what that might mean for our special day. As of now, we're still on track for September 12, 2020, but please continue to check back for updates.</p>
            </NoticeStyled >
        )
    }
}