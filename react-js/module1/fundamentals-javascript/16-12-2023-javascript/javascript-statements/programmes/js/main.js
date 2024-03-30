// find age for eligibility for voting
function ag()
{
var res=document.getElementById("age").value;
if(res>=18)
{
document.getElementById("result").innerHTML="You are Eligible for Voting";
window.location='https://www.eci.gov.in/';
return false;
}
else 
{
    document.getElementById("result").innerHTML="You are Not Eligible for Voting";
    window.location='age_check.html';
    return false;
}
}

// find simple interest
function si()
{
    var p=document.getElementById("pname").value;
    var r=document.getElementById("roi").value;
    var n=document.getElementById("yname").value;
    var res=p*n*r/100;
    document.getElementById("result").innerHTML="Simple interest of ammount is :"+res;
}

// square of any numbers 
function sq()
{
  var num=document.getElementById("number").value;
  var res=Math.pow(num,2); //square of numbers 
  document.getElementById("result").innerHTML="The square of numbers is :"+res;
}

// compound interest 
function ci()
{
    var p=document.getElementById("pname").value;
    var r=document.getElementById("roi").value;
    var n=document.getElementById("yname").value;
    // compound interest formula is 
    var res=p*(Math.pow((1+r/100),n));
    document.getElementById("result").innerHTML="The compund interest is :"+res;
}

// ternary operator ?:
function ag_ter()
{
    var ag=document.getElementById("age").value;
    var res=ag>=18?"I am eligible for voting":"i am not eligible for voting";
    document.getElementById("result").innerHTML=res;
}

