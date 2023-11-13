import { ChangeEvent } from 'react'
import { Input, InputProps } from 'antd'
import cn from 'classnames'
import { Control, useController, FieldValues, Path } from 'react-hook-form'

export type InputFieldProps<T extends FieldValues> = InputProps & {
  requiredIcon?: boolean
  direction?: 'horizontal' | 'vertical'
  label?: string
  name: Path<T>
  control: Control<T>

  classNameWrapper?: string
  classNameInput?: string
  classNameLabel?: string
  classNameErrorMessage?: string
}

export function InputField<T extends FieldValues>({
  label,
  name,
  control,
  prefix,
  direction = 'vertical',
  requiredIcon = false,
  classNameWrapper,
  classNameInput,
  classNameLabel,
  classNameErrorMessage,
  onChange: externalOnChange,
  ...rest
}: InputFieldProps<T>) {
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { error }
  } = useController({
    name,
    control
  })

  return (
    <div className={classNameWrapper}>
      <div className={cn({ 'flex items-center': direction === 'horizontal' })}>
        {label && (
          <div className={cn('flex gap-1', classNameLabel)}>
            {requiredIcon && <span className='text-error-500'>*</span>}

            <p
              className={cn('flex items-start text-sm font-medium text-gray-900', {
                'mb-[6px]': direction === 'vertical'
              })}
            >
              {label}
            </p>
          </div>
        )}

        <Input
          className={classNameInput}
          value={value}
          ref={ref}
          prefix={prefix}
          status={error?.message ? 'error' : undefined}
          onBlur={onBlur}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            onChange(event)
            externalOnChange?.(event)
          }}
          {...rest}
        />
      </div>

      {error?.message && (
        <p className={cn('text-error-500 mt-[6px] text-xs font-normal', classNameErrorMessage)}>{error?.message}</p>
      )}
    </div>
  )
}
