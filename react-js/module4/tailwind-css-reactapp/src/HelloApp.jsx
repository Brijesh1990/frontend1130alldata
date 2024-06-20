import React from "react";
function HelloApp()
{
    return (
        <>
          {/* <h1 className="text-5xl hover:text-3xl italic">Hello World</h1> */}
          <h1 className="text-5xl hover:text-3xl  font-extrabold font-serif text-neutral-400 underline">Hello World</h1>

          <h1 className="text-5xl hover:text-3xl  font-extrabold font-serif text-neutral-400 line-through">Hello World</h1>

          <h1 className="text-5xl hover:text-3xl  font-extrabold font-serif text-neutral-400 overline">Hello World</h1>
        
          <h1 className="text-5xl hover:text-3xl  font-extrabold font-serif text-neutral-400 overline bg-black">Hello World</h1>
        

          <h1 className="text-5xl hover:text-3xl  font-extrabold font-serif text-neutral-400 overline from-orange-300">Hello World</h1>
        

        
        </>
    )

}

export default HelloApp