import NavBar from '@/components/NavBar'
import Button from '@/components/Button'
import { ArrowDownIcon, GlobalIcon } from '@/assets/icons'

export default function Header() {
  return (
    <header className='h-[84px] fixed top-0 left-0 right-0 z-10 bg-[#17161A] w-full shadow-header'>
      <section className='h-full flex items-center justify-between container 2xl:px-0 px-[160px]'>
        <NavBar />

        <section className='flex items-center gap-3'>
          <Button size='middle'>Connect Wallet</Button>
          <div className='flex items-center gap-2 '>
            <GlobalIcon />
            <ArrowDownIcon />
          </div>
        </section>
      </section>
    </header>
  )
}
