
import Home from './pages/Home/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/common/FooterPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatApp from './pages/Chatapp/ChatApp';
import AboutPage from './pages/About/AboutPage';
import Services from './pages/servises/Services';
import ContactPage from './pages/contact/ContactPage';
import Layout from './components/common/Layout';
import MyProjects from './pages/projects/MyProjects';
import SkillPage from './pages/skills/SkillPage';

function App() {
  return (
    // Wrap everything inside the Router
    <Router>
      <Layout>
        <Navbar />
       
        <Routes>
          <Route path="/chat" element={<ChatApp />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<MyProjects />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
