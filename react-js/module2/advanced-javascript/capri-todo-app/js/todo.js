

// window load 
window.onload=()=>{
// store all data in variables 
const addForm=document.querySelector("#addForm");
const item=document.querySelector("#item");
const items=document.querySelectorAll("#items");
const btn=document.querySelector("#submit");
// call add eventListener
btn.addEventListener("click",additem);
btn.addEventListener("click",removeitem);
}

// for add data create a function for additem()
function additem(e)
{
e.preventDefault(); //prevent an redirection    
//add new items 
let newitem=document.getElementById("item").value;
// data stored 
let li=document.createElement("li")
li.className="input-list-item  mt-3 p-3 shadow";
// add delete button
let btnDel=document.createElement("button");
btnDel.className="btn btn-danger btn-sm text-white float-end ms-2  p-2 mt-2 delete";
btnDel.appendChild(document.createTextNode("Delete"));

// add edit button
let btnEdit=document.createElement("button");
btnEdit.className="btn btn-info btn-sm text-white float-end  p-2 mt-2 edit";
btnEdit.appendChild(document.createTextNode("Edit"));
//createTextNode(newitem) we added items using this method
li.appendChild(document.createTextNode(newitem));
// display del button in items
items.appendChild(btnDel);
// display del button in items
items.appendChild(btnEdit);
//display data in list 
items.appendChild(li);
Swal.fire({
    title: "Good job!",
    text: "Tnaks for added New Data!",
    icon: "success"
  });


// e.target.reset();


}

// enable & disable button while added data
// function btnEnbl()
// {
//     //alert('hi')
//     document.getElementById("submit").disabled=false;

// }

function btnEnbl(ref,btnEnb)
{
    //alert('hi')
    // document.getElementById("submit").disabled=false;
    document.getElementById(btnEnb).disabled=false;
}

// remove data from items
function removeitem()
{
 
}

