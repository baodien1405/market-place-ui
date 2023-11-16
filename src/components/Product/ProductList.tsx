import { Col, Row } from 'antd'
import { ProductCard } from './ProductCard'
import { Product } from '@/models'
import { ProductSkeleton } from '.'

interface ProductListProps {
  productList: Product[]
  loading: boolean
}

export function ProductList({ productList, loading }: ProductListProps) {
  if (loading) {
    return (
      <Row gutter={[27, 27]}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Col key={index}>
            <ProductSkeleton />
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <Row gutter={[27, 27]} justify={{ xs: 'center', sm: 'center', md: 'start', lg: 'start', xl: 'start' }}>
      {productList.map((product) => (
        <Col key={product._id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}
