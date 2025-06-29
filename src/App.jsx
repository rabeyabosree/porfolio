
import Home from './pages/Home/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/common/FooterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatApp from './pages/Chatapp/ChatApp';
import AboutPage from './pages/About/AboutPage';
import Services from './pages/servises/Services';
import ContactPage from './pages/contact/ContactPage';

function App() {
  return (
    // Wrap everything inside the Router
    <Router>
     <Navbar />
        {/* Routing to Chat App */}
        <Routes>
          <Route path="/chat" element={<ChatApp/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/service" element={<Services/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
  <Footer />
    </Router>
  );
}

export default App;
