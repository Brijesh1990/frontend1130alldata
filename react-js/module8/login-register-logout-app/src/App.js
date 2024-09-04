import { Container, Row, Col } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
return (
<Container className="mt-5 p-5" style={{ width: "400px" }}>
<Row>
<Col>
<Router>
<UserAuthContextProvider>
<Routes>
<Route path="/home" element={<ProtectedRoute> <Home /></ProtectedRoute>}/>
<Route path="/" element={<Login />} />
<Route path="/signup" element={<Signup />} /></Routes></UserAuthContextProvider>
</Router>
</Col>
</Row></Container>
);
}
export default App;