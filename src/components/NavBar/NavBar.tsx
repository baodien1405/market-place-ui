import { useState } from 'react'
import { Link } from 'react-router-dom'

import { path } from '@/constants'

export default function NavBar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const MENU_LIST = [
    {
      href: path.home,
      page: 'Home'
    },
    {
      href: path.aboutUs,
      page: 'About us'
    },
    {
      href: path.ourTeams,
      page: 'Our team'
    },
    {
      href: path.marketPlace,
      page: 'MarketPlace'
    },
    {
      href: path.roadMap,
      page: 'Roadmap'
    },
    {
      href: path.whitePaper,
      page: 'Whitepaper'
    }
  ]

  return (
    <nav className='lg:flex lg:items-center w-full relative lg:mr-0 mr-2'>
      <ul
        className={`${
          isOpenMenu ? 'cbd-top-menu-expanded' : 'hidden'
        } lg:flex lg:items-center md:gap-[26px] lg:gap-[60px] text-base text-white font-bold uppercase`}
      >
        {MENU_LIST.map((item) => (
          <li key={item.page} className='py-[13px] hover:text-red-300 transition-colors uppercase'>
            <Link to={item.href}>{item.page}</Link>
          </li>
        ))}
      </ul>

      <div className='lg:hidden flex items-center justify-start w-full text-white'>
        <svg
          onClick={() => setIsOpenMenu((prev) => !prev)}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 cursor-pointer'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
      </div>
    </nav>
  )
}
