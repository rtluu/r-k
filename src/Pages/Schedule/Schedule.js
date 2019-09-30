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
    }
        
`;

const calendar = require("./images/calendar.svg");

const Schedule = () => (
    <ScheduleStyled className="main">
        <div className="intro">
            <img className="calendar" />
        </div>
    </ScheduleStyled >
);


export default Schedule;