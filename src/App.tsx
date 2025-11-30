import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Featured from './components/sections/Featured'
import Contact from './components/sections/Contact'
import AboutUsPage from './components/pages/AboutUsPage'
import ProductPage from './components/pages/ProductPage'
import SEO from './components/lib/SEO'

function Home() {
  return (
    <>
      <SEO 
        title="Premium Cocoa Beans Supplier | Fermented, Raw Nibs & Cocoa Husk | SWB Enterprises"
        description="Leading supplier of premium single-origin cocoa beans, raw cocoa nibs, and cocoa husk. Ethically sourced, sustainably processed cocoa products for chocolate makers and food manufacturers worldwide."
        keywords="cocoa beans, fermented cocoa beans, raw cocoa nibs, cocoa husk, premium cocoa supplier, single origin cocoa, organic cocoa, fair trade cocoa, chocolate making supplies, bulk cocoa beans, G2 cocoa beans, GF beans, FF beans"
        ogImage="https://yourdomain.com/images/2.jpg"
        canonicalUrl="https://yourdomain.com/"
      />
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
        <Route path="/products/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
