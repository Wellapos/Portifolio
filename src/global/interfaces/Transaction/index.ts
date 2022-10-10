export interface Transaction {
  id?: number
  title: string
  category: string
  amount: number | undefined
  date: string
  type: 'deposit' | 'withdraw'
}
