/* callback method :callback method is used to callback any function with another functions */

var emp=["mitesh","kayum","nirali","aditi","bharti"];
//console.log(emp);
emp.forEach(Display);

function Display(items)
{
    console.log(items);
}