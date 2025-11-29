import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Featured from './components/sections/Featured'
import Contact from './components/sections/Contact'
import AboutUsPage from './components/pages/AboutUsPage'

function Home() {
  return (
    <>
      <Landing />
      <About />
      <Featured />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className='max-w-[1920px] flex flex-col items-center justify-center mx-auto'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
