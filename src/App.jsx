import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Product_Detail_Component from "./pages/Product_Detail_Component";
import DashboardLayout from "./Layout/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Main />} />

          <Route path="/product/:id" element={<Product_Detail_Component />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
