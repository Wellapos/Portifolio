import { ReactNode } from 'react'
import { Transaction } from 'global/interfaces/Transaction'

export interface CardProps {
  value: Transaction[]
  title?: string
  icon?: ReactNode
  cardFunction?: (props: any) => string
}
