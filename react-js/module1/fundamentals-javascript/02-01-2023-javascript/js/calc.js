// clear values
function clr()
{
    document.getElementById("result").value="";
}
// press on button display each values inside of result
function Display(val)
{
    document.getElementById("result").value+=val;
}

// back press one values is removed
function bck()
{
    var b=document.getElementById("result").value;
    var back=b.slice(0,-1);
    document.getElementById("result").value=back;
}

// calculate all airthmatics values
function final_result()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;    
}

// find square or power of result values 

function pw()
{
    var num=parseInt(document.getElementById("result").value);
    var res=Math.pow(num,2);
    //alert(res);
    document.getElementById("result").value=res;
}

// find square root  of result values 
function sq()
{
    var num=parseInt(document.getElementById("result").value);
    var res=Math.sqrt(num);
    //alert(res);
    document.getElementById("result").value=res;
}