import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/Home/Home";
import Proposal from "./Pages/Proposal/Proposal";
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './index.css';
import Header from "./Universal/Header";
import Footer from "./Universal/Footer";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/proposal" component={Proposal} />
            <Footer />
        </div>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
