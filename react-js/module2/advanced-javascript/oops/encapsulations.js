/*  

encapsulations : encapsulation is a process that is used to warpping up data in a single objects i.e called encapsulations 

  or 

encapsulation is a process where user can'nt  see internal data he only access or see external data in applications that process is also called encapsulations 




*/

class A 
{
    constructor()
    {
        var name;
        var age;
    
    }
    getName()
    {
        return this.name;
    }
    setName(name)
    {
        this.name=name;

    }
    getAge()
    {
        return this.age;
    }
    setAge(age)
    {
        this.age=age;

    }

    
}

var obj=new A();
obj.setName("brijesh");
obj.setAge(35);
console.log(obj.getName() + "\n"+ obj.getAge());