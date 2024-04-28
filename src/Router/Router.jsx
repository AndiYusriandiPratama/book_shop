import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound/NotFound";

import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
