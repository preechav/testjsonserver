import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'


// import Example from './Example.jsx'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";

// 
import Home from "./pages/Home/Home.jsx" ;
import AboutPage from "./pages/About/AbountPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import App2 from './App2.jsx'
import App3 from './App3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Router> */}
      <App2 />
    {/* </Router>  */}
      

      {/* <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route  path="/home" element={<Home />} />
          <Route path="/about" element = {<AboutPage />} />
          <Route path="/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter> */}
  </StrictMode>,
)
