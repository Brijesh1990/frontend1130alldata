/*  

  A class properties access by only one class i.e called single inheritance

      A=> B => C => D=> E

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

class  C extends B 
{
    constructor(name,age,department,company)
    {
        // super() is  a keywords or methods i.e used to access parents properties 
        super(name,age,department);
        this.company=company;

    }
}

var obj=new C("brijesh",35,"computer science","tops technology pvt ltd rajkot");
console.log(obj);