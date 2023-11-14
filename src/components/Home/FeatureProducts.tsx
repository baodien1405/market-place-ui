import { useInView } from 'react-intersection-observer'
import { useNavigate, createSearchParams } from 'react-router-dom'

import { ProductCategories, ProductFilters, ProductList } from '@/components/Product'
import { ListParams, ListResponse, Product, ProductPayload, SuccessResponse } from '@/models'
import { useProductListInfinite, useQueryParams } from '@/hooks'
import Button from '@/components/Button'
import { path } from '@/constants'

export function FeatureProducts() {
  const navigate = useNavigate()
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

  const handleFiltersChange = ({ search, priceRange, price }: ProductPayload) => {
    const [price_min, price_max] = priceRange
    navigate({
      pathname: path.home,
      search: createSearchParams({
        page: '1',
        search: search,
        price_min: String(price_min),
        price_max: String(price_max),
        sort_by: 'product_price',
        order: price
      }).toString()
    })
  }

  return (
    <div className='cbd-bg-feature-product-list'>
      <div className='flex gap-10 py-[120px] container 2xl:px-0 px-[100px]'>
        <div className='w-[372px] flex-shrink-0'>
          <ProductFilters onSubmit={handleFiltersChange} />
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
