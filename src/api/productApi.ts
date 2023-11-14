import { ListParams, ListResponse, Product, SuccessResponse } from '@/models'
import axiosClient from './axiosClient'

export const productApi = {
  getAll(params: Partial<ListParams>): Promise<SuccessResponse<ListResponse<Product>>> {
    return axiosClient.get('/products', { params })
  }
}
