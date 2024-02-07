import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Sustainability from "./pages/Sustainability";

import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProduct from "./pages/AllProduct";
import NewCollection from "./pages/NewCollection";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/newCollection" element={<NewCollection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
