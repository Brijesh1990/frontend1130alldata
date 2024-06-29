import React from "react";

// print name via conditional rendering
// function Display({name,isChecked})
// {
//  return <h1>{name}</h1>
// }


// name with checklist

// function Display({name,isChecked})
// {
//     if(isChecked)
//     {
//         return <li>{name} √</li>
//     }    
//     else 
//     {
//         return <li>{name}</li>
//     }
    
// }

// function App()
// {
//     return (
//         <>
//          {/* <Display name='brijesh kumar pandey' isChecked={true} />
//          <Display name='Rakesh kumar pandey' isChecked={false} /> */}


//          <ul>
//             <h1>List of checked users</h1>
//             <Display name="brijesh" isChecked={true} />
//             <Display name="bhautik" isChecked={true} />
//             <Display name="twinkle" isChecked={true} />
//             <Display name="rageshri" isChecked={false} />
//          </ul>

//         </>
//     )
// }


// ternary operator 

// function Display({age,isChecked})
// {
   
//   return age>=18?'eligible':'not eligible';
    
// }

// function App()
// {
//     return (
//         <>
//          {/* <Display name='brijesh kumar pandey' isChecked={true} />
//          <Display name='Rakesh kumar pandey' isChecked={false} /> */}


//          <ul>
//             <h1>Age checked for voting</h1>
//             <Display age="18"  isChecked={true} />
//             <br/>
//             <Display age="10"  isChecked={false} />
//          </ul>

//         </>
//     )
// }


//logged checked systems

// function Display({email,password,isChecked})
// {
//    if(email=='bkpandey@gmail.com' && password=='b12345')
//     {
//         return 'you are Logged In successfully';

//     }

//     else 
//     {

//         return 'your email and password are incorrect try again';
//     }
    
// }

// function App()
// {
//     return (
//         <>
//          {/* <Display name='brijesh kumar pandey' isChecked={true} />
//          <Display name='Rakesh kumar pandey' isChecked={false} /> */}


//          <ul>
//            <h1>Logged in status</h1>
//            {/* <Display email='bkpandey@gmail.com' password="b12345"  isChecked={true} /> */}

//            <Display email='bkpandey@gmail.com' password="b12345545"  isChecked={false} />
//          </ul>

//         </>
//     )
// }


//odd even

function Display({number,isChecked})
{
    if(isChecked)
    {
        if(number%2==0)
            {
                return 'Number is even';
            }
            
    }    

    else 
    {
        return 'Number is odd';
    }
}

function App()
{
    return (
        <>
         {/* <Display number='10' isChecked={true} /> */}

         <Display number='11' isChecked={false} />
        </>
    )
}



export default App