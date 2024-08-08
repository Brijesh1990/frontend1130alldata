import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Layout from './Layout'
import DeleteData from './DeleteData'
import EditTask from './EditTask'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/delete-task/:id' element={<DeleteData />}></Route>
          <Route path='/edit-task/:id' element={<EditTask />}></Route>
        </Routes>
      </Router>
    </>
  )
}
