import { EthereumIcon } from '@/assets/icons'
import Image from '@/components/Image'
import HeartButton from '@/components/HeartButton'
import Button from '@/components/Button'

export function ProductCard() {
  return (
    <section className='p-4 bg-[#3a384199] rounded-[10px]'>
      <div className='w-[235px] h-[233px] mb-6 relative overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1699865701680-ef9214d90fbf?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='The DJ'
          className='w-full h-full rounded object-cover'
        />

        <div className='absolute top-3 right-3'>
          <HeartButton />
        </div>
        <div className='absolute top-3 left-3'>
          <Button size='small'>Epic</Button>
        </div>
      </div>

      <div className='text-white'>
        <div className='flex items-center justify-between mb-[18px]'>
          <div className='text-base font-semibold'>The DJ</div>
          <div className='flex items-center gap-1'>
            <EthereumIcon />
            <div className='text-sm font-medium'>2,75 ETH</div>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <Image
            src='https://images.unsplash.com/photo-1699865701680-ef9214d90fbf?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='The DJ'
            className='object-cover w-8 h-8 rounded-full'
          />

          <div className='text-[12px] leading-5 font-medium'>Ghozali_Ghozalu</div>
        </div>
      </div>
    </section>
  )
}
