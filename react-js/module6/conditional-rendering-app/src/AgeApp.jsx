import React from "react";
// function AgeApp()
// {
//     // checked age
//     var age=18;
//     if(age>=18)
//         {
//             return <h2>i am eligible for voting</h2>;
//         }

//         else 
//         {
//             return <h2>i am not eligible for voting</h2>;
//         }

//     return (
//         <>



//         </>
//     )
// }


function AgeApp()
{

    var age=10;
    var res=age>=18 ? 'i am eligible for Voting':'i am not eligible for voting';
    return (
        <>
          
          {res}

        </>
    )
}





export default AgeApp