import './App.css'
import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { darkTheme, lightTheme } from './utils/Themes'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Skills from './components/Skills/Skills'

import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects'
import ProjectDetails from "./components/ProjectDetails";
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
overflow-x: hidden;
`;
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />

          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>

  )
}

export default App;
