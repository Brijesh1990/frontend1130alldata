import React from "react";
import prod from "./Data";

function Products()
{
    return (
        <>
         
         <h2>Filters all Mobiles Here </h2>

          {prod.filter(item=>item.category=='mens').map((data)=>(

         
            <>
            <div className="app">
            <div className="box">
            <p key={data.name}>{data.name}</p>
            <p key={data.photo}><img src={data.photo} alt="products" width={100}/></p>
            <p key={data.qty}>{data.qty}</p>
            <p key={data.price}>{data.price}</p>
            </div>
            </div>    

            </>
          
         ))}
         

        </>
    )
}

export default Products