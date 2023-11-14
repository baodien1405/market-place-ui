import { Select, SelectProps } from 'antd'
import cn from 'classnames'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

export type SelectFieldProps<T, K extends FieldValues> = Partial<SelectProps> & {
  name: Path<K>
  control: Control<K>
  options: T[]
  label?: string
  defaultValue?: string | number
  requiredIcon?: boolean
  directionLabel?: 'horizontal' | 'vertical'
  popupClassName?: string
  classNameWrapper?: string
  classNameSelect?: string
  classNameLabel?: string
  classNameErrorMessage?: string
}

export function SelectField<T, K extends FieldValues>({
  name,
  control,
  label,
  options,
  popupClassName,
  classNameWrapper,
  classNameSelect,
  classNameLabel,
  classNameErrorMessage,
  defaultValue,
  directionLabel = 'vertical',
  requiredIcon = false,
  onChange: externalOnChange,
  ...rest
}: SelectFieldProps<T, K>) {
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  return (
    <div className={classNameWrapper}>
      <div
        className={cn({
          'flex items-center': directionLabel === 'horizontal'
        })}
      >
        {label && (
          <div className={cn('flex gap-1', classNameLabel)}>
            {requiredIcon && <span className='text-error-500'>*</span>}

            <p
              className={cn('flex items-start text-sm font-medium text-white', {
                'mb-[6px]': directionLabel === 'vertical'
              })}
            >
              {label}
            </p>
          </div>
        )}

        <Select
          popupClassName={popupClassName}
          className={cn('w-full default-select', classNameSelect)}
          defaultValue={defaultValue ? defaultValue : undefined}
          value={value}
          ref={ref}
          status={error?.message ? 'error' : undefined}
          filterOption={(input, option) =>
            String(option?.children)
              .toLowerCase()
              .indexOf(input.toLowerCase()) >= 0
          }
          onChange={(value, option) => {
            onChange(value)
            externalOnChange?.(value, option)
          }}
          onBlur={onBlur}
          {...rest}
        >
          {options.map((option) => (
            <Select.Option key={option.value as string} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>

      {error?.message && (
        <p className={cn('text-error-500 mt-[6px] text-xs font-normal', classNameErrorMessage)}>{error?.message}</p>
      )}
    </div>
  )
}
