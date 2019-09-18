import React from "react";
import ReactGA from 'react-ga';
import "./App.css";
import SectionWipes from "./SectionWipes";

ReactGA.initialize('UA-148182167-1');
ReactGA.pageview('/proposal');

function App() {
  return (
    <div className="App">
      <SectionWipes />
    </div>
  );
}

export default App;
