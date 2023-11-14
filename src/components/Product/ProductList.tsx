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
      <Row gutter={[40, 40]}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Col key={index}>
            <ProductSkeleton />
          </Col>
        ))}
      </Row>
    )
  }

  return (
    <Row gutter={[40, 40]}>
      {productList.map((product) => (
        <Col key={product._id}>
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  )
}
