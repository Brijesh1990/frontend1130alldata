import React,{useState} from 'react'
function App()
{
  const[name1,setName1]=useState("brijesh");
  const[name2,setName2]=useState("Utsav");
  const[name3,setName3]=useState("Bhautik");
  return (
    <>

    <h1>My name is {name1}</h1>
    <h1>My name is {name2}</h1>
    <h1>My name is {name3}</h1>
    <button type='button' onClick={()=>{setName1("Bhautik")}} className='btn btn-dark bg-dark text-white'>Update Name ?</button>

    </>
  )
}

export default App