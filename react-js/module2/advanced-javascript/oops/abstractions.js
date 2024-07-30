/*  

abstractions is used for data hidding proccess 
if we can create a class as abstract class we never create object of that class

Note : abstractions is not used in javascript it is used in typescript

*/

abstract class A 
{
    constructor(name)
    {
        this.name=name;
    }
}

var obj=new A("Twinkle");
console.log(obj);