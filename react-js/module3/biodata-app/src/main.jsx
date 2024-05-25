import React from "react";
import ReactDOM from 'react-dom/client'
//import BioData from "./BioData";
import BioDataGet from "./BioDataGet";
const root=ReactDOM.createRoot(document.getElementById("bio-demo"));
root.render(
    <>
    <h1>Brijesh Kumar Pandey(BioData)</h1>
    {/* <BioData /> */}
    <BioDataGet />
    </>
    
)