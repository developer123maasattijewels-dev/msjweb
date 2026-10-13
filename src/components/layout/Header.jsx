import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Drawer, Modal, Input, Badge, Button, Tooltip } from 'antd'
import {
  SearchOutlined,
  HeartOutlined,
  MenuOutlined,
  CalendarOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
  CrownOutlined,
} from '@ant-design/icons'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  const quickSearches = [
    'Rajputana Polki Choker',
    'Solitaire Engagement Rings',
    'Temple Jadau Bangles',
    'Chandbali Earrings',
    'Diamond Tennis Bracelets',
    '22K Gold Mangalsutra',
  ]

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/products' },
    { name: 'About Atelier', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Our Artisans', path: '/our-team' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Luxury Announcement Ticker */}
      <div className="bg-[#24201a] text-[#e8dfcf] py-2 px-4 text-xs font-medium tracking-wider border-b border-[#3d362c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-[#d8c39b]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d8c39b] animate-pulse"></span>
            <span>Jaipur Flagship Atelier</span>
            <span className="text-[#6d6355]">|</span>
            <span className="text-[#eee4d4]">Complimentary Insured Delivery Across India</span>
            <span className="hidden lg:inline text-[#6d6355]">|</span>
            <span className="hidden lg:inline text-[#d8c39b]">100% BIS Hallmarked &amp; IGI Certified</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#cfc5b6]">
            <span className="hidden sm:inline">Live Gold: <strong className="text-[#ecd6ae]">24K ₹74,250/10g</strong></span>
            <span className="text-[#6d6355] hidden sm:inline">•</span>
            <a
              href="tel:+911414517725"
              className="hover:text-[#ecd6ae] transition-colors flex items-center gap-1.5 text-inherit no-underline"
            >
              <PhoneOutlined /> +91 141 451 7725
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#fbf9f5]/95 backdrop-blur-md border-b border-[#ece4d6] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Left: Mobile Menu Toggle & Desktop Primary Nav */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#2c261e] hover:text-[#b89b69] transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <MenuOutlined className="text-xl" />
              </button>

              <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-semibold text-[#5c5448]">
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition-colors no-underline relative py-1 ${
                      location.pathname === link.path
                        ? 'text-[#b89b69] font-bold'
                        : 'text-[#4e463a] hover:text-[#b89b69]'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b89b69]" />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Center: Regal Brand Monogram & Title */}
            <div className="text-center">
              <Link to="/" className="inline-block no-underline group">
                <span className="block font-serif text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] font-medium text-[#26211a] group-hover:text-[#b89b69] transition-colors">
                  Maa Satti Jewels
                </span>
                <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.32em] text-[#93836d] -mt-1 font-sans">
                  Jaipur · Haute Joaillerie · Est. 1984
                </span>
              </Link>
            </div>

            {/* Right: Actions, Search, Wishlist, Concierge */}
            <div className="flex items-center gap-3 sm:gap-5">
              <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-[0.14em] uppercase font-semibold text-[#5c5448] mr-2">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`transition-colors no-underline relative py-1 ${
                      location.pathname === link.path
                        ? 'text-[#b89b69] font-bold'
                        : 'text-[#4e463a] hover:text-[#b89b69]'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b89b69]" />
                    )}
                  </Link>
                ))}
              </nav>

              {/* Search Trigger */}
              <Tooltip title="Search Curated Jewels">
                <button
                  type="button"
                  onClick={() => setSearchModalOpen(true)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[#463e32] hover:bg-[#eee6d7] transition-colors"
                  aria-label="Search"
                >
                  <SearchOutlined className="text-lg" />
                </button>
              </Tooltip>

              {/* VIP Concierge Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#29241d] hover:bg-[#b89b69] text-[#fbf9f5] hover:text-[#1e1912] text-xs font-semibold uppercase tracking-[0.16em] no-underline transition-all duration-300 shadow-sm"
              >
                <CalendarOutlined />
                <span>Book Salon VIP</span>
              </Link>
            </div>

          </div>
        </div>
      </header>

      {/* Ant Design Search Modal */}
      <Modal
        open={searchModalOpen}
        onCancel={() => setSearchModalOpen(false)}
        footer={null}
        centered
        width={680}
        styles={{
          content: {
            padding: '32px',
            backgroundColor: '#faf8f4',
            border: '1px solid #e5dccf',
          },
        }}
      >
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#93836d] font-bold">Atelier Search</p>
            <h3 className="font-serif text-2xl text-[#29241d] font-normal mt-1">Discover Exceptional Pieces</h3>
          </div>

          <div className="relative">
            <Input
              size="large"
              placeholder="Search by collection, 22K Polki, Solitaires, Emeralds..."
              prefix={<SearchOutlined className="text-[#988770] text-lg mr-2" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-3 px-4 text-base border-[#cfc2ae] hover:border-[#b89b69] focus:border-[#b89b69] bg-white rounded-none"
              allowClear
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#7e7261] mb-2.5">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="px-3 py-1.5 bg-white border border-[#ded5c7] hover:border-[#b89b69] hover:text-[#b89b69] text-xs text-[#52493d] transition-colors rounded-none"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-[#e8ded0] flex items-center justify-between text-xs text-[#7c7161]">
            <span>Need personalized styling?</span>
            <Link
              to="/contact"
              onClick={() => setSearchModalOpen(false)}
              className="text-[#b89b69] hover:underline font-semibold flex items-center gap-1"
            >
              Consult Gemologist <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </Modal>

      {/* Ant Design Responsive Drawer for Mobile */}
      <Drawer
        title={
          <div className="py-2">
            <span className="font-serif text-xl font-normal text-[#29241d] block">Maa Satti Jewels</span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#93836d] block font-sans">Jaipur Haute Joaillerie</span>
          </div>
        }
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        styles={{
          header: { background: '#faf8f4', borderBottom: '1px solid #ebd5b9' },
          body: { background: '#faf8f4', padding: '24px' },
        }}
      >
        <div className="flex flex-col justify-between h-full space-y-8">
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base uppercase tracking-[0.12em] font-medium transition-colors no-underline py-2 border-b border-[#eee4d6] flex items-center justify-between ${
                    location.pathname === link.path ? 'text-[#b89b69] font-bold' : 'text-[#383127]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRightOutlined className="text-xs text-[#b89b69]" />
                </Link>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#2a241d] text-[#fbf9f5] flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold no-underline"
              >
                <CalendarOutlined /> Book Salon Appointment
              </Link>
              <a
                href="https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25D366] text-white flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold no-underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="border-t border-[#e2d7c5] pt-4 text-xs text-[#716657] space-y-1">
            <p className="font-semibold text-[#2f271e]">Jaipur Flagship Atelier:</p>
            <p>F-60, EPIP, Sitapura, Jaipur, Rajasthan 302022</p>
            <p className="pt-2 text-[#b89b69]">Direct Desk: +91 141 451 7725</p>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default Header
