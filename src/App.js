import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import About from "./pages/About";
import Sustainability from "./pages/Sustainability";

import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProduct from "./pages/AllProduct";
import NewCollection from "./pages/NewCollection";
import Information from "./pages/Information";

import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/newCollection" element={<NewCollection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information/:id" element={<Information />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
