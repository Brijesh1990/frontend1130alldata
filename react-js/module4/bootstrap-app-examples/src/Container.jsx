import React from "react";
// import { Container,Modal,ModalBody,ModalDialog } from "react-bootstrap";
import { Container } from "react-bootstrap";
function ContainerApp()
{
    return (
        <>
             {/* <Container className="bg-info p-5">

             <h1 className="text-center p-4 text-danger">Call my : (+91)9998003879</h1>

             </Container>

             <Container fluid className="bg-primary p-5 mt-4">

             <h1 className="text-center p-4 text-white">Call my : (+91)9998003879</h1>

             </Container> */}


             <Container className="p-5 mt-5 shadow w-50 mx-auto">
                <button type="button" className="btn btn-sm btn-primary text-white" data-bs-toggle="modal" data-bs-target="#login">Login here</button>
             </Container>

             {/* modal load here */}
             {/* <Modal className="modal fade" id="login" role="dialog">
                <ModalDialog className="modal-dialog">
                <ModalBody className="p-5">
                <span className="rounded-circle p-5">Users</span>

                </ModalBody>
                </ModalDialog>
             </Modal> */}

             <div className="modal fade" id="login" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content p-5">

                        
                    </div>
                </div>
             </div>
             
          

{/* 
             <Modal id="login" role="dialog">
                <ModalDialog>
                <ModalBody className="p-5">
                <span className="rounded-circle p-5">Users</span>

                </ModalBody>
                </ModalDialog>
             </Modal> */}
        </>
    )
}
export default ContainerApp