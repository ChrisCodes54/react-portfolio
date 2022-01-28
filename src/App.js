
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header/Header";
import Homepage from './Pages/Homepage';
import About from "./Pages/About";
import Works from  "./Pages/Works"
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
    return (
        <div>
            <Router> 
        <NavBar/>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Works/>} />
        </Routes>
        </Router>

        <Footer />
        
        
        </div>
    )
}

export default App;
