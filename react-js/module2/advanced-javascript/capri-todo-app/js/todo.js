

// window load 
window.onload=()=>{
// store all data in variables 
let addForm=document.querySelector("#addForm");
let item=document.getElementById("item");
let items=document.getElementById("items");
let edititem=null;
// call add eventListener
addForm.addEventListener("submit",additem);
items.addEventListener("click",removeitem);
}

// for add data create a function for additem()
function additem(e)
{
e.preventDefault(); //prevent an redirection    
//add new items 
let newitem=document.getElementById("item").value;

// for edit data
if(submit.value!='Submit')
{
  edititem.target.parentNode.childNodes[0].data=document.getElementById("item").value;
  submit.value="Submit";
  document.getElementById("item").value="";
  
Swal.fire({
  title: "Good job!",
  text: "Thanks Your data successfully Updated!",
  icon: "success"
});
return false;

}

// data stored 
let li=document.createElement("li")
li.className="input-list-item  mt-3 p-3 shadow";
// add delete button
let btnDel=document.createElement("button");
btnDel.className="btn btn-danger btn-sm text-white float-end ms-2  p-2 mt-0 delete";
btnDel.appendChild(document.createTextNode("Delete"));

// add edit button
let btnEdit=document.createElement("button");
btnEdit.className="btn btn-info btn-sm text-white float-end  p-2 mt-0 edit";
btnEdit.appendChild(document.createTextNode("Edit"));
//createTextNode(newitem) we added items using this method
li.appendChild(document.createTextNode(newitem));
// display del button in items
li.appendChild(btnDel);
// display del button in items
li.appendChild(btnEdit);
//display data in list 
items.appendChild(li);

Swal.fire({
    title: "Good job!",
    text: "Tnaks for added New Data!",
    icon: "success"
  });

  return false;

//window.location.reload();
//window.location='to-do-app.html';
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
function removeitem(e)
{
  e.preventDefault(); 
  if(e.target.classList.contains("delete"))
  {
    if(confirm('Are you sure to delete Items'))
    {
      let li=e.target.parentNode;
      items.removeChild(li);
      Swal.fire({
        title: "Good job!",
        text: "Items successfully Deleted!",
        icon: "error"
      });
    
    }
  } 
// edit data 
if(e.target.classList.contains("edit"))
{
  document.getElementById("item").value=e.target.parentNode.childNodes[0].data;
  submit.value="Edit";
  edititem=e;
}

}
