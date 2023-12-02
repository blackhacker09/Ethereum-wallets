import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Data from "./components/Data";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/data" element={<Data />} />
            </Routes>
        </Router>
    );
};

export default App;
