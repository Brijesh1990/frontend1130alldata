// function for login
function chk()
{
    var em=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(em=='bhautik@gmail.com' && pass=='b123456')
    {
     alert('You are Logged In Successfully')
     window.location='welcome.html';
    }
    else 
    {
        alert('Your email and password are Incorect try again')
        window.location='login.html';
   
    }
}
// function for logout
function lg()
{
  if(confirm('Are you sure to Logout as Users ?')) 
  {
      alert('You are Logout successfully')
      window.location='login.html';
  }
  else 
  {
    window.location='welcome.html';
  }

}
