import React from "react";
import { Container,Row,Card,CardHeader,CardBody } from "react-bootstrap";
const std=[
    {
        id:'1001',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwNpoWSi1dRcZYTrlzbPb0zmfhh5SBbG2fFg&s",
        name:"Rageshri Tevani",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },
    {
        id:'1002',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBNqQiUOfbPw3m_t5RLhw5M87r_1J9EIYqg&s",
        name:"Ridhi Parmar",
        department:"IT",
        address:"150 feet ring road rajkot"
    },
    {
        id:'1003',
        photo:"https://media.gettyimages.com/id/1293903541/photo/young-woman-stock-photo.jpg?s=170667a&w=gi&k=20&c=t-0psaLjBoTk90-LVzXiCWNqXsHB8Uu6V5uiiUzniLo=",
        name:"Twinkle Thesiya",
        department:"CSE",
        address:"150 ffet ring road rajkot"
    },
    {
        id:'1004',
        photo:"https://english.cdn.zeenews.com/sites/default/files/2017/11/17/639329-indian-men.jpg",
        name:"Kayum",
        department:"CSE",
        address:"150 ffet ring road rajkot"
    },
    {
        id:'1005',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfyChEvs6WEXQ26EyYdUZp-AtGM2QjSsGRA&s",
        name:"Prateek",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },
    {
        id:'1006',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErJRnhpdGZVd7lw7Ki9mvA54Cr4tIqrBccw&s",
        name:"Bhautik",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },

    {
        id:'1006',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErJRnhpdGZVd7lw7Ki9mvA54Cr4tIqrBccw&s",
        name:"Bhautik",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },

    {
        id:'1006',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErJRnhpdGZVd7lw7Ki9mvA54Cr4tIqrBccw&s",
        name:"Bhautik",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },

    {
        id:'1006',
        photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErJRnhpdGZVd7lw7Ki9mvA54Cr4tIqrBccw&s",
        name:"Bhautik",
        department:"CSE",
        address:"150 feet ring road rajkot"
    },



]
function StudentDetails()
{
    return (
        <>
         <Container className="p-5 mt-0">
            <h3 className="text-primary">All my students details of react Batch on 11:30am</h3>
           
            <Row>
                {std && std.map((items)=>{
                    return(
                        <>
                <div className="col-md-4 mt-4">
                    <Card>
                        <CardHeader className="bg-primary text-white">Details of Students </CardHeader>
                        <CardBody style={{fontSize:"10px"}}>
                         <p>id is :{items.id}</p>  
                         <p><img src={items.photo} alt="photo" style={{width:"100%", height:"150px"}} /></p>  
                         <p>{items.name}</p>
                         <p>{items.department}</p>
                         <p>{items.address}</p>
                           
                        </CardBody>
                    </Card>
                </div>

                        </>
                    ) 
                })}
                
            </Row>
         
         
         </Container>


        </>
    )
}

export default StudentDetails