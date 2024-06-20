import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
function Layout()
{
    return (
        <>
          {/* ecomm header */}
          <Header />
          {/* ecomme content */}
          <Content />
          {/* ecomm footer */}
          <Footer />
        </>
    )
}

export default Layout