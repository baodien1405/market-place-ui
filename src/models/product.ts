export interface Product {
  _id: string
  product_name: string
  product_thumb: string
  product_description: string
  product_slug: string
  product_price: number
  product_quantity: number
  product_category: {
    _id: string
    category_name: string
  }
}

export interface ProductPayload {
  search: string
  priceRange: number[]
  price: 'asc' | 'desc'
}
