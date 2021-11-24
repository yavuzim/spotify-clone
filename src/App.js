import React from "react";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Premium from "./pages/Premium";
import Support from "./pages/Support";
import Download from "./pages/Download";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

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
