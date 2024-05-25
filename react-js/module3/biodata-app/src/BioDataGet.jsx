import React from "react";
// stored each data in variables 
const name="Brijesh Kumar";
const age="35 years";
const height="164.5 fit";
const email="bkpandey.pandey@gmail.com";
const website="http://onlineportfolio.byethost14.com/";
function BioDataGet()
{
  
    return (
    <>
    <div style={{width:"50%"}}>
    <img src="http://onlineportfolio.byethost14.com/img/yimage.jpg" alt="brijesh" style={{borderRadius:"50%",width:"150px", height:"150px"}} />  
    </div>
    <h3>About({name})</h3>
    <p><b>Name :</b>{name}</p>
    <p><b>Age :</b>{age}</p>
    <p><b>Height :</b>{height}</p>
    <p><b>Email Us :</b><a href="">{email}</a></p>
    <p><b>website :</b><a href="">{website}</a></p>
   
    </>

)
}
export default BioDataGet