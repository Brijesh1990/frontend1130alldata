function Header()
{
    var dv="i am just load header"+"<br>";
    document.getElementById("head").style="width:100%;height:auto; background-color:lightgray; padding:20px"
    return dv;
}
function Nav()
{
    var dv="i am just load Navigations"+"<br>";
    return dv;
}
function Content()
{
    var dv="i am just load Content"+"<br>";
    document.getElementById("cont").style="width:100%;height:auto; background-color:aqua; padding:20px"
    return dv;
}

function Footer()
{
    var dv="i am just load Footer"+"<br>";
    return dv;
}

export {Header,Nav,Content,Footer}