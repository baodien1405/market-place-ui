import { createSearchParams, useNavigate } from 'react-router-dom'
import { Skeleton } from 'antd'
import cn from 'classnames'

import Button from '@/components/Button'
import { path } from '@/constants'
import { useCategoryList, useQueryParams } from '@/hooks'

export function ProductCategories() {
  const navigate = useNavigate()
  const queryParams = useQueryParams()

  const { data, isLoading } = useCategoryList({
    options: {
      revalidateOnFocus: false
    }
  })
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
        <Button
          key={category._id}
          size='middle'
          className={cn({
            'opacity-40': category._id !== queryParams.category,
            'opacity-100': category._id === queryParams.category
          })}
          onClick={() =>
            navigate({
              pathname: path.home,
              search: createSearchParams({
                ...queryParams,
                category: category._id
              }).toString()
            })
          }
        >
          {category.category_name}
        </Button>
      ))}
    </div>
  )
}
