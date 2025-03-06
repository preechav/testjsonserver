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


function App() {
  

  return (
    <>
            {/* <Header />
      Preecha Vong <br />
      <IconA />
      <Image imageUrl="https://fastly.picsum.photos/id/582/200/300.jpg?hmac=dU7Y_b9LUlVjAWIZ7AJRvue6QpYvaEkOFbUj75FrFAc" /> */}
      <div className="App">
        <Nav />
        <div className="container">
          <Route exact = {true} path = "/" Component={Home} />
          <Route exact path = "/abount" Component={AboutPage} />
          <Route exact path = "/contact" Component={Contact} />
        </div>

        <div className="container">
            
            <h1> preecha </h1>
    


         </div>
      </div>
    </>
  )
}

export default App
