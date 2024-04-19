function login()
{
    let mobile=document.getElementById("mobile").value;
    let password=document.getElementById("password").value;
    if(mobile=='9998003879' && password=='brij123')
    {
        Swal.fire({
            title: "Success",
            text: "You are Logged In Successfully",
            icon: "success"
          });

          window.location='dashboard.html';
    }
    else 
    {
        Swal.fire({
            title: "Oh",
            text: "Your email and password are Incorect try again",
            icon: "error"
          });
    }
}