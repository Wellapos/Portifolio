import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

interface IProps {
  size?: 'small' | 'inherit' | 'large' | 'medium' | undefined
  color?:
    | 'inherit'
    | 'success'
    | 'disabled'
    | 'action'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'warning'
    | undefined
}

export function ArrowUp({ size, color }: IProps) {
  return (
    <ArrowCircleUpIcon color={color ?? 'success'} fontSize={size ?? 'large'} />
  )
}

export function ArrowDown({ size, color }: IProps) {
  return (
    <ArrowCircleDownIcon color={color ?? 'error'} fontSize={size ?? 'large'} />
  )
}
