import "./App.css";
import Home from "./components/react-router/Home";
import Contact from "./components/react-router/Contact";
import About from "./components/react-router/About";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import NotFound from "./components/react-router/NotFound";
import Product from "./components/react-router/Product";

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
