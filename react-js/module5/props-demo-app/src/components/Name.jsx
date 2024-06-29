import React from 'react'
// function App(props)
// {
//     return <h1 align='center'>My name is {props.name}</h1>
// }

function Car(props)
{
    return <h1 align='center'>{props.name}</h1>
}
function Garage()
{
    return (
    <>

    <h1 align='center'>Who lives in my Garage  <Car name="audi" /> </h1>
   

    </>
    )
}


export default Garage