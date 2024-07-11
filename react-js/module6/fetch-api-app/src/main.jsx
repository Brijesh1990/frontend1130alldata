import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import ApiApp from './ApiApp.jsx'
import ApiFetch from './UseFetch.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ApiApp /> */}
     <ApiFetch />
  </React.StrictMode>,
)
