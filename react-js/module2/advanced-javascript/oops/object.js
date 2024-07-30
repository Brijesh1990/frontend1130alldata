/*  

object : object is an instance of class 
         object is created via new keywords of same name of class 

    
*/

class A 
{
constructor(nm,salary,age,department)
{
  this.nm=nm;
  this.salary=salary;
  this.age=age;
  this.department=department;

}

}

var obj=new A("brijesh",89500,35,"IT");  // new A is an object of class A 
console.log(obj);