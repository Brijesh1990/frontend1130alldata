/* 

inheritance is a process where we used parent class properties via its child class i.e called inheritance.
or
inheritance is used one class properties via another class i.e called inheritance 
Note : inheritance is used via extends keywords


A => B 

types of inheritance : 
  a) single inheritance
  b) multilevel inheritance
  c) multiple inheritance

   Note : multiple inheritance is not supported by javascript

*/

class A 
{
    constructor(name,age)
    {
      this.name=name;
      this.age=age;
    }
}
class  B extends A 
{
    constructor(name,age,department)
    {
        // super() is  a keywords or methods i.e used to access parents properties 
        super(name,age);
        this.department=department;

    }
}

var obj=new B("brijesh",35,"computer science");
console.log(obj);