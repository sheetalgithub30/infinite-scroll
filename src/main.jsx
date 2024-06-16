import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Single from './Single.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={  <App />}></Route>
          <Route path="/image/:id" element={<Single />} />
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
