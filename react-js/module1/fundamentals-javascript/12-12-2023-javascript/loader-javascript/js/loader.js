var load;
function mainFunction()
{

    load=setTimeout("display()",1000);

}

function display()
{
    document.getElementById("main-content").style="display:block !important";
    document.getElementById("loader").style="display:none !important";
}