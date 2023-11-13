import { Col, Row } from 'antd'
import { ProductCard, ProductCategories, ProductFilters } from '@/components/Product'

export function FeatureWorks() {
  return (
    <div className='flex gap-10 py-8 container'>
      <div className='w-[372px] flex-shrink-0'>
        <ProductFilters />
      </div>

      <div className='w-[calc(100%-412px)]'>
        <ProductCategories />

        <Row gutter={[40, 40]}>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
          <Col>
            <ProductCard />
          </Col>
        </Row>
      </div>
    </div>
  )
}
