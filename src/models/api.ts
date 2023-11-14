export interface ListParams {
  page: number
  limit: number
  search: string
  price_min: string
  price_max: string
  category: string
}

export interface Pagination {
  limit: number
  page: number
  totalRows: number
}

export interface ListResponse<T> {
  items: Array<T>
  pagination?: Pagination
}
