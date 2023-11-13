import NavBar from '@/components/NavBar'
import Button from '@/components/Button'

export default function Header() {
  return (
    <header className='h-[70px] fixed top-0 z-10 bg-white w-full shadow-header container'>
      <section className='h-full flex items-center justify-between lg:px-0 px-[30px] container'>
        <NavBar />

        <section className='flex items-center gap-3'>
          <Button size='middle'>Connect Wallet</Button>
          <div>Global</div>
        </section>
      </section>
    </header>
  )
}
