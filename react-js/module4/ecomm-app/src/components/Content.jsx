import React from "react";
import { MDBContainer,MDBRow } from "mdb-react-ui-kit";
import products from '../assets/images/pic.png'
import product1 from '../assets/images/product1.png'
import product2 from '../assets/images/product2.png'
import product3 from '../assets/images/product3.png'
import product4 from '../assets/images/product4.png'
import product5 from '../assets/images/product5.png'
function Content()
{
return (
<>
<MDBContainer className="p-5">
<MDBRow>
<div className="col-md-4 bg-dark p-4">
<h1 className="text-center text-white"><span className="bi bi-fire"></span></h1>
<h1 className="text-center text-white">Popular Product</h1> 
<p className="text-center text-white">For more details visit Our branch</p>
</div>

<div className="col-md-7 ms-5 bg-primary p-4">
<MDBRow>
<div className="col-md-6">
<h1 className="text-white p-2 ms-2">New Lifestyle</h1>
<h4 className="text-white p-2 ms-2">Buy Now</h4>
<a className="text-dark p-2 ms-3 btn btn-lg btn-white bg-white">Order Now</a>
</div>
<div className="col-md-6">
<img src={products} className="img-fluid w-100 products-girls" />
</div>


{/* display products */}


</MDBRow>
</div>
</MDBRow>

<MDBRow>
<div className="col-md-4 mt-4 shadow p-2">
<img src={product1} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


<div className="col-md-4 mt-4 shadow p-2">
<img src={product2} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


<div className="col-md-4 mt-4 shadow p-2">
<img src={product3} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


<div className="col-md-4 mt-4 shadow p-2">
<img src={product4} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


<div className="col-md-4 mt-4 shadow p-2">
<img src={product5} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


<div className="col-md-4 mt-4 shadow p-2">
<img src={product1} alt="products" className="img-fluid w-75 ms-5" />
<h4 className="text-center">Addidas sports shoes</h4>
<h5 className="text-center"><del>Rs.4500-/</del>Rs.3500-/</h5>
<h4 className="text-center"><button type="button" className="btn btn-sm btn-dark text-white">Click for Details</button></h4>
</div>


</MDBRow>
</MDBContainer>
</>
)
}

export default Content