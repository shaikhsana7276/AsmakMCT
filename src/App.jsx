import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Location from "./pages/Location";
import Product from "./pages/Product"
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
<Route path="/products"element={<Product/>}/>
        <Route path="/Location" element={<Location />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
