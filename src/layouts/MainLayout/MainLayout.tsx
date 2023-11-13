import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div className='mt-[84px] h-[calc(100vh-84px)]'>{children}</div>
      <Footer />
    </div>
  )
}
