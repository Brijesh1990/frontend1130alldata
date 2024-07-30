/* 
method_overloading : method overloading is used to take a same function to pass different-2 arguments that process is called method overloading

*/

class A 
{
    constructor(a,b,c)
    {
        this.a=a;
        this.b=b;
        this.c=a+b;


    }
}
class B  extends A 
{
    constructor(a,b,c,d)
    {
        super(a,b);
        this.c=c;
        this.d=a*b*c;

    
    }
}
var obj=new B(10,20,30);
console.log(obj);