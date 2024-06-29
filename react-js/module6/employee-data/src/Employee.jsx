import React from "react";
import { Data } from "./Data";
function Employee()
{
    return (
        <>

        <h1>Employee details</h1>
        <div>
            {Data && Data.map((items)=>{
                return (
                    <>
                       <h2>Name :{items.name}</h2>
                       <h2>Age :{items.age}</h2>
                       <h2>salary :{items.salary}</h2>
                       <h2><img src={items.photo} alt="photo" /></h2>
                    </>
                )
            })}
        </div>

        </>
    )
}

export default Employee