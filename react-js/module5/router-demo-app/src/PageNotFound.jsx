import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
function PageNotFound()
{
    return (
        <>
        <Navbar />
        <Container className="mt-5 p-4 shadow">
            <h2>Page Not Found 404 errors</h2>
            <img src="https://cdn.svgator.com/images/2024/04/detective-animation-404-error-page.gif" alt="404" className="img-fluid w-50" />
        </Container>

        <Footer />
        </>
    )
} 

export default PageNotFound