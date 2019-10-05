import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker'
import { HashRouter, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from "history"
import './index.css';
import Header from "./Universal/Header";
import Footer from "./Universal/Footer";
import Home from "./Pages/Home/Home";
import Proposal from "./Pages/Proposal/Proposal";
import Schedule from "./Pages/Schedule/Schedule";
import Accomodations from './Pages/Accomodations/Accomodations';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
};

ReactDOM.render(
    <HashRouter >
        <Route component={ScrollToTop} />
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/proposal" component={Proposal} />
            <Route path="/accomodations" component={Accomodations} />
            <Footer />
        </div>
    </HashRouter>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
