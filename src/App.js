import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import ServicePage from "./Components/ServicePage"
import UseCasePage from "./Components/UseCasePage";
import Pricing from "./Components/Pricing";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/usecasepage" element={<UseCasePage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
