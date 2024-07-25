import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
// portfolio app

import './assets/user/css/style.css';
import './assets/user/css/experience_style.css';
import './assets/user/css/project_style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// user panel routing
import Layout from './components/user/Layout';
import Contact from './components/user/Contact';
//portfolio admin panel modules 
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import ManageCustomer from './components/admin/ManageCustomer';
import AddPortfolio from './components/admin/AddPortfolio';
import AddAbstract from './components/admin/AddAbstract';
import AddSkills from './components/admin/AddSkills';
import AddClient from './components/admin/AddClient';
import ManageContacts from './components/admin/ManageContacts';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/contact-us' element={<Contact />} />
       {/*<Admin panel Routing />*/}
   <Route path='/admin-login' element={<AdminLogin />} />
   <Route path='/admin-login/admin-dashboard' element={<AdminLayout />} />
   <Route path='/admin-login/manage-customer' element={<ManageCustomer />} />
   <Route path='/admin-login/add-portfolio' element={<AddPortfolio />} />
   <Route path='/admin-login/add-abstract' element={<AddAbstract />} />
   <Route path='/admin-login/add-skills' element={<AddSkills />} />
   <Route path='/admin-login/add-clients' element={<AddClient />} />
   <Route path='/admin-login/manage-contacts' element={<ManageContacts />} />
    </Routes>
   </Router>
  </React.StrictMode>,
)
