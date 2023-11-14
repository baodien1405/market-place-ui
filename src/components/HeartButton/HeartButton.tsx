import { HeartIcon } from '@/assets/icons'
import { useState } from 'react'
import cn from 'classnames'

export default function HeartButton() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='relative hover:opacity-80 transition cursor-pointer' onClick={() => setToggle((x) => !x)}>
      <HeartIcon
        className={cn('absolute -top-[2px] -right-[2px]', {
          'fill-white': !toggle,
          'fill-rose-500': toggle
        })}
      />
    </div>
  )
}
