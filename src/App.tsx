import './App.css'
import About from './components/about/about'
import GradientBackground from './components/background/gradient'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import { Hero, Scroll, Social } from './components/hero/hero'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'

function App() {
  return (
    <>
      <Header />
      <div id="Hero" className='h-fit relative'>
        <div className='absolute h-full w-full'>
          <GradientBackground />
        </div>
        <div className='h-fit flex flex-col'>
          <Hero />
          <Social />
          <Scroll />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
