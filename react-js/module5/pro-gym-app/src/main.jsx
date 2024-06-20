import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/user/css/style.css'
// user panel components
import Layout from './Layout'
import Contact from './components/user/Contact'
import PageNotFound from './components/user/PageNotFound'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* routing of pro gym app */}
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
