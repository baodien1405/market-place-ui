import { IconProps } from '@/models'

export const ArrowDownIcon = ({ width = '24px', height = '24px', className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.2682 8.70713C17.8777 8.3166 17.2445 8.31659 16.854 8.70712L12.7682 12.7929C12.3777 13.1834 11.7445 13.1834 11.354 12.7929L7.2682 8.70711C6.87768 8.31658 6.24451 8.31658 5.85399 8.7071L5.70722 8.85387C5.31668 9.24441 5.3167 9.87762 5.70727 10.2681L11.354 15.9141C11.7445 16.3045 12.3776 16.3045 12.7681 15.9141L18.4149 10.2681C18.8054 9.87761 18.8055 9.24441 18.4149 8.85387L18.2682 8.70713Z'
      fill='white'
    />
  </svg>
)
