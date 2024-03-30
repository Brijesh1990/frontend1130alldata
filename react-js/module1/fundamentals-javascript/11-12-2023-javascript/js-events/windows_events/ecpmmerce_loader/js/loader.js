var MyLoader;
function MainFunction()
{
   MyLoader=setTimeout("Test()",500);
}

function Test()
{
    document.getElementById("loader").style="display:none !important";
    document.getElementById("main-content").style="display:block !important";

}