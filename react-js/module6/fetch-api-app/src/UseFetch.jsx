import React from 'react'
import useFetch from 'react-fetch-hook' //useFetch() is also called customHooks
function ApiFetch()
{

    // destructuring of data using useFetch
    const{data:posts, isLoading, error}=useFetch('https://jsonplaceholder.typicode.com/users');
    // show a loading messages
    if(isLoading)
    {
        return <h1>Your data is loading.....</h1>
    }
    if(error)
    {
        return <div className='err'>Errors while loading api please check networks connections</div>
    }



    return (
        <>

        {/* applied map functions */}

        {posts && posts.map((row)=>{
            return (
                <>
                    <h4>Name of users is :{row.name}</h4>
                    <p>Email of users is :{row.email}</p>
                </>
            )
        })}

        </>
    )
}

export default ApiFetch