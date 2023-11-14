import useSWRInfinite, { SWRInfiniteConfiguration } from 'swr/infinite'

import { ListParams, ListResponse, Product, SuccessResponse } from '@/models'
import { productApi } from '@/api/productApi'

export interface UseProductListInfiniteProps {
  params: Partial<ListParams>
  options?: SWRInfiniteConfiguration
  enabled?: boolean
}

export function useProductListInfinite({ params, options, enabled = true }: UseProductListInfiniteProps) {
  const swrResponse = useSWRInfinite<SuccessResponse<ListResponse<Product>>>(
    (index: number, previousPageData: SuccessResponse<ListResponse<Product>>) => {
      if (!enabled) return null

      const page = index + 1
      const query: Partial<ListParams> = {
        ...params,
        limit: 3,
        page: page
      }

      if (previousPageData) {
        const { limit, totalRows } = previousPageData?.metadata?.pagination || {
          limit: 10,
          totalRows: 0
        }
        const totalPages = Math.ceil(totalRows / limit)
        if (page > totalPages) return null
      }

      return query
    },
    (param: Partial<ListParams>) => productApi.getAll(param),
    {
      revalidateFirstPage: false,
      dedupingInterval: 60 * 1000,
      ...options
    }
  )

  return swrResponse
}
