import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Fullstack from "./pages/Fullstack";
import Testing from "./pages/Testing";
import DigitalMarketing from "./pages/DigitalMarketing";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Academics from "./pages/Academics";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />}>
            <Route path="full-stack-java-course" element={<Fullstack />} />
            <Route path="software-testing" element={<Testing />} />
            <Route
              path="digital-marketing-course"
              element={<DigitalMarketing />}
            />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
