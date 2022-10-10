import { PriceFormatter } from 'global/functions/PriceFormatter'
import { TransactionProps } from 'global/interfaces/TransactionProps'

export function Incoming({ transactions }: TransactionProps) {
  const incoming =
    transactions &&
    transactions.reduce((acc, transaction) => {
      if (transaction.type === 'deposit') {
        return acc + Number(transaction.amount)
      } else {
        return acc
      }
    }, 0)

  const formattedIncoming = PriceFormatter({ price: incoming })

  return formattedIncoming
}
