import Button from '@/components/Button'
import { path } from '@/constants'
import { useCategoryList } from '@/hooks'
import { Skeleton } from 'antd'
import { useNavigate } from 'react-router-dom'

export function ProductCategories() {
  const navigate = useNavigate()
  const { data, isLoading } = useCategoryList({})
  const categoryList = data?.metadata || []

  if (isLoading) {
    return (
      <div className='overflow-x-auto flex items-center gap-6 w-full mb-10'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton.Button key={index} active={isLoading} size='default' shape='square' />
        ))}
      </div>
    )
  }

  return (
    <div className='overflow-x-auto flex items-center gap-6 w-full mb-10'>
      {categoryList.map((category) => (
        <Button key={category._id} size='middle' onClick={() => navigate(`${path.home}?category=${category._id}`)}>
          {category.category_name}
        </Button>
      ))}
    </div>
  )
}
