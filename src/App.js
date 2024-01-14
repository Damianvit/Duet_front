import React from "react";
import { Routes, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import PropertyList from "./components/PropertyList";
import PropertyData from "./components/PropertyData";
const App = () => {
    return (
        <div className="App">
            <Routes className="main">
                <Route exact path="/" element={<Layout />} />
                <Route exact path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
            <NavBar />
        </div>
    );
};

export default App;
