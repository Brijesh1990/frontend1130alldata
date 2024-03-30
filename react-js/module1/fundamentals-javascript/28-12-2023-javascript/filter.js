/* filter : filter ius a method i.e used to return each values of data and check conditions to filter data from array
   
   var a={id:"1001",name:"brijesh"};
         property:"value";

   var a=["1001","brijesh"];      
          key:"value";
   Note : both datatype is object


*/

// check array list who is eligible for voting who's age is greater than and equal to 18;
var emp=[10,5,45,25,68,99,105,25,3,4];
// emp.filter(callback);
emp.filter(Test);

function Test(age)
{
    var result=age>=18;
    console.log(result);
}