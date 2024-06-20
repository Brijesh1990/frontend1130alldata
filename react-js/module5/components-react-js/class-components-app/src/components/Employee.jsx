import React,{Component} from "react";

const empname="Rdhi parmar";
const salary=89500;
const compname="Tops technology";

class Employee extends Component
{
 render()
 {
    return (
        <>
         <h1>Employee details</h1>
         <p>Employee name is <b>{empname}</b> <br /> salary is  <b>{salary}</b></p>

        </>
    )
 }
}

class Company extends Employee
{
    render()
 {
    return (
        <>
        <Employee />
         <h1>Company details details</h1>
         <p>The company name is :<b>{compname}</b></p>

        </>
    )
 }

}
export default Company