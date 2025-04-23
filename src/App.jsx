import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Timeline from "./pages/Timeline";
import SingleTweet from "./pages/SingleTweet";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to="/about" />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/contact-us" element={<Navigate to="/contact" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<SingleTweet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
