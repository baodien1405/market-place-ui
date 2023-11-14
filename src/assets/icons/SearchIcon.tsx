import { IconProps } from '@/models'

export const SearchIcon = ({ width = '17px', height = '18px', className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 14 14'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_3826_27914)'>
      <path
        d='M12.8334 12.8332L8.94459 8.94428M10.2408 5.70354C10.2408 8.20928 8.20952 10.2406 5.70378 10.2406C3.19805 10.2406 1.16675 8.20928 1.16675 5.70354C1.16675 3.1978 3.19805 1.1665 5.70378 1.1665C8.20952 1.1665 10.2408 3.1978 10.2408 5.70354Z'
        stroke='#9CA3AF'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_3826_27914'>
        <rect width='14' height='14' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
