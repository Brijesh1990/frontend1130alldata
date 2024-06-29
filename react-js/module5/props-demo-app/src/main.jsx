import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/Name'
// import Garage from './components/Name'
import Address from './components/Address'
import 'bootstrap/dist/css/bootstrap.min.css'
import StudentDetails from './components/StudentsDetails'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App name="Brijesh" /> */}
{/* 
    <Garage /> */}
{/* 
   <Address name="Brijesh" place="Rajkot" address="150 feet ring road Rajkot" /> */}

  <StudentDetails />

  </React.StrictMode>,
)
