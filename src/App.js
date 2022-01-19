
import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css"
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from  "./components/Works/Works"
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact"

const App = () => {
    return (
        <div>
        <Header/>
        <About/>
        <Works/>
        <Footer />
        <Contact/>
        
        </div>
    )
}

export default App;
