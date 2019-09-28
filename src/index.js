import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/Home/Home";
import Proposal from "./Pages/Proposal/Proposal";
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './index.css';
import Header from "./Universal/Header";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/proposal" component={Proposal} />
        </div>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
