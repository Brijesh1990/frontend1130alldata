import React,{useState,useEffect} from "react";
function ApiApp()
{
    // destructuring of data via state
    const[photo,setPhoto]=useState([]);
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data);
            setPhoto(data)
        })
    
         


    },[]);
    return(
        <>

        {photo && photo.map((item)=>{
            return (
                <>
                    {/* <div className="app">    */}
                    {/* <label>{item.title}</label> */}
                    <img src={item.url} alt="photo" width={400} />
                    {/* <p>{item.title}</p> */}
                  
                    {/* </div> */}
                </>
            )
        })}

        </>
    )
}

export default ApiApp