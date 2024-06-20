function Add()
{
 var a=parseInt(prompt('Enter a values'));
 var b=parseInt(prompt('Enter b values'));
 var c=a+b;
 alert('The additions of numbers is :'+c)   
}
function Subs()
{
 var a=parseInt(prompt('Enter a values'));
 var b=parseInt(prompt('Enter b values'));
 var c=a-b;
 alert('The substractions of numbers is :'+c)   
}
function Dv()
{
 var a=parseInt(prompt('Enter a values'));
 var b=parseInt(prompt('Enter b values'));
 var c=a/b;
 alert('The Divisions of numbers is :'+c)   
}

function Mult()
{
 var a=parseInt(prompt('Enter a values'));
 var b=parseInt(prompt('Enter b values'));
 var c=a*b;
 alert('The multiplications of numbers is :'+c)   
}

export {Add,Subs,Dv,Mult}