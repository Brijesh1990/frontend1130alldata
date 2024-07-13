import React from "react";
const emp=[
    {
        id:1001,
        name:"brijesh",
        age:32,
        salary:89500,
        department:"IT"
    },
    {
        id:1002,
        name:"kayum",
        age:24,
        salary:19500,
        department:"Students"
    },
    {
        id:1003,
        name:"Utsav",
        age:22,
        salary:19500,
        department:"Music"
    },
    {
        id:1004,
        name:"Bhautik",
        age:27,
        salary:89500,
        department:"CSE"
    },
    {
        id:1005,
        name:"Rageshri",
        age:22,
        salary:19500,
        department:"Students"
    },
    {
        id:1006,
        name:"Ridhi",
        age:23,
        salary:18500,
        department:"IT"
    },
    {
        id:1007,
        name:"Twinkle",
        age:23,
        salary:18500,
        department:"IT"
    },
    



]
function Employee()
{
    return (
        <>
         
         <h2>Filters all employees via age</h2>

          {emp.filter(person=>person.age<25).map((persondata)=>(

            <li>{persondata.name}</li>
                  
          ))}

        </>
    )
}

export default Employee