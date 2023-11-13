import Button from '@/components/Button'

export function ProductCategories() {
  const CATEGORIES = [
    'All',
    'Upper Body',
    'Lower Body',
    'Hat',
    'Shoes',
    'Accessory',
    'Legendary',
    'Mythic',
    'Epic',
    'Rare'
  ]
  return (
    <div className='overflow-x-auto flex items-center gap-6 w-full mb-10'>
      {CATEGORIES.map((category) => (
        <Button key={category} size='middle'>
          {category}
        </Button>
      ))}
    </div>
  )
}
