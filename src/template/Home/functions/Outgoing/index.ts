import { PriceFormatter } from 'global/functions/PriceFormatter'
import { TransactionProps } from 'global/interfaces/TransactionProps'

export function Outgoing({ transactions }: TransactionProps) {
  const outgoing =
    transactions &&
    transactions.reduce((acc, transaction) => {
      if (transaction.type === 'withdraw') {
        return acc + Number(transaction.amount)
      } else {
        return acc
      }
    }, 0)

  const formattedOutgoing = PriceFormatter({ price: outgoing })

  return formattedOutgoing
}
