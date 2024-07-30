/*  

  A class properties access by only one class i.e called single inheritance

      A=>B

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