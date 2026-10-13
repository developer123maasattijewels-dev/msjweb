import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
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

const luxuryTheme = {
  token: {
    colorPrimary: '#b89b69',
    colorInfo: '#b89b69',
    colorSuccess: '#3e7b57',
    colorWarning: '#c99638',
    colorError: '#b83b3b',
    colorTextBase: '#25211b',
    colorBgBase: '#ffffff',
    borderRadius: 2,
    fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Button: {
      colorPrimary: '#b89b69',
      colorPrimaryHover: '#a38450',
      colorPrimaryActive: '#8f723f',
      borderRadius: 2,
      controlHeight: 44,
      fontFamily: '"DM Sans", sans-serif',
      letterSpacing: '0.06em',
    },
    Tabs: {
      itemSelectedColor: '#b89b69',
      inkBarColor: '#b89b69',
      itemHoverColor: '#a38450',
      titleFontSize: 15,
      horizontalMargin: '0 0 24px 0',
    },
    Modal: {
      contentBg: '#ffffff',
      headerBg: '#ffffff',
      borderRadiusLG: 4,
    },
    Drawer: {
      colorBgElevated: '#ffffff',
    },
    Collapse: {
      contentBg: '#faf8f5',
      borderRadiusLG: 2,
    },
    Rate: {
      colorFillContent: '#e2d7c5',
    },
  },
}

const App = () => {
  return (
    <ConfigProvider theme={luxuryTheme}>
      <BrowserRouter>
        <div className='flex min-h-screen flex-col bg-[#faf8f5] text-[#25211b]'>
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
    </ConfigProvider>
  )
}

export default App
