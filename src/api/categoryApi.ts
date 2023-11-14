import { Category, SuccessResponse } from '@/models'
import axiosClient from './axiosClient'

export const categoryApi = {
  getAll(): Promise<SuccessResponse<Array<Category>>> {
    return axiosClient.get('/categories')
  }
}
