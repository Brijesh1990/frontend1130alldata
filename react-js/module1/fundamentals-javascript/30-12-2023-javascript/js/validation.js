function valid()
{

    // javascript provides form validation rules and also check each values is proper enter or not there we use regular expressions 


    // validations on name field
    if(document.frm.name.value=="")
    {
        alert('please enter your name here')
        document.frm.name.focus();
        return false;
    }
    // check alphabetic character only in name
    var nm= /^[a-zA-Z]+$/;
    if(!nm.test(document.frm.name.value))
    {
        alert('please enter your  name alphabetic character here')
        document.frm.name.focus();
        return false;
    }
    
    // validations on email field
    if(document.frm.email.value=="")
    {
        alert('please enter your email here')
        document.frm.email.focus();
        return false;
    }

    // check valid email address regular expression
    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // bkpandey@gmail.com
    
    if(!em.test(document.frm.email.value))
    {
        alert('please enter your valid email address here')
        document.frm.email.focus();
        return false;
    }
    // validations on mobile field
    if(document.frm.mobile.value=="")
    {
        alert('please enter your mobile here')
        document.frm.mobile.focus();
        return false;
    }

    var n=/^[0-9]d{1,10}$/;
    if(!n.test(document.frm.mobile.value && document.frm.mobile.value<=10))
    {
        alert('please enter your mobile number min and max 10 in digit only here')
        document.frm.mobile.focus();
        return false;
    }
    // validations on subject field
    if(document.frm.subject.value=="")
    {
        alert('please enter your subject here')
        document.frm.subject.focus();
        return false;
    }
    // validations on message field

    if(document.frm.message.value=="")
    {
        alert('please enter your message here')
        document.frm.name.focus();
        return false;
    }
    
    
}