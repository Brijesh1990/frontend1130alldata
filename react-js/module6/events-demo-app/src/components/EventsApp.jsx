import React from "react";
// import { Add,Subs,Dv,Mult } from "./Calc"
// import avg from "./AverageMarks";
import {Nm,Address} from './Name'
function EventsApp()
{
    return (
        <>
           {/* <div className="demo-app">
           <h1>Click on Button Performed Actions</h1>
           <button type="button" id="btn" onClick={Add}>Additions</button>
           <button type="button" id="btn" onClick={Subs}>Substractions</button>
           <button type="button" id="btn" onClick={Dv}>Divisions</button>
           <button type="button" id="btn" onClick={Mult}>Multiplications</button>
           </div> */}


           <div className="demo-app">
           {/* <h1>Average marks of s subjects Calculations</h1>
           <button type="button" id="btn" onClick={avg}>Calculate average Marks</button> */}
           <p id="demo"></p>
           <p id="add"></p>
           <button type="button" onClick={Nm}>Get Name</button>
           <button type="button" onClick={Address}>Get Address</button>

           </div>
            
        </>
    )
}

export default EventsApp