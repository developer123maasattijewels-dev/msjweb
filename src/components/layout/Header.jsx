const Header = () => {
  return (
    <header className='site-header'>
      <div className='site-header__inner'>
        <a className='site-brand' href='/' aria-label='Maa Satti home'>
          Maa Satti
        </a>
        <nav className='site-nav' aria-label='Main navigation'>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/products'>Products</a>
          <a href='/contact'>Contact</a>
          <a className='site-nav__action' href='/appointment'>Appointment</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
