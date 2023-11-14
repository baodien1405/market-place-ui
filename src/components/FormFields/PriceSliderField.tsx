import { Slider } from 'antd'
import { SliderMarks } from 'antd/es/slider'
import cn from 'classnames'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

type PriceSliderFieldProps<T extends FieldValues> = {
  requiredIcon?: boolean
  direction?: 'horizontal' | 'vertical'
  label?: string
  name: Path<T>
  control: Control<T>

  classNameWrapper?: string
  classNameLabel?: string
  classNameErrorMessage?: string
}

export function PriceSliderField<T extends FieldValues>({
  control,
  name,
  requiredIcon,
  direction,
  label,
  classNameWrapper,
  classNameLabel,
  classNameErrorMessage
}: PriceSliderFieldProps<T>) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  const marks: SliderMarks = {
    0: {
      label: <div className='w-[100px] text-white'>0 ETH</div>
    },
    200: {
      label: <div className='w-[100px] text-white'>200 ETH</div>
    }
  }

  return (
    <div className={classNameWrapper}>
      <div className={cn({ 'flex items-center': direction === 'horizontal' })}>
        {label && (
          <div className={cn('flex gap-1', classNameLabel)}>
            {requiredIcon && <span className='text-error-500'>*</span>}

            <p
              className={cn('flex items-start text-sm font-medium text-white', {
                'mb-[6px]': direction === 'vertical'
              })}
            >
              {label}
            </p>
          </div>
        )}

        <Slider
          marks={marks}
          max={200}
          range
          value={value}
          disabled={false}
          ref={ref}
          onBlur={onBlur}
          onChange={(value: number[]) => onChange(value)}
          styles={{
            track: {
              background:
                'linear-gradient(91deg, rgba(218, 69, 143, 0.00) 0.55%, #DA41A2 24.03%, #DA37CE 83.19%, rgba(218, 52, 221, 0.00) 102.8%)'
            },
            rail: {
              backgroundColor: '#3A3841'
            }
          }}
        />
      </div>
      {error?.message && (
        <p className={cn('text-error-500 mt-[6px] text-xs font-normal', classNameErrorMessage)}>{error?.message}</p>
      )}
    </div>
  )
}
