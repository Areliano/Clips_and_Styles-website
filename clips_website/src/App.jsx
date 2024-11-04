import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import OurTeam from "./pages/OurTeam";
import OurStory from "./pages/OurStory";
import OurManifesto from "./pages/OurManifesto";
import ForShopOwners from "./pages/ForShopOwners";
import ForCustomers from "./pages/ForCustomers";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-manifesto" element={<OurManifesto />} />
        <Route path="/for-shop-owners" element={<ForShopOwners />} />
        <Route path="/for-customers" element={<ForCustomers />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}
