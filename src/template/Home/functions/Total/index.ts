import { PriceFormatter } from 'global/functions/PriceFormatter'
import { TransactionProps } from 'global/interfaces/TransactionProps'

export function Total({ transactions }: TransactionProps) {
  const total =
    transactions &&
    transactions.reduce((acc, transaction) => {
      if (transaction.type === 'deposit') {
        return acc + Number(transaction.amount)
      } else {
        return acc - Number(transaction.amount)
      }
    }, 0)

  const formattedTotal = PriceFormatter({ price: total })

  return formattedTotal
}
