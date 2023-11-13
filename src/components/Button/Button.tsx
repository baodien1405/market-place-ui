import { ReactNode } from 'react'
import { Button as AntDesignButton } from 'antd'
import cn from 'classnames'

export interface ButtonProps {
  type?: 'primary' | 'link' | 'text' | 'default' | 'dashed'
  size?: 'large' | 'middle' | 'small'
  className?: string
  htmlType?: 'button' | 'submit' | 'reset'
  loading?: boolean
  disabled?: boolean
  icon?: ReactNode
  children?: ReactNode
  href?: string
  target?: string
  id?: string
  danger?: boolean
  onClick?: () => void
}

const classes = {
  root: 'inline-flex items-center justify-center flex-shrink-0 font-medium rounded-[6px] outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700',
  primary: 'bg-gradient-to-r from-[#DA458F] to-[#DA34DD] text-white border border-transparent',
  secondary: 'border border-primary-500 bg-transparent text-primary-500 hover:bg-primary-50',
  tertiary: 'border border-transparent text-primary-500 hover:text-primary-500 hover:bg-primary-50',
  small: 'px-4 py-1 h-7 text-sm',
  middle: 'px-5 py-2 h-10 text-sm',
  large: 'px-6 py-4 h-12 text-base'
}

const Button = ({
  htmlType,
  loading,
  disabled = false,
  icon,
  children,
  className,
  type = 'primary',
  size = 'large',
  href,
  target,
  id,
  danger,
  onClick
}: ButtonProps) => {
  const classesName = cn(
    classes.root,
    {
      [classes.primary]: !disabled && type === 'primary',
      [classes.secondary]: !disabled && type === 'default',
      [classes.tertiary]: !disabled && type === 'text',
      [classes.small]: size === 'small',
      [classes.middle]: size === 'middle',
      [classes.large]: size === 'large'
    },
    className
  )

  return (
    <AntDesignButton
      className={classesName}
      type={type}
      disabled={disabled}
      htmlType={htmlType}
      loading={loading}
      icon={icon}
      href={href}
      target={target}
      onClick={onClick}
      id={id}
      danger={danger}
    >
      {children}
    </AntDesignButton>
  )
}

export default Button
