import React from 'react'
import HeroPage from './../../components/common/HeroPage';
import AboutPage from './../About/AboutPage';
import Services from './../servises/Services';
import ContactPage from './../contact/ContactPage';
import MyProjects from './../projects/MyProjects';
import SkillPage from './../skills/SkillPage';


function Home() {
  return (
    <>
  
      <HeroPage />
      <AboutPage />
      <Services />
      <MyProjects />
      <SkillPage />
      <ContactPage />
   
    </>
  )
}

export default Home





