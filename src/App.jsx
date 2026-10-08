import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contactus'
import Products from './components/pages/Products'
import Gallery from './components/pages/Gallery'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsPolicy from './components/pages/TermsPolicy'
import OurTeam from './components/pages/OurTeam'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex min-h-screen flex-col'>
        <Header />
        <main className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-policy" element={<TermsPolicy />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
