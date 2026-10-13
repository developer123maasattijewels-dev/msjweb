import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Carousel,
  Tabs,
  Modal,
  Drawer,
  Rate,
  Badge,
  Tag,
  Tooltip,
  Collapse,
  Button,
  Input,
  InputNumber,
  Select,
  DatePicker,
  FloatButton,
  message,
} from 'antd'
import {
  HeartOutlined,
  HeartFilled,
  EyeOutlined,
  ShoppingOutlined,
  WhatsAppOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  CrownOutlined,
  StarFilled,
  ClockCircleOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  ShareAltOutlined,
  CalculatorOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import './Home.css'

// Image helper with high-res Unsplash CDN
const imageUrl = (photoId, width = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`

// Hero slides for Ant Design Carousel
const heroSlides = [
  {
    id: 1,
    tag: 'Haute Joaillerie Jaipur · Est. 1984',
    title: 'The Royal Rajputana',
    subtitle: 'Bridal Heirloom Edit',
    description:
      'Immerse in centuries of Jaipuri royalty. Masterfully handcrafted 22K Jadau, uncut Polki diamonds, and untreated Zambian emeralds sculpted for once-in-a-lifetime vows.',
    image: 'photo-1599643477877-530eb83abc8e',
    ctaPrimary: 'Explore Bridal Vault',
    ctaSecondary: 'Book Private Viewing',
    specs: '22K Purity · 100% BIS Hallmarked · Heritage Polki',
  },
  {
    id: 2,
    tag: 'Johari Bazaar Heritage Craft',
    title: 'Generations of Karigari',
    subtitle: 'Timeless Meenakari & Gold',
    description:
      'From the royal ateliers of Jaipur to your modern sanctuary. Hand-carved gold, vibrant glass enamel, and natural Basra pearls that tell unforgettable stories.',
    image: 'photo-1611652022419-a9419f74343d',
    ctaPrimary: 'Discover Heirlooms',
    ctaSecondary: 'Meet Our Artisans',
    specs: 'Hand-enameled · Uncut Diamonds · 40+ Years Legacy',
  },
  {
    id: 3,
    tag: 'Solitaire & Fine Diamonds',
    title: 'The Modern Solitaire',
    subtitle: 'Conflict-Free Radiance',
    description:
      'Precision-cut natural diamonds certified by GIA & IGI. Set in warm 18K rose and yellow gold to celebrate your quiet victories and eternal promises.',
    image: 'photo-1605100804763-247f67b3557e',
    ctaPrimary: 'Explore Solitaires',
    ctaSecondary: 'Custom Ring Studio',
    specs: 'IGI Certified · VVS-VS Clarity · Ideal Cut Brilliance',
  },
  {
    id: 4,
    tag: 'Modern Everyday Luxury',
    title: 'Everyday 18K Gold',
    subtitle: 'Effortless Subtle Splendour',
    description:
      'Sculptural kadas, featherweight chain necklaces, and diamond-studded huggies designed to live with you through morning sun to twilight dinners.',
    image: 'photo-1535632066927-ab7c9ab60908',
    ctaPrimary: 'Shop Daily Gold',
    ctaSecondary: 'Curated Gifts',
    specs: 'Lightweight · BIS 750 Gold · Tarnish Resistant',
  },
]

// Curated jewelry silhouettes / categories
const categories = [
  {
    id: 'chokers',
    name: 'Royal Chokers & Haar',
    count: '38 Designs',
    image: 'photo-1599643477877-530eb83abc8e',
    tag: 'Bridal Icon',
  },
  {
    id: 'earrings',
    name: 'Chandbalis & Jhumkas',
    count: '64 Designs',
    image: 'photo-1535632066927-ab7c9ab60908',
    tag: 'Bestseller',
  },
  {
    id: 'kadas',
    name: 'Jadau Kadas & Bangles',
    count: '42 Designs',
    image: 'photo-1611652022419-a9419f74343d',
    tag: 'Handcrafted',
  },
  {
    id: 'rings',
    name: 'Solitaire & Statement Rings',
    count: '55 Designs',
    image: 'photo-1605100804763-247f67b3557e',
    tag: 'IGI Certified',
  },
  {
    id: 'mathapatti',
    name: 'Mathapattis & Haathphool',
    count: '24 Designs',
    image: 'photo-1617038220319-276d3cfab638',
    tag: 'Royal Rajputana',
  },
  {
    id: 'pendants',
    name: 'Mangalsutras & Pendants',
    count: '49 Designs',
    image: 'photo-1599643478518-a784e5dc4c8f',
    tag: 'Everyday Gold',
  },
  {
    id: 'mens',
    name: "Men's Heritage Jewels",
    count: '18 Designs',
    image: 'photo-1611591437281-460bfbe1220a',
    tag: 'Royal Brooches',
  },
  {
    id: 'gemstones',
    name: 'Uncut Emeralds & Polki',
    count: '31 Designs',
    image: 'photo-1515562141207-7a88fb7ce338',
    tag: 'Rare Earth',
  },
]

// Detailed catalog items
const productsVault = [
  {
    id: 'p1',
    name: 'The Mehrangarh Royal Polki Choker',
    category: 'bridal',
    karat: '22K Gold',
    grossWeight: '58.40g',
    netGoldWeight: '46.10g',
    gemstones: 'Natural Uncut Polki, Russian Emerald Beads & Pearls',
    hallmark: 'BIS 916 HUID Laser Certified',
    price: 345000,
    rating: 5.0,
    reviewsCount: 34,
    badge: 'Bestseller',
    image: 'photo-1599643477877-530eb83abc8e',
    description:
      'A masterpiece reminiscent of royal Rajputana courts. Handcrafted in 22K yellow gold with natural uncut Polki diamonds framed by lush emerald beads.',
  },
  {
    id: 'p2',
    name: 'Padmavati Jadau Kundan Chandbalis',
    category: 'bridal',
    karat: '22K Gold',
    grossWeight: '26.80g',
    netGoldWeight: '22.30g',
    gemstones: 'Natural Seed Pearls, Burmese Rubies & Polki',
    hallmark: 'BIS 916 Hallmarked',
    price: 128000,
    rating: 4.9,
    reviewsCount: 52,
    badge: 'Royal Heirloom',
    image: 'photo-1535632066927-ab7c9ab60908',
    description:
      'Flawless crescent moon chandbalis finished with traditional Jaipur Meenakari enamelling on the reverse and dangling micro seed pearls.',
  },
  {
    id: 'p3',
    name: 'The Jaipur Noor Solitaire Diamond Ring',
    category: 'solitaires',
    karat: '18K Rose Gold',
    grossWeight: '5.20g',
    netGoldWeight: '4.95g',
    gemstones: '1.25 Carat Natural Diamond, VVS1, E Color (IGI Certified)',
    hallmark: 'BIS 750 & IGI Laser Inscribed',
    price: 210000,
    rating: 5.0,
    reviewsCount: 29,
    badge: 'IGI Certified',
    image: 'photo-1605100804763-247f67b3557e',
    description:
      'A singular brilliant-cut solitaire held securely in a six-prong platinum crown atop an 18K warm rose gold pave band.',
  },
  {
    id: 'p4',
    name: 'Sunehri Meenakari Kada Pair',
    category: 'polki',
    karat: '22K Pure Gold',
    grossWeight: '44.50g',
    netGoldWeight: '41.20g',
    gemstones: 'Jaipur Gulabi Meenakari & Uncut Jadau Stones',
    hallmark: 'BIS 916 HUID Certified',
    price: 285000,
    rating: 4.8,
    reviewsCount: 19,
    badge: 'Jaipur Mastercraft',
    image: 'photo-1611652022419-a9419f74343d',
    description:
      'A pair of openable screw kadas featuring intricately engraved floral motifs and royal peacock Meenakari enameled by master Johari karigars.',
  },
  {
    id: 'p5',
    name: 'Aaditri Navratna Temple Haar',
    category: 'bridal',
    karat: '22K Antique Gold',
    grossWeight: '68.20g',
    netGoldWeight: '61.50g',
    gemstones: '9 Certified Astrological Gemstones & Kundan',
    hallmark: 'BIS 916 Hallmarked',
    price: 420000,
    rating: 5.0,
    reviewsCount: 16,
    badge: 'Limited Edition',
    image: 'photo-1599643478518-a784e5dc4c8f',
    description:
      'Inspired by eternal temple iconography, each stone is hand-selected and nestled in ancient nakashi gold relief work.',
  },
  {
    id: 'p6',
    name: 'The Riva Minimalist Diamond Pendant',
    category: 'everyday',
    karat: '18K Yellow Gold',
    grossWeight: '3.80g',
    netGoldWeight: '3.71g',
    gemstones: '0.45 Carat Round Brilliant Diamond (VS-GH)',
    hallmark: 'BIS 750 Hallmarked',
    price: 68000,
    rating: 4.9,
    reviewsCount: 47,
    badge: 'Daily Luxury',
    image: 'photo-1515562141207-7a88fb7ce338',
    description:
      'Designed for effortless layering. A floating diamond halo on a 16-inch delicate Italian gold chain.',
  },
  {
    id: 'p7',
    name: 'Rajputana Royal Haathphool',
    category: 'bridal',
    karat: '22K Gold',
    grossWeight: '34.00g',
    netGoldWeight: '29.80g',
    gemstones: 'Uncut Polki & Basra Seed Pearls',
    hallmark: 'BIS 916 Hallmarked',
    price: 195000,
    rating: 5.0,
    reviewsCount: 22,
    badge: 'Bridal Edit',
    image: 'photo-1617038220319-276d3cfab638',
    description:
      'Drapes gracefully across the hand with five delicate gold chains connecting an articulated ring to an ornate wrist cuff.',
  },
  {
    id: 'p8',
    name: 'Sitara Diamond Tennis Bracelet',
    category: 'solitaires',
    karat: '18K White Gold',
    grossWeight: '14.20g',
    netGoldWeight: '12.80g',
    gemstones: '3.20 Carat Natural Diamonds (VVS-EF)',
    hallmark: 'BIS 750 & SGL Certified',
    price: 275000,
    rating: 5.0,
    reviewsCount: 31,
    badge: 'Signature Icon',
    image: 'photo-1611591437281-460bfbe1220a',
    description:
      'A continuous ribbon of scintillating round diamonds with double safety clasp and flawless mirror polish.',
  },
]

// Lookbook Hotspots
const lookbookHotspots = [
  {
    id: 'neck',
    title: 'Mehrangarh Royal Choker',
    karat: '22K Jadau Gold',
    price: '₹3,45,000',
    top: '46%',
    left: '52%',
    image: 'photo-1599643477877-530eb83abc8e',
  },
  {
    id: 'ears',
    title: 'Padmavati Chandbalis',
    karat: '22K Kundan & Pearls',
    price: '₹1,28,000',
    top: '36%',
    left: '42%',
    image: 'photo-1535632066927-ab7c9ab60908',
  },
  {
    id: 'ring',
    title: 'The Jaipur Noor Solitaire',
    karat: '18K Rose Gold',
    price: '₹2,10,000',
    top: '72%',
    left: '58%',
    image: 'photo-1605100804763-247f67b3557e',
  },
]

// Client reviews
const testimonials = [
  {
    id: 1,
    quote:
      'Wearing Maa Satti Jewels on my wedding day felt like wearing living art. The Polki necklace has a depth and fire that photographs cannot fully capture. The Sitapura atelier team made the custom fitting an unforgettable luxury experience.',
    bride: 'Radhika Singhania',
    occasion: 'Royal Wedding · Udaipur',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 2,
    quote:
      'We flew to Jaipur specifically to visit Maa Satti after hearing about their generational Karigari. Their transparency with BIS hallmarking, gold weights, and certified stones gave us complete peace of mind. Truly the finest jewellery house in Rajasthan.',
    bride: 'Ananya & Kabir Mehta',
    occasion: 'Anniversary Heirlooms · Mumbai & London',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 3,
    quote:
      'The virtual video consultation was as seamless as being inside their private salon. Every single facet, Hallmark inscription, and pearl drop was demonstrated in high definition. Delivery was fully insured and impeccably presented.',
    bride: 'Meera Rao-Deshmukh',
    occasion: 'Bridal Trousseau · New Delhi',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
]

// Instagram / Lookbook reel wall
const instagramPosts = [
  {
    id: 1,
    photo: 'photo-1599643477877-530eb83abc8e',
    likes: '1.8k',
    caption: 'The Rajputana Choker in candlelit amber splendour.',
  },
  {
    id: 2,
    photo: 'photo-1535632066927-ab7c9ab60908',
    likes: '2.4k',
    caption: 'Handcrafted Chandbalis waiting for royal pheras.',
  },
  {
    id: 3,
    photo: 'photo-1611652022419-a9419f74343d',
    likes: '3.1k',
    caption: 'Gold kada detailing carved by our Johari Bazaar karigars.',
  },
  {
    id: 4,
    photo: 'photo-1605100804763-247f67b3557e',
    likes: '4.5k',
    caption: 'A 1.25ct Solitaire capturing the morning Jaipur light.',
  },
  {
    id: 5,
    photo: 'photo-1617038220319-276d3cfab638',
    likes: '2.9k',
    caption: 'Real bride Shivangi adorned in Maa Satti jewels.',
  },
  {
    id: 6,
    photo: 'photo-1515562141207-7a88fb7ce338',
    likes: '1.5k',
    caption: 'Subtle daily 18K luxuries, made to be treasured.',
  },
]

const Home = () => {
  const carouselRef = useRef(null)

  // Interactive state
  const [wishlist, setWishlist] = useState([])
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quickViewOpen, setQuickViewOpen] = useState(false)
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false)
  const [activeHotspot, setActiveHotspot] = useState(lookbookHotspots[0])
  const [newsletterEmail, setNewsletterEmail] = useState('')

  // Live Gold Rate Calculator state
  const [calcKarat, setCalcKarat] = useState('22K')
  const [calcGrams, setCalcGrams] = useState(25)

  // Bullion rates per gram
  const bullionRates = {
    '24K': 7425,
    '22K': 6806,
    '18K': 5568,
    '14K': 4330,
  }

  // Calculate live bullion metrics
  const metalValue = Math.round(bullionRates[calcKarat] * calcGrams)
  const makingCharges = Math.round(metalValue * 0.12) // 12% fair artisanal craft
  const gst = Math.round((metalValue + makingCharges) * 0.03) // 3% GST
  const totalEstimated = metalValue + makingCharges + gst

  // Wishlist handler
  const toggleWishlist = (product) => {
    const exists = wishlist.some((item) => item.id === product.id)
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id))
      message.info(`Removed ${product.name} from your Private Wishlist.`)
    } else {
      setWishlist([...wishlist, product])
      message.success(`Saved ${product.name} to your Private Wishlist!`)
    }
  }

  const openQuickView = (product) => {
    setSelectedProduct(product)
    setQuickViewOpen(true)
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      message.error('Please provide a valid email address.')
      return
    }
    message.success('Welcome to the Maa Satti Salon Privé Circle.')
    setNewsletterEmail('')
  }

  const handleAppointmentSubmit = () => {
    message.success(
      'Your VIP Salon Consultation has been reserved. Our Senior Gemologist will contact you within 2 hours.'
    )
    setAppointmentModalOpen(false)
  }

  // FAQ accordion items
  const faqItems = [
    {
      key: '1',
      label: (
        <span className="font-serif text-lg text-[#25211b]">
          How is gold purity verified at Maa Satti Jewels?
        </span>
      ),
      children: (
        <div className="text-sm leading-relaxed text-[#685e50]">
          Every single piece crafted at our Jaipur atelier bears the official{' '}
          <strong>Bureau of Indian Standards (BIS) Hallmark</strong> along with
          the unique 6-digit laser-engraved <strong>HUID</strong> (Hallmark
          Unique Identification) code. You can verify this HUID directly on the
          official BIS Care government mobile application. All natural diamonds
          above 0.30 carats come with individualized international gemological
          certificates from <strong>IGI</strong> or <strong>GIA</strong>.
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <span className="font-serif text-lg text-[#25211b]">
          Can we customize or commission bespoke bridal heirlooms?
        </span>
      ),
      children: (
        <div className="text-sm leading-relaxed text-[#685e50]">
          Yes, bespoke bridal commissions are the pride of our Jaipur heritage.
          Our master karigars work with you directly—from gouache sketches to wax
          carving, custom gold karatage selection (22K or 18K), and gemstone
          curation (certified emeralds, uncut Polki, Basra pearls). A bespoke
          bridal suite typically requires 3 to 6 weeks of dedicated handcrafting.
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <span className="font-serif text-lg text-[#25211b]">
          What is your Lifetime Buyback and Exchange guarantee?
        </span>
      ),
      children: (
        <div className="text-sm leading-relaxed text-[#685e50]">
          We offer a transparent <strong>100% Lifetime Exchange</strong> and
          buyback policy based on prevailing market gold and diamond bullion
          rates across all authentic Maa Satti pieces accompanied by their
          original invoice and certificate. Your investment remains secure for
          future generations.
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <span className="font-serif text-lg text-[#25211b]">
          How is precious jewellery shipped and insured to our home?
        </span>
      ),
      children: (
        <div className="text-sm leading-relaxed text-[#685e50]">
          We provide complimentary <strong>100% Insured White-Glove Transit</strong>{' '}
          across India and to over 24 countries worldwide (via secure armored
          logistics partners like Brink’s and Sequel Logistics). Your parcel is
          tamper-evident, fully insured from our atelier vault directly to your
          hands, and requires government ID verification upon delivery.
        </div>
      ),
    },
    {
      key: '5',
      label: (
        <span className="font-serif text-lg text-[#25211b]">
          How should I care for handcrafted Polki and Jadau jewellery?
        </span>
      ),
      children: (
        <div className="text-sm leading-relaxed text-[#685e50]">
          Polki and Jadau pieces are set in pure 24K gold foil and should never
          be exposed to water, perfume, hairsprays, or chemical cleaners. Store
          them in airtight suede-lined boxes with natural moisture absorbers. We
          also offer complimentary lifetime professional ultrasonic inspection
          and repolishing at our Jaipur flagship boutique.
        </div>
      ),
    },
  ]

  // Product tab panes
  const renderProductGrid = (categoryFilter) => {
    const filtered =
      categoryFilter === 'all'
        ? productsVault
        : productsVault.filter((p) => p.category === categoryFilter)

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {filtered.map((item) => {
          const isWishlisted = wishlist.some((w) => w.id === item.id)
          return (
            <div
              key={item.id}
              className="msj-product-card group flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container with Badges */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#f4efe8]">
                <img
                  src={imageUrl(item.image, 700)}
                  alt={item.name}
                  loading="lazy"
                  className="product-img w-full h-full object-cover"
                />

                {/* Floating Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] bg-[#241f18]/85 text-[#f5ebd7] backdrop-blur-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Floating Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#25211b] hover:text-[#b89b69] transition-all duration-300 shadow-sm"
                  aria-label="Save to Wishlist"
                >
                  {isWishlisted ? (
                    <HeartFilled className="text-base text-[#b83b3b]" />
                  ) : (
                    <HeartOutlined className="text-base" />
                  )}
                </button>

                {/* Quick Action Overlay on Hover */}
                <div className="product-overlay-action absolute bottom-3 inset-x-3 z-10 flex gap-2">
                  <button
                    type="button"
                    onClick={() => openQuickView(item)}
                    className="flex-1 py-2.5 bg-white/95 text-[#241f18] hover:bg-[#b89b69] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <EyeOutlined /> Quick Specs
                  </button>
                  <a
                    href={`https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                      item.name
                    )}%20(${item.karat}%20-%20Rs.${item.price.toLocaleString(
                      'en-IN'
                    )}).%20Please%20share%20details.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center text-base hover:opacity-90 transition-opacity no-underline"
                    aria-label="Enquire on WhatsApp"
                  >
                    <WhatsAppOutlined />
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#8e816f] uppercase tracking-wider mb-1.5">
                    <span>{item.karat}</span>
                    <span>{item.grossWeight}</span>
                  </div>

                  <h3 className="font-serif text-lg font-normal text-[#241f18] group-hover:text-[#b89b69] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#7e7362] line-clamp-1 mt-1 font-light">
                    {item.gemstones}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#f0e8dc] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-[#968975] block tracking-wider">
                      Atelier Value
                    </span>
                    <span className="font-serif text-xl font-medium text-[#25211b]">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-[#9d8153]">
                    <StarFilled className="text-xs text-[#d6b46b]" />
                    <span className="font-semibold">{item.rating}</span>
                    <span className="text-[#a49987] text-[10px]">
                      ({item.reviewsCount})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="msj-luxury-home">
      
      {/* 1. CINEMATIC HERO SECTION WITH ANT DESIGN CAROUSEL */}
      <section className="relative overflow-hidden bg-[#1e1913]">
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={5500}
          effect="fade"
          className="msj-hero-carousel"
        >
          {heroSlides.map((slide) => (
            <div key={slide.id}>
              <div
                className="msj-hero-slide"
                style={{ backgroundImage: `url(${imageUrl(slide.image, 1920)})` }}
              >
                <div className="msj-hero-overlay" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
                  <div className="max-w-2xl space-y-6 text-[#fbf9f5]">
                    
                    {/* Eyebrow badge */}
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#1a1510]/80 border border-[#b89b69]/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d8c39b] animate-ping" />
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold text-[#e8dfcf]">
                        {slide.tag}
                      </span>
                    </div>

                    {/* Majestic Title */}
                    <div>
                      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.05] tracking-tight">
                        {slide.title}
                        <span className="block italic text-[#e8d2ab] font-light mt-1">
                          {slide.subtitle}
                        </span>
                      </h1>
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-[#cfc4b2] max-w-lg leading-relaxed font-light">
                      {slide.description}
                    </p>

                    {/* Specs highlight */}
                    <div className="text-xs uppercase tracking-[0.18em] text-[#d8c39b] border-l-2 border-[#b89b69] pl-3 py-0.5">
                      {slide.specs}
                    </div>

                    {/* CTA Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Link
                        to="/products"
                        className="px-8 py-4 bg-[#b89b69] hover:bg-[#a38450] text-[#1c1710] font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-lg hover:shadow-xl no-underline inline-flex items-center gap-2"
                      >
                        {slide.ctaPrimary} <ArrowRightOutlined />
                      </Link>

                      <button
                        type="button"
                        onClick={() => setAppointmentModalOpen(true)}
                        className="px-7 py-4 bg-transparent hover:bg-white/10 text-[#fbf9f5] border border-[#d8c39b]/60 font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 backdrop-blur-sm inline-flex items-center gap-2"
                      >
                        <CalendarOutlined /> {slide.ctaSecondary}
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          ))}
        </Carousel>

        {/* Carousel Custom Arrows */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => carouselRef.current?.prev()}
            className="w-11 h-11 rounded-full border border-white/30 bg-black/40 hover:bg-[#b89b69] hover:border-[#b89b69] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <LeftOutlined />
          </button>
          <button
            type="button"
            onClick={() => carouselRef.current?.next()}
            className="w-11 h-11 rounded-full border border-white/30 bg-black/40 hover:bg-[#b89b69] hover:border-[#b89b69] text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <RightOutlined />
          </button>
        </div>
      </section>

      {/* 2. ROYAL AUTHENTICITY & 4 PILLARS STRIP */}
      <section className="bg-[#241f18] text-[#f2ebe0] border-y border-[#3a3227] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#3d3428]">
            
            <div className="flex items-start gap-4 pt-4 md:pt-0">
              <div className="w-10 h-10 rounded-full bg-[#322a21] border border-[#b89b69]/40 flex items-center justify-center text-[#d8c39b] shrink-0 text-lg">
                <SafetyCertificateOutlined />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#f5ebd7] leading-tight">
                  100% BIS Hallmarked
                </h4>
                <p className="text-xs text-[#a99c8a] mt-1 leading-snug">
                  Govt. certified 6-digit laser HUID gold authenticity on every piece.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#322a21] border border-[#b89b69]/40 flex items-center justify-center text-[#d8c39b] shrink-0 text-lg">
                <CrownOutlined />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#f5ebd7] leading-tight">
                  Certified Diamonds
                </h4>
                <p className="text-xs text-[#a99c8a] mt-1 leading-snug">
                  GIA, IGI &amp; SGL accredited conflict-free natural diamonds.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#322a21] border border-[#b89b69]/40 flex items-center justify-center text-[#d8c39b] shrink-0 text-lg">
                <EnvironmentOutlined />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#f5ebd7] leading-tight">
                  Jaipur Master Karigari
                </h4>
                <p className="text-xs text-[#a99c8a] mt-1 leading-snug">
                  Hand-finished by 3rd-generation goldsmiths in Johari Bazaar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 rounded-full bg-[#322a21] border border-[#b89b69]/40 flex items-center justify-center text-[#d8c39b] shrink-0 text-lg">
                <ThunderboltOutlined />
              </div>
              <div>
                <h4 className="font-serif text-base sm:text-lg font-medium text-[#f5ebd7] leading-tight">
                  Insured Delivery &amp; Buyback
                </h4>
                <p className="text-xs text-[#a99c8a] mt-1 leading-snug">
                  100% white-glove transit insurance &amp; lifetime exchange promise.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CURATED SILHOUETTES & CATEGORY SHOWCASE */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#938069] font-bold mb-2">
            Curated Silhouettes
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#241f18] font-normal tracking-tight">
            Discover Your <em>Kind of Beautiful</em>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#b89b69] mx-auto mt-4" />
          <p className="text-sm text-[#736756] mt-4 font-light">
            From imperial bridal haar to delicate solitaire rings, explore our
            timeless categories sculpted in pure gold and radiant gems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link
              key={cat.id}
              to="/products"
              className="msj-category-card group bg-white border border-[#eae2d5] overflow-hidden no-underline flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-[#f4eee5]">
                <img
                  src={imageUrl(cat.image, 600)}
                  alt={cat.name}
                  loading="lazy"
                  className="category-img w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-[#201b15]/80 text-[#ebdcb9] text-[9px] font-bold uppercase tracking-widest backdrop-blur-sm">
                  {cat.tag}
                </span>
                <span className="absolute bottom-2.5 right-2.5 font-serif text-xs text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
                  0{idx + 1}
                </span>
              </div>

              <div className="p-4 sm:p-5 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-[#241f18] group-hover:text-[#b89b69] transition-colors font-medium">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#8e8271] uppercase tracking-wider mt-1">
                    {cat.count}
                  </p>
                </div>
                <div className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs text-[#b89b69] font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Explore Vault</span> <ArrowRightOutlined className="text-[10px]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SIGNATURE BESTSELLERS & CURATED VAULT WITH ANT DESIGN TABS */}
      <section className="py-20 bg-[#f4efe8] border-y border-[#e5dcd0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#938069] font-bold mb-2">
                The Maa Satti Vault
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#241f18] font-normal tracking-tight">
                Signature <em>Masterpieces</em>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setWishlistDrawerOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-[#cfc2af] hover:border-[#b89b69] text-xs font-semibold uppercase tracking-wider text-[#3d3529] transition-colors"
              >
                <Badge count={wishlist.length} size="small" color="#b89b69">
                  <HeartOutlined className="text-base text-[#917646] mr-1" />
                </Badge>
                <span>Private Wishlist</span>
              </button>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#252019] hover:bg-[#b89b69] text-white text-xs font-semibold uppercase tracking-wider no-underline transition-colors"
              >
                <span>View Full Catalog</span> <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Ant Design Luxury Tabs */}
          <Tabs
            defaultActiveKey="all"
            centered
            className="msj-luxury-tabs"
            items={[
              {
                key: 'all',
                label: 'All Icons',
                children: renderProductGrid('all'),
              },
              {
                key: 'bridal',
                label: 'Royal Bridal',
                children: renderProductGrid('bridal'),
              },
              {
                key: 'polki',
                label: 'Polki & Kundan',
                children: renderProductGrid('polki'),
              },
              {
                key: 'solitaires',
                label: 'Solitaires & Diamonds',
                children: renderProductGrid('solitaires'),
              },
              {
                key: 'everyday',
                label: 'Everyday 18K Gold',
                children: renderProductGrid('everyday'),
              },
            ]}
          />

        </div>
      </section>

      {/* 5. INTERACTIVE LOOKBOOK: "SHOP THE ROYAL LOOK" (CARTIER / TIFFANY STYLE) */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Visual with Hotspots */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-none overflow-hidden aspect-[4/5] sm:aspect-[3/4] bg-[#eae2d5] shadow-2xl">
              <img
                src={imageUrl('photo-1599643477877-530eb83abc8e', 1400)}
                alt="Royal Jaipur Bride wearing Maa Satti Jewellery"
                className="w-full h-full object-cover"
              />

              {/* Hotspot Pins */}
              {lookbookHotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  onClick={() => setActiveHotspot(spot)}
                  style={{ top: spot.top, left: spot.left }}
                  className={`hotspot-pin ${
                    activeHotspot.id === spot.id ? 'scale-125 bg-[#b89b69] text-white' : ''
                  }`}
                  aria-label={`Inspect ${spot.title}`}
                >
                  <EyeOutlined className="text-xs" />
                </button>
              ))}

              <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 bg-[#201b15]/85 backdrop-blur-md text-[11px] uppercase tracking-widest text-[#ebd8b7]">
                ✦ Interactive Lookbook · Tap Pins to Inspect
              </div>
            </div>
          </div>

          {/* Hotspot Detail Card & Story */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#938069] font-bold mb-2">
                Editorial Styling Studio
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#241f18] font-normal leading-tight">
                The Noor Mahal <em>Bridal Ensemble</em>
              </h2>
              <p className="text-sm text-[#736756] mt-4 leading-relaxed font-light">
                Curated by our head stylist in Jaipur. Every element—from the
                tiered Polki choker to the seed pearl chandbalis—is balanced in
                harmony to accentuate feminine royalty.
              </p>
            </div>

            {/* Active Hotspot Spotlight Box */}
            <div className="bg-white border-2 border-[#b89b69] p-6 shadow-md relative">
              <div className="flex gap-4 items-center">
                <img
                  src={imageUrl(activeHotspot.image, 200)}
                  alt={activeHotspot.title}
                  className="w-20 h-20 object-cover bg-[#f4ede3] border border-[#e5dcd0]"
                />
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9f8554] block">
                    {activeHotspot.karat}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-[#241f18]">
                    {activeHotspot.title}
                  </h4>
                  <span className="font-serif text-lg font-semibold text-[#8c7042] block mt-0.5">
                    {activeHotspot.price}
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#f0e8dc] flex items-center gap-3">
                <a
                  href={`https://wa.me/911414517725?text=I%20would%20like%20to%20inquire%20about%20the%20${encodeURIComponent(
                    activeHotspot.title
                  )}%20(${activeHotspot.price})%20from%20the%20Noor%20Mahal%20Lookbook.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 bg-[#252019] hover:bg-[#b89b69] text-white text-xs font-semibold uppercase tracking-wider text-center no-underline transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppOutlined /> Direct Atelier Inquiry
                </a>

                <button
                  type="button"
                  onClick={() => setAppointmentModalOpen(true)}
                  className="px-4 py-2.5 border border-[#cfc2af] hover:border-[#b89b69] text-xs font-semibold uppercase tracking-wider text-[#342e24] transition-colors"
                >
                  Try In Salon
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs text-[#716656]">
              <div className="flex items-center gap-2">
                <CheckCircleOutlined className="text-[#b89b69]" />
                <span>Complimentary custom neck &amp; wrist sizing included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleOutlined className="text-[#b89b69]" />
                <span>Available for private viewing at Jaipur Flagship Boutique</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. LIVE GOLD BULLION RATE & TRANSPARENCY CALCULATOR */}
      <section className="py-20 bg-[#241f18] text-[#fbf9f5] border-y border-[#3d3428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#332b21] border border-[#b89b69]/40 text-[#ebd7b5] text-[10px] uppercase tracking-widest font-semibold">
                <CalculatorOutlined /> Bullion Transparency System
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#fbf9f5]">
                Fair &amp; Honest <em>Gold Pricing</em>
              </h2>

              <p className="text-sm text-[#cfc2af] leading-relaxed font-light">
                At Maa Satti Jewels, luxury is built on transparency. Unlike
                opaque retail markups, our heirloom pricing strictly decouples
                live international bullion rates from our artisan making craft.
                Test our live transparency calculator below.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#1d1813] border border-[#3f3528]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9d8f7b] block">
                    24K Pure Gold
                  </span>
                  <span className="font-serif text-lg text-[#ebd6b2] font-semibold">
                    ₹7,425/g
                  </span>
                </div>
                <div className="p-3 bg-[#1d1813] border border-[#3f3528]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9d8f7b] block">
                    22K Hallmarked
                  </span>
                  <span className="font-serif text-lg text-[#ebd6b2] font-semibold">
                    ₹6,806/g
                  </span>
                </div>
                <div className="p-3 bg-[#1d1813] border border-[#3f3528]">
                  <span className="text-[10px] uppercase tracking-wider text-[#9d8f7b] block">
                    18K Diamond Gold
                  </span>
                  <span className="font-serif text-lg text-[#ebd6b2] font-semibold">
                    ₹5,568/g
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#2d251d] border border-[#b89b69]/40 p-6 sm:p-8 rounded-none shadow-2xl space-y-6">
                
                <div className="border-b border-[#433729] pb-4 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#fbf9f5] font-normal">
                    Jewellery Valuation Estimator
                  </h3>
                  <span className="text-xs text-[#b89b69] font-semibold tracking-wider uppercase">
                    Live Rates
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Select Karat */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#a99c8b] block mb-2 font-medium">
                      Select Gold Karat
                    </label>
                    <Select
                      value={calcKarat}
                      onChange={(val) => setCalcKarat(val)}
                      className="w-full h-11"
                      options={[
                        { value: '24K', label: '24 Karat Pure Bullion (999)' },
                        { value: '22K', label: '22 Karat Royal Hallmark (916)' },
                        { value: '18K', label: '18 Karat Fine Gold (750)' },
                        { value: '14K', label: '14 Karat Minimalist (585)' },
                      ]}
                    />
                  </div>

                  {/* Input Grams */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#a99c8b] block mb-2 font-medium">
                      Estimated Weight (Grams)
                    </label>
                    <InputNumber
                      min={1}
                      max={500}
                      value={calcGrams}
                      onChange={(val) => setCalcGrams(val || 1)}
                      className="w-full h-11 text-base flex items-center"
                      addonAfter="Grams"
                    />
                  </div>
                </div>

                {/* Calculation Breakdown */}
                <div className="bg-[#1c1712] p-4 border border-[#3e3427] space-y-2 text-xs">
                  <div className="flex justify-between text-[#c4b7a4]">
                    <span>Pure Metal Bullion ({calcGrams}g @ ₹{bullionRates[calcKarat]}/g):</span>
                    <span className="font-mono text-[#fbf9f5]">₹{metalValue.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#c4b7a4]">
                    <span>Atelier Hand-Karigari (12% fair craft):</span>
                    <span className="font-mono text-[#fbf9f5]">₹{makingCharges.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-[#c4b7a4]">
                    <span>Statutory GST (3% Govt):</span>
                    <span className="font-mono text-[#fbf9f5]">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="border-t border-[#413628] pt-3 mt-2 flex justify-between items-center text-sm">
                    <span className="text-[#ecd3a9] font-serif text-base font-semibold">
                      Estimated Investment:
                    </span>
                    <span className="font-serif text-2xl text-[#fcd89b] font-bold">
                      ₹{totalEstimated.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20I%20used%20your%20Gold%20Calculator%20for%20${calcGrams}g%20of%20${calcKarat}%20Gold%20(Estimated%20Rs.${totalEstimated.toLocaleString(
                      'en-IN'
                    )}).%20I%20would%20like%20to%20discuss%20a%20commission.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 bg-[#b89b69] hover:bg-[#a38450] text-[#1e1912] text-xs font-bold uppercase tracking-wider text-center no-underline transition-colors flex items-center justify-center gap-2"
                  >
                    <WhatsAppOutlined /> Request Custom Quote
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. THE ATELIER & JAIPUR CRAFTSMANSHIP JOURNEY */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[11px] uppercase tracking-[0.26em] text-[#938069] font-bold mb-2">
            The Maa Satti Heritage
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#241f18] font-normal tracking-tight">
            The 4 Sacred Steps of <em>Jaipuri Karigari</em>
          </h2>
          <div className="w-16 h-[1.5px] bg-[#b89b69] mx-auto mt-4" />
          <p className="text-sm text-[#736756] mt-4 font-light leading-relaxed">
            Every jewel at Maa Satti begins in the ancient alleys of Johari
            Bazaar, Jaipur. Over 120 dedicated hours of generational handcrafting
            transform raw gold into family heirlooms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white border border-[#e8dfd1] p-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-[#cfbda0] font-light block mb-3">
                01
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241f18]">
                Gouache Sketching
              </h3>
              <p className="text-xs text-[#716554] mt-2 leading-relaxed font-light">
                Our master illustrators create 1:1 scale gouache and charcoal
                portraits, mapping the placement of each gemstone and floral
                silhouette.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f4ede3] text-[10px] uppercase tracking-widest text-[#9c8454] font-semibold">
              ✦ Conceptual Origin
            </div>
          </div>

          <div className="bg-white border border-[#e8dfd1] p-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-[#cfbda0] font-light block mb-3">
                02
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241f18]">
                Ghaat &amp; Jadai Setting
              </h3>
              <p className="text-xs text-[#716554] mt-2 leading-relaxed font-light">
                Raw 24K pure gold foil (kundan) is sculpted millimeter by
                millimeter around uncut Polki diamonds without artificial
                adhesives.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f4ede3] text-[10px] uppercase tracking-widest text-[#9c8454] font-semibold">
              ✦ 24K Pure Foil Setting
            </div>
          </div>

          <div className="bg-white border border-[#e8dfd1] p-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-[#cfbda0] font-light block mb-3">
                03
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241f18]">
                Meenakari Enamelling
              </h3>
              <p className="text-xs text-[#716554] mt-2 leading-relaxed font-light">
                The reverse of the jewellery is hand-engraved and filled with
                crushed mineral glass, baked in high-temperature kilns to create
                vibrant motifs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f4ede3] text-[10px] uppercase tracking-widest text-[#9c8454] font-semibold">
              ✦ Royal Glass Enamel
            </div>
          </div>

          <div className="bg-white border border-[#e8dfd1] p-6 flex flex-col justify-between">
            <div>
              <span className="font-serif text-4xl text-[#cfbda0] font-light block mb-3">
                04
              </span>
              <h3 className="font-serif text-xl font-medium text-[#241f18]">
                BIS Laser Hallmarking
              </h3>
              <p className="text-xs text-[#716554] mt-2 leading-relaxed font-light">
                Each completed creation undergoes spectrometer purity assay and
                receives its government HUID laser hallmark before velvet boxing.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#f4ede3] text-[10px] uppercase tracking-widest text-[#9c8454] font-semibold">
              ✦ Sovereign Certification
            </div>
          </div>

        </div>
      </section>

      {/* 8. CLIENT LOVE & ROYAL BRIDES TESTIMONIALS */}
      <section className="py-20 bg-[#f4efe8] border-y border-[#e5ded2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#938069] font-bold mb-2">
              Beloved by Royal Brides
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#241f18] font-normal tracking-tight">
              Stories We <em>Cherish Forever</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white border border-[#e5dcd0] p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#d8b05c] mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <StarFilled key={i} className="text-sm" />
                    ))}
                  </div>

                  <p className="text-sm text-[#4e4539] leading-relaxed italic font-serif text-base">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#f2eae0] flex items-center gap-4">
                  <img
                    src={test.avatar}
                    alt={test.bride}
                    className="w-12 h-12 rounded-full object-cover border border-[#b89b69]"
                  />
                  <div>
                    <h4 className="font-serif text-base font-medium text-[#221d17]">
                      {test.bride}
                    </h4>
                    <span className="text-[11px] text-[#938472] uppercase tracking-wider block">
                      {test.occasion}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VIP PRIVATE SALON CONSULTATION INVITATION */}
      <section className="py-20 bg-[#241f18] text-[#fbf9f5] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.26em] text-[#d8c39b] font-bold">
            Private VIP Viewing Suite
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#fbf9f5] leading-tight">
            Some Masterpieces Deserve to be <em>Experienced in Person.</em>
          </h2>
          <p className="text-sm sm:text-base text-[#cfc2ae] max-w-xl mx-auto leading-relaxed font-light">
            Step into our private salon suite at the Jaipur flagship boutique or
            schedule an exclusive Ultra-HD video preview with our Senior
            Gemologist.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setAppointmentModalOpen(true)}
              className="px-8 py-4 bg-[#b89b69] hover:bg-[#a38450] text-[#1c1710] font-bold text-xs uppercase tracking-[0.18em] transition-all shadow-lg flex items-center gap-2"
            >
              <CalendarOutlined /> Reserve Private Salon Viewing
            </button>
            <a
              href="tel:+911414517725"
              className="px-7 py-4 bg-transparent hover:bg-white/10 text-[#fbf9f5] border border-[#d8c39b]/60 font-medium text-xs uppercase tracking-[0.18em] transition-all no-underline flex items-center gap-2"
            >
              <PhoneOutlined /> Direct Concierge Desk
            </a>
          </div>
        </div>
      </section>

      {/* 10. INSTAGRAM & COMMUNITY LOOKBOOK WALL */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#938069] font-bold mb-1">
              Social Salon
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241f18] font-normal">
              #MaaSattiJewels on Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/maasattijewels/"
            target="_blank"
            rel="noreferrer"
            className="text-xs uppercase tracking-wider text-[#b89b69] hover:text-[#8e7343] font-semibold no-underline flex items-center gap-1.5"
          >
            Follow @maasattijewels <ArrowRightOutlined />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/maasattijewels/"
              target="_blank"
              rel="noreferrer"
              className="relative aspect-square overflow-hidden group bg-[#eae3d5] no-underline"
            >
              <img
                src={imageUrl(post.photo, 400)}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <HeartFilled className="text-lg text-[#e6b96e] mb-1" />
                <span className="text-xs font-semibold">{post.likes}</span>
                <span className="text-[9px] line-clamp-2 mt-1 text-[#e0d6c5]">
                  {post.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 11. ROYAL JEWELLERY CARE & FAQ (ANT DESIGN COLLAPSE) */}
      <section className="py-20 bg-[#f4efe8] border-t border-[#e5dcd0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#938069] font-bold mb-2">
              Curated Guidance
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#241f18] font-normal">
              Frequently Asked Questions &amp; Care
            </h2>
          </div>

          <Collapse
            items={faqItems}
            defaultActiveKey={['1']}
            bordered={false}
            className="msj-luxury-collapse bg-transparent"
          />
        </div>
      </section>

      {/* 12. VIP NEWSLETTER & SALON PRIVÉ CIRCLE */}
      <section className="py-16 bg-[#1f1a14] text-[#fbf9f5] border-t border-[#382f23]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xl text-[#d8c39b] block">❖</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#fbf9f5]">
            Join the Salon Privé Circle
          </h3>
          <p className="text-xs sm:text-sm text-[#b5a794] max-w-md mx-auto leading-relaxed">
            Receive private invitations to limited heirloom unveils, seasonal
            lookbooks, and priority salon bookings.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <Input
              size="large"
              placeholder="Enter your private email..."
              prefix={<MailOutlined className="text-[#968673] mr-2" />}
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="py-2.5 px-4 bg-[#2b241c] text-[#fbf9f5] border-[#4b3f30] hover:border-[#b89b69] focus:border-[#b89b69] rounded-none"
            />
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full sm:w-auto px-6 font-semibold uppercase tracking-wider text-xs bg-[#b89b69] hover:bg-[#a38450] text-[#1c1710] rounded-none h-11 border-none"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-[10px] text-[#786c5c] tracking-wider uppercase pt-2">
            Discretion guaranteed · Unsubscribe at any time
          </p>
        </div>
      </section>

      {/* =========================================================================
          MODALS & DRAWERS (ANT DESIGN)
          ========================================================================= */}

      {/* A. PRODUCT QUICK VIEW MODAL */}
      <Modal
        open={quickViewOpen}
        onCancel={() => setQuickViewOpen(false)}
        footer={null}
        width={850}
        centered
        styles={{
          content: {
            padding: '0px',
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            overflow: 'hidden',
          },
        }}
      >
        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/5] bg-[#f4eee6]">
              <img
                src={imageUrl(selectedProduct.image, 900)}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-[#8f8270] uppercase tracking-wider mb-2">
                  <span className="font-semibold text-[#b89b69]">
                    {selectedProduct.badge}
                  </span>
                  <span>{selectedProduct.hallmark}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#252019] leading-snug">
                  {selectedProduct.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                  <Rate
                    disabled
                    defaultValue={selectedProduct.rating}
                    allowHalf
                    className="text-xs text-[#b89b69]"
                  />
                  <span className="text-xs text-[#807463]">
                    ({selectedProduct.reviewsCount} verified reviews)
                  </span>
                </div>

                <div className="mt-4 pb-4 border-b border-[#eee4d6]">
                  <span className="font-serif text-3xl font-semibold text-[#252019]">
                    ₹{selectedProduct.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-[#867967] block mt-0.5">
                    Inclusive of all taxes &amp; BIS insured delivery
                  </span>
                </div>

                {/* Detailed Gemological Specs */}
                <div className="py-4 space-y-2 text-xs text-[#5f5445]">
                  <div className="flex justify-between py-1 border-b border-[#f4ede3]">
                    <span className="font-medium text-[#2d251c]">Metal Purity:</span>
                    <span>{selectedProduct.karat}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f4ede3]">
                    <span className="font-medium text-[#2d251c]">Gross Weight:</span>
                    <span>{selectedProduct.grossWeight}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f4ede3]">
                    <span className="font-medium text-[#2d251c]">Net Gold Weight:</span>
                    <span>{selectedProduct.netGoldWeight}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#f4ede3]">
                    <span className="font-medium text-[#2d251c]">Gemstones:</span>
                    <span className="text-right max-w-[200px]">
                      {selectedProduct.gemstones}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#736756] leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(
                    selectedProduct.name
                  )}%20(Price:%20Rs.${selectedProduct.price.toLocaleString(
                    'en-IN'
                  )}).%20Please%20share%20HD%20video%20and%20availability.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider text-center no-underline transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                >
                  <WhatsAppOutlined className="text-base" /> Inquire With Gemologist
                </a>

                <button
                  type="button"
                  onClick={() => {
                    toggleWishlist(selectedProduct)
                  }}
                  className="w-full py-3 border border-[#cfc2ae] hover:border-[#b89b69] text-xs font-semibold uppercase tracking-wider text-[#352d22] transition-colors flex items-center justify-center gap-2"
                >
                  {wishlist.some((w) => w.id === selectedProduct.id) ? (
                    <>
                      <HeartFilled className="text-[#b83b3b]" /> Remove from Wishlist
                    </>
                  ) : (
                    <>
                      <HeartOutlined /> Save to Private Wishlist
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        )}
      </Modal>

      {/* B. WISHLIST DRAWER (ANT DESIGN) */}
      <Drawer
        title={
          <div className="flex items-center justify-between py-1">
            <span className="font-serif text-xl font-medium text-[#252019]">
              Your Private Wishlist
            </span>
            <Tag color="#b89b69">{wishlist.length} Items</Tag>
          </div>
        }
        placement="right"
        width={420}
        onClose={() => setWishlistDrawerOpen(false)}
        open={wishlistDrawerOpen}
        styles={{
          header: { background: '#faf8f4', borderBottom: '1px solid #ebd6bb' },
          body: { background: '#faf8f4', padding: '20px' },
        }}
      >
        {wishlist.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <HeartOutlined className="text-4xl text-[#d0c1ac]" />
            <h4 className="font-serif text-xl text-[#3d3428]">
              Your Wishlist is Empty
            </h4>
            <p className="text-xs text-[#807261] max-w-xs mx-auto">
              Tap the heart icon on any piece across our collection to save your
              personal heirloom selection.
            </p>
            <Button
              type="primary"
              onClick={() => setWishlistDrawerOpen(false)}
              className="mt-2 bg-[#b89b69] text-[#1c1710] font-semibold text-xs uppercase"
            >
              Explore Collections
            </Button>
          </div>
        ) : (
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4 overflow-y-auto pr-1">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#e5dcd0] p-3 flex gap-3 items-center justify-between"
                >
                  <img
                    src={imageUrl(item.image, 160)}
                    alt={item.name}
                    className="w-16 h-16 object-cover bg-[#f4ede3]"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-medium text-[#252019] truncate">
                      {item.name}
                    </h5>
                    <span className="text-[11px] text-[#91816e] block">
                      {item.karat} · {item.grossWeight}
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#8c7042] block mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(item)}
                    className="text-xs text-[#b83b3b] hover:underline p-1"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-[#e5dcd0] mt-6 space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6d6051]">Total Wishlist Valuation:</span>
                <span className="font-serif text-xl font-bold text-[#252019]">
                  ₹
                  {wishlist
                    .reduce((sum, item) => sum + item.price, 0)
                    .toLocaleString('en-IN')}
                </span>
              </div>

              <a
                href={`https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20here%20is%20my%20curated%20wishlist%20(${
                  wishlist.length
                }%20items):%20${encodeURIComponent(
                  wishlist.map((w) => w.name).join(', ')
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider text-center no-underline flex items-center justify-center gap-2"
              >
                <WhatsAppOutlined /> Inquire All on WhatsApp
              </a>

              <Button
                block
                onClick={() => {
                  setWishlistDrawerOpen(false)
                  setAppointmentModalOpen(true)
                }}
                className="py-3 h-auto border-[#cfc2ae] text-xs font-semibold uppercase tracking-wider text-[#2e261d]"
              >
                Schedule Private Viewing For Wishlist
              </Button>
            </div>
          </div>
        )}
      </Drawer>

      {/* C. PRIVATE VIP SALON APPOINTMENT MODAL (ANT DESIGN) */}
      <Modal
        open={appointmentModalOpen}
        onCancel={() => setAppointmentModalOpen(false)}
        footer={null}
        width={600}
        centered
        styles={{
          content: {
            padding: '36px',
            backgroundColor: '#faf8f4',
            border: '1px solid #e2d7c5',
          },
        }}
      >
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#938069] font-bold block">
              Haute Joaillerie Atelier
            </span>
            <h3 className="font-serif text-3xl font-normal text-[#252019] mt-1">
              Book a Private Salon Viewing
            </h3>
            <p className="text-xs text-[#716656] mt-1 max-w-sm mx-auto">
              Experience personalized styling with our Master Gemologist in
              Jaipur or via 1-on-1 Ultra-HD Video Call.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleAppointmentSubmit()
            }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                Your Full Name
              </label>
              <Input
                required
                size="large"
                placeholder="e.g. Maharani Gayatri / Advait Sharma"
                className="rounded-none border-[#cfc2ae] hover:border-[#b89b69] focus:border-[#b89b69]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                  Phone Number
                </label>
                <Input
                  required
                  size="large"
                  placeholder="+91 98765 43210"
                  className="rounded-none border-[#cfc2ae] hover:border-[#b89b69] focus:border-[#b89b69]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                  Email Address
                </label>
                <Input
                  required
                  type="email"
                  size="large"
                  placeholder="name@domain.com"
                  className="rounded-none border-[#cfc2ae] hover:border-[#b89b69] focus:border-[#b89b69]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                  Consultation Format
                </label>
                <Select
                  defaultValue="jaipur"
                  className="w-full h-10"
                  options={[
                    { value: 'jaipur', label: 'In-Person: Jaipur Flagship Atelier' },
                    { value: 'video', label: 'Virtual: Ultra-HD Video Session' },
                    { value: 'home', label: 'Private Home Suite (By Request)' },
                  ]}
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                  Jewellery Interest
                </label>
                <Select
                  defaultValue="bridal"
                  className="w-full h-10"
                  options={[
                    { value: 'bridal', label: 'Royal Bridal Trousseau' },
                    { value: 'polki', label: 'Jadau Polki & Heirlooms' },
                    { value: 'solitaire', label: 'Certified Solitaire Engagement' },
                    { value: 'custom', label: 'Bespoke Custom Remodeling' },
                  ]}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-[#635747] block mb-1">
                Preferred Date
              </label>
              <DatePicker className="w-full h-10 rounded-none border-[#cfc2ae]" />
            </div>

            <div className="pt-2">
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
                className="h-12 bg-[#b89b69] hover:bg-[#a38450] text-[#1e1912] font-bold text-xs uppercase tracking-[0.16em] rounded-none border-none"
              >
                Confirm Salon Reservation
              </Button>
            </div>
          </form>

          <p className="text-[11px] text-[#786c5d] text-center pt-1">
            Need urgent assistance? Call our desk directly at{' '}
            <strong className="text-[#b89b69]">+91 141 451 7725</strong>
          </p>
        </div>
      </Modal>

      {/* D. ANT DESIGN FLOAT BUTTONS (WHATSAPP, APPOINTMENT, SCROLL TO TOP) */}
      <FloatButton.Group shape="circle" style={{ right: 24, bottom: 24 }}>
        <FloatButton
          icon={<WhatsAppOutlined style={{ color: '#25D366' }} />}
          tooltip="Direct WhatsApp Concierge"
          onClick={() =>
            window.open(
              'https://wa.me/911414517725?text=Hello%20Maa%20Satti%20Jewels%2C%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collections.',
              '_blank'
            )
          }
        />
        <FloatButton
          icon={<CalendarOutlined style={{ color: '#b89b69' }} />}
          tooltip="Book VIP Salon"
          onClick={() => setAppointmentModalOpen(true)}
        />
        <FloatButton.BackTop tooltip="Scroll to Top" />
      </FloatButton.Group>

    </div>
  )
}

export default Home
