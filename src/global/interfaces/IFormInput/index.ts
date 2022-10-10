export interface IFormInput {
  title: string
  category: string
  amount: number | undefined
  date: string
  type: 'deposit' | 'withdraw'
}
