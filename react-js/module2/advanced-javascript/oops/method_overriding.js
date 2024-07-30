/* 
method_overriding : method overriding is used to take a same function to pass same arguments that process is called method overriding



*/


class A 
{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;

    }
}
class B  extends A 
{
    constructor(a,b)
    {
        super(a,b);
    
    }
}
var obj=new B(10,20);
console.log(obj);