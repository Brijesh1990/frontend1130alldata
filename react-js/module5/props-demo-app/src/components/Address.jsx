import React from "react";

function Address(props)
{
    return (

        <>
            <p>My  name is {props.name} <br />and i am living in {props.place}  <br />and my address is {props.address}</p>
        </>
    )

}

export default Address