import { Transaction } from 'global/interfaces/Transaction'
import { SubmitHandler } from 'react-hook-form'
import { putData } from 'service/puts/putData'

export const onSubmitPut: SubmitHandler<Transaction> = async (data) => {
  try {
    await putData(data)
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
