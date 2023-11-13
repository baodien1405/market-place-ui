import { useForm } from 'react-hook-form'
import { InputField, SelectField } from '@/components/FormFields'
import { SearchIcon } from '@/assets/icons'
import Button from '@/components/Button'

export function ProductFilters() {
  const { control, handleSubmit } = useForm()

  const handleFiltersSubmit = () => {}

  return (
    <form onSubmit={handleSubmit(handleFiltersSubmit)}>
      <InputField
        name='search'
        control={control}
        classNameInput='h-[40px] bg-transparent text-white placeholder-[#89888B]'
        classNameWrapper='mb-6'
        placeholder='Quick search'
        prefix={<SearchIcon />}
      />

      <SelectField
        name='tier'
        label='TIER'
        control={control}
        className='h-[40px] w-full mb-6'
        placeholder='Select a tier'
        options={[]}
        showSearch
      />

      <SelectField
        name='theme'
        label='THEME'
        control={control}
        className='h-[40px] w-full mb-6'
        placeholder='Select a theme'
        options={[]}
        showSearch
      />
      <SelectField
        name='time'
        label='TIME'
        control={control}
        className='h-[40px] w-full mb-6'
        placeholder='Select a time'
        options={[]}
        showSearch
      />
      <SelectField
        name='price'
        label='PRICE'
        control={control}
        className='h-[40px] w-full'
        placeholder='Select a price'
        options={[]}
        showSearch
      />

      <Button size='middle' className='mt-6'>
        Search
      </Button>
    </form>
  )
}
