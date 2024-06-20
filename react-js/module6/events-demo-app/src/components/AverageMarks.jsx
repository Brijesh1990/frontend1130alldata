import React from "react";
function avg()
{
    var Math=parseInt(prompt('Enter Math marks :'));
    var Gujrati=parseInt(prompt('Enter Gujrati marks :'));
    var English=parseInt(prompt('Enter English marks :'));
    var Physics=parseInt(prompt('Enter Physics marks :'));
    var Chemistry=parseInt(prompt('Enter Chemistry marks :'));

    var res=(Math+Gujrati+English+Physics+Chemistry)/5;
    alert('The average marks of 6 subjects  is :'+res)
}

export default avg