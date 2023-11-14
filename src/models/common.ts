export interface IconProps {
  width?: string
  height?: string
  className?: string
  onClick?: () => void
}

export interface SuccessResponse<Data> {
  status: string
  message: string
  code: number
  metadata: Data
}
export interface ErrorResponse<Data> {
  status: string
  message: string
  data?: Data
}
