import React from "react";
const empname="Brijesh kumar pandey";
const ag=35;
const salary=1;
const compname="Tops technology pvt Ltd"
const address="150 feet ring road rajkot behind savan signet Raiya road 360005"

// normal function
// function Employee()
// {
//     return (
//         <>
//             <h1>Employee details</h1>
//             <p>Employee name is {empname} <br /> and age is {ag} <br/> and salary is {salary} <br/> adress of employee is {address}</p>
//         </>
//     )
// }

// arrow function 

// const Employee=()=>{
//     return (
//                 <>
//                     <h1>Employee details</h1>
//                     <p>Employee name is {empname} <br /> and age is {ag} <br/> and salary is {salary} <br/> adress of employee is {address}</p>
//                 </>
//             )
// }



const Employee=()=>{
return (
<>
<h1>Employee details</h1>
<p>Employee name is {empname} <br /> and age is {ag} <br/> and salary is {salary} <br/> adress of employee is {address}</p>
</>
)
}


const Company=()=>{
return (
<>
<Employee /> 
<h1>Company details</h1>
<p>Employee company name is {compname} </p>

</>
)
}

export default Company
