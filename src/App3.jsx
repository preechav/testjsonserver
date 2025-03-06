import Header from "./components/Header.jsx"
import { IconA,IconB } from "./components/Icon.jsx"
import Image from "./components/Image.jsx"

// 
import Home from "./pages/Home/Home.jsx" ;
import AboutPage from "./pages/About/AbountPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";

//Nav
import Nav from "./components/Nav.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App3() {
  

  return (
    <>
            {/* <Header />
      Preecha Vong <br />
      <IconA />
      <Image imageUrl="https://fastly.picsum.photos/id/582/200/300.jpg?hmac=dU7Y_b9LUlVjAWIZ7AJRvue6QpYvaEkOFbUj75FrFAc" /> */}
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="container">
            <Routes>

              <Route path="/home" element={<Home />} />
              <Route path="/about" element = {<AboutPage />} />
              <Route path="contact" element = {<Contact />} />
            </Routes>
          </div> 
        </BrowserRouter>       
      </div>
    </>
  )
}

export default App3
