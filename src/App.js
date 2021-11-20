import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Premium from "./components/Premium";
import Support from "./components/Support";
import Download from "./components/Download";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import { Component } from "react/cjs/react.production.min";
import react from "react";

function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/support" element={<Support />} />
        <Route exact path="/download" element={<Download />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
