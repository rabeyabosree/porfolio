import HeroPage from './../../components/common/HeroPage';
import AboutPage from './../About/AboutPage';
import ContactPage from './../contact/ContactPage';
import MyProjects from './../projects/MyProjects';
import SkillPage from './../skills/SkillPage';
import Navbar from './../../components/Home/Navbar';
import Footer from './../../components/common/FooterPage';


function Home() {
  return (
    <>
     
      <HeroPage />
      <AboutPage />
      <MyProjects />
      <SkillPage />
      <ContactPage />
      <Footer />

    </>
  )
}

export default Home





