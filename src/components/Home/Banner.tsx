import images from '@/assets/images'
import Image from '@/components/Image'

export function Banner() {
  return (
    <div>
      <Image src={images.banner} alt='banner' />
    </div>
  )
}
