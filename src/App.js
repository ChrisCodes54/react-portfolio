
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/App.css"
import NavBar from "./components/Navbar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Works from  "./components/Works/Works"


const App = () => {
    return (
        <div>
        <NavBar/>
        <Header/>
        <About/>
        <Works/>
        </div>
    )
}

export default App;
