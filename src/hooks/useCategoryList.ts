import { categoryApi } from '@/api'
import { QueryKeys } from '@/constants'
import useSWR, { SWRConfiguration } from 'swr'

export interface UseCategoryListProps {
  options?: SWRConfiguration
  enabled?: boolean
}

export function useCategoryList({ options, enabled = true }: UseCategoryListProps) {
  const swrResponse = useSWR(enabled ? [QueryKeys.GET_CATEGORY_LIST] : null, () => categoryApi.getAll(), options)

  return swrResponse
}
