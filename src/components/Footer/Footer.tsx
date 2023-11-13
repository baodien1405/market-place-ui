import { useForm } from 'react-hook-form'

import { MessageIcon, PhoneIcon } from '@/assets/icons'
import { InputField } from '@/components/FormFields'
import Button from '@/components/Button'

export default function Footer() {
  const { control } = useForm()

  return (
    <footer className='border-t-[1px] border-primary mt-auto bg-[#17161A]'>
      <section className='container text-sm text-white'>
        <div className='mt-[60px] grid lg:grid-cols-3 gap-[180px]'>
          <div>
            <h4 className='uppercase text-[20px] leading-8 font-bold mb-8'>Navigation</h4>
            <section className='grid grid-cols-3 gap-[35px]'>
              <div className='flex flex-col gap-3'>
                <div>Home</div>
                <div>About us</div>
                <div>Our teams</div>
              </div>
              <div className='flex flex-col gap-3'>
                <div>Whitepaper</div>
                <div>Marketplace</div>
                <div>Roadmap</div>
              </div>
              <div className='flex flex-col gap-3'>
                <div>FAQs</div>
                <div>News</div>
                <div>Community</div>
              </div>
            </section>
          </div>

          <div>
            <h4 className='uppercase text-[20px] leading-8 font-bold mb-8'>Contact us</h4>
            <section className='flex flex-col gap-8'>
              <div className='flex items-center gap-[9px]'>
                <PhoneIcon />
                <span>01234568910</span>
              </div>
              <div className='flex items-center gap-[9px]'>
                <MessageIcon />
                <span>tymex-talent@tyme.com</span>
              </div>
            </section>
          </div>

          <div>
            <h4 className='uppercase text-[20px] leading-8 font-bold mb-8'>Subcribe to receive our latest update</h4>
            <section className='flex items-center gap-5'>
              <InputField
                name='email'
                control={control}
                classNameInput='h-[40px] bg-transparent text-white placeholder-[#89888B]'
                placeholder='Your email address'
              />

              <Button size='middle'>Subcribe</Button>
            </section>
          </div>
        </div>

        <div className='h-[1px] bg-[#3A3841] my-[60px]'></div>

        <div className='flex items-center justify-between pb-[208px]'>
          <div>©2023 Tyme - Edit. All Rights reserved.</div>
          <div className='flex items-center gap-[60px] text-white'>
            <div>Security</div>
            <div>Legal</div>
            <div>Privacy</div>
          </div>
        </div>
      </section>
    </footer>
  )
}
