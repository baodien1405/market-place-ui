import { useForm } from 'react-hook-form'
import debounce from 'lodash.debounce'
import { InputField, PriceSliderField, SelectField } from '@/components/FormFields'
import { SearchIcon } from '@/assets/icons'
import Button from '@/components/Button'
import { ProductPayload } from '@/models'

interface ProductFiltersProps {
  initialValues?: ProductPayload
  onSubmit?: (payload: ProductPayload) => void
}

export function ProductFilters({ initialValues, onSubmit }: ProductFiltersProps) {
  const { control, reset, handleSubmit } = useForm<ProductPayload>({
    defaultValues: {
      search: '',
      priceRange: [20, 80],
      price: 'asc',
      ...initialValues
    }
  })

  const handleFiltersSubmit = (payload: ProductPayload) => {
    onSubmit?.(payload)
  }

  const debounceSearchChange = debounce(handleSubmit(handleFiltersSubmit), 350)

  return (
    <form onSubmit={handleSubmit(handleFiltersSubmit)}>
      <InputField
        name='search'
        control={control}
        classNameInput='h-[40px] text-white placeholder-[#89888B]'
        classNameWrapper='mb-6'
        placeholder='Quick search'
        prefix={<SearchIcon />}
        onChange={() => debounceSearchChange()}
      />

      <PriceSliderField name='priceRange' control={control} label='RANGE PRICE' classNameWrapper='mb-12' />

      <SelectField
        name='price'
        label='PRICE'
        control={control}
        className='h-[40px] w-full'
        placeholder='Select a price'
        options={[
          { label: 'Low to high', value: 'asc' },
          { label: 'High to low', value: 'desc' }
        ]}
      />

      <div className='flex items-center justify-center gap-3'>
        <Button
          size='middle'
          type='default'
          className='mt-6 text-white'
          htmlType='button'
          onClick={() => {
            reset()
            handleSubmit(handleFiltersSubmit)()
          }}
        >
          Reset filters
        </Button>

        <Button size='middle' className='mt-6' htmlType='submit'>
          Search
        </Button>
      </div>
    </form>
  )
}
