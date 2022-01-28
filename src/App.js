
import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css"
import Header from "./components/Header/Header";
import About from "./Pages/About";
import Works from  "./Pages/Works"
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <div>
            <Router> 
        <Header/>
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
       <Route path="/about" element={<About/>} />
        <Route path="/works" element={<Works/>} />
        </Routes>
        </Router>

        <Footer />
        
        
        </div>
    )
}

export default App;
