import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./Components/Routes/LandingPage";
import NavLinks from "./Components/Routes/NavLinks";
import Help from "./Components/Routes/Help";
import Contact from "./Components/Routes/Contact";
import Admin from "./Components/Routes/Admin";

import "./Styles/Main.css"
const App = () =>{
  return(
    <BrowserRouter>
      <React.Fragment>
       <NavLinks/>

        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/help" element={<Help/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<h2> 404 - Page Not Found </h2>}/>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  )
}

export default App