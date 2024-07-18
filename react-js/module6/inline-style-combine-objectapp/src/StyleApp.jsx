import React from "react";

    // style 1
   const style1={
    color:"red",
    fontSize:"45px"
   }

   const style2={
    fontFamily:"arial",
    backgroundColor:"black",
    color:"white",
    padding:"5px"
   }

   const App=()=>{

        const combine={
            ...style1,
            ...style2
        }    



    return (
        <>
            <div style={combine}>
                <h1>This is a inline style combine with objects</h1>
            </div>
        </>
    )
    
}

export default App