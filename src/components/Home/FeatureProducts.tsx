import { useInView } from 'react-intersection-observer'

import { ProductCategories, ProductFilters, ProductList } from '@/components/Product'
import { ListParams, ListResponse, Product, SuccessResponse } from '@/models'
import { useProductListInfinite, useQueryParams } from '@/hooks'
import Button from '@/components/Button'

export function FeatureProducts() {
  const queryParams = useQueryParams()
  const filters: Partial<ListParams> = {
    page: 1,
    limit: 9,
    ...queryParams
  }

  const { data, isLoading, isValidating, setSize } = useProductListInfinite({
    params: filters,
    options: {
      revalidateOnFocus: false
    }
  })

  const { ref } = useInView({
    onChange(inView) {
      if (inView) setSize((x) => x + 1)
    }
  })

  const productList: Array<Product> =
    data?.reduce((result: Array<Product>, currentPage: SuccessResponse<ListResponse<Product>>) => {
      const currentParts = currentPage?.metadata?.items || []
      result.push(...currentParts)

      return result
    }, []) || []

  const totalRows = data?.[0]?.metadata?.pagination?.totalRows || 0
  const showLoadMore = totalRows > productList.length
  const loadingMore = isValidating && productList.length > 0

  return (
    <div className='bg-gray-200'>
      <div className='flex gap-10 py-[120px] container 2xl:px-0 px-[100px]'>
        <div className='w-[372px] flex-shrink-0'>
          <ProductFilters />
        </div>

        <div className='w-[calc(100%-412px)]'>
          <ProductCategories />

          <ProductList productList={productList} loading={isLoading} />

          {showLoadMore && (
            <div className='text-center mt-8'>
              <Button
                ref={ref}
                size='middle'
                loading={loadingMore}
                disabled={loadingMore}
                onClick={() => setSize((x) => x + 1)}
              >
                View more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
