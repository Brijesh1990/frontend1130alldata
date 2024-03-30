/* map : map return each values of array and map each values in array list 
         map is also work as loop
         map is never return any values of empty data



*/

var mult=[4,5,6,54,6,5,25,4];
// mult.map(callback);
mult.map(Display);
function Display(item)
{
    console.log(item*10);
}