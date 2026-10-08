const copyrightYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className='border-t border-[#eee9e1] bg-white px-[var(--page-gutter)] pt-14 pb-5 text-[#6f675e] max-[680px]:pt-10'>
            <div className='mx-auto grid w-full max-w-[1120px] grid-cols-[1.25fr_0.8fr_1.35fr_0.9fr] gap-x-12 gap-y-10 max-[900px]:grid-cols-2 max-[680px]:gap-x-8 max-[420px]:grid-cols-1'>
                <section className='max-[900px]:col-span-full max-[420px]:col-span-1' aria-label='Maa Satti Jewels'>
                    <a className='mb-5 inline-flex items-center gap-3 no-underline' href='/' aria-label='Maa Satti Jewels home'>
                        <span className='grid size-12 place-items-center rounded-full border border-[#d8c39b] font-footer-heading text-sm font-semibold tracking-wide text-[#8c7048]'>
                            MSJ
                        </span>
                        <span className='font-footer-heading text-lg font-semibold leading-tight text-[#26251f]'>
                            Maa Satti Jewels
                            <span className='mt-1 block font-sans text-[10px] font-medium uppercase tracking-[0.19em] text-[#8a8278]'>
                                Private Limited
                            </span>
                        </span>
                    </a>
                    <p className='max-w-[270px] text-sm leading-6'>
                        Timeless pieces, made to be part of your story.
                    </p>
                </section>

                <nav aria-label='Explore'>
                    <h2 className='mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.17em] text-[#292720]'>Explore</h2>
                    <ul className='m-0 grid list-none gap-3 p-0'>
                        <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/'>Home</a></li>
                        <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/about'>About us</a></li>
                        <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/gallery'>Gallery</a></li>
                        <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/our-team'>Our team</a></li>
                        {/* <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/terms-policy'>Terms &amp; conditions</a></li>
                        <li><a className='text-sm text-inherit no-underline transition-colors hover:text-[#927447]' href='/privacy-policy'>Privacy policy</a></li> */}
                    </ul>
                </nav>

                <section aria-label='Contact details'>
                    <h2 className='mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.17em] text-[#292720]'>Visit or get in touch</h2>
                    <address className='grid gap-2 not-italic text-sm leading-6'>
                        <p>F-60, EPIP, Sitapura,<br />Jaipur, Rajasthan 302022</p>
                        <a className='w-fit text-inherit no-underline transition-colors hover:text-[#927447]' href='mailto:maasattijewels@gmail.com'>maasattijewels@gmail.com</a>
                        <a className='w-fit text-inherit no-underline transition-colors hover:text-[#927447]' href='tel:+911414517725'>+91 141 451 7725</a>
                    </address>
                </section>

                <section aria-label='Follow Maa Satti Jewels'>
                    <h2 className='mb-5 font-sans text-[11px] font-bold uppercase tracking-[0.17em] text-[#292720]'>Follow us</h2>
                    <p className='mb-4 text-sm leading-6'>Discover more from Maa Satti Jewels.</p>
                    <nav className='flex gap-2.5' aria-label='Social media'>
                        <a className='grid size-9 place-items-center rounded-full border border-[#e6dfd4] text-[#51483e] transition-colors hover:border-[#b99a68] hover:text-[#927447]' href='https://www.instagram.com/maasattijewels/' aria-label='Instagram' target='_blank' rel='noreferrer'>
                            <svg aria-hidden='true' viewBox='0 0 24 24' className='size-4 fill-none stroke-current' strokeWidth='1.7'>
                                <rect x='3.5' y='3.5' width='17' height='17' rx='5' />
                                <circle cx='12' cy='12' r='4' />
                                <circle cx='17.5' cy='6.8' r='0.8' className='fill-current stroke-none' />
                            </svg>
                        </a>
                        <a className='grid size-9 place-items-center rounded-full border border-[#e6dfd4] text-[#51483e] transition-colors hover:border-[#b99a68] hover:text-[#927447]' href='https://www.linkedin.com/company/maa-satti-jewels-pvt-ltd/?viewAsMember=true' aria-label='LinkedIn' target='_blank' rel='noreferrer'>
                            <svg aria-hidden='true' viewBox='0 0 24 24' className='size-4 fill-current'>
                                <path d='M6.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.2 10h2.6v8.8H5.2V10Zm4.2 0h2.5v1.2h.1a2.8 2.8 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4v5h-2.6v-4.4c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4v4.5H9.4V10Z' />
                            </svg>
                        </a>
                        <a className='grid size-9 place-items-center rounded-full border border-[#e6dfd4] text-[#51483e] transition-colors hover:border-[#b99a68] hover:text-[#927447]' href='https://www.facebook.com/maasattijewels7' aria-label='Facebook' target='_blank' rel='noreferrer'>
                            <svg aria-hidden='true' viewBox='0 0 24 24' className='size-4 fill-current'>
                                <path d='M13.4 20v-7.3h2.5l.4-2.9h-2.9V8c0-.8.2-1.3 1.4-1.3h1.6V4.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v1.9H7.8v2.9h2.5V20h3.1Z' />
                            </svg>
                        </a>
                    </nav>
                </section>
            </div>

            <div className='mx-auto mt-12 flex w-full max-w-[1120px] items-center justify-between gap-4 border-t border-[#eee9e1] pt-5 text-xs max-[600px]:mt-9 max-[600px]:flex-col max-[600px]:items-start'>
                <p>© {copyrightYear} Maa Satti Jewels Private Limited. All rights reserved.</p>
                <div className='flex items-center gap-4'>
                    <a className='text-inherit no-underline transition-colors hover:text-[#927447]' href='/terms-policy'>Terms &amp; conditions</a>
                    <a className='text-inherit no-underline transition-colors hover:text-[#927447]' href='/privacy-policy'>Privacy policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
