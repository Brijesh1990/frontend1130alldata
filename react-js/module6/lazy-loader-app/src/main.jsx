import React from 'react'
import ReactDOM from 'react-dom/client'
import LazyLoader from './components/LazyLoader'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyLoader />
  </React.StrictMode>,
)
