import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
function PageNotFound()
{
    return (
        <>
         <PageHeader />
        <div
className="container mt-5 aos-item"
data-aos="fade-up"
data-aos-once="true"
>
<h2>Page Not found 404 errors</h2>
<hr className="border border-1 w-25 border-dark" />



</div>


<Footer />
        </>
    )
}

export default PageNotFound