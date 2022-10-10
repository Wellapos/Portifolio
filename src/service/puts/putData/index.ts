import { Transaction } from 'global/interfaces/Transaction'
import { api } from 'service/api'

export async function putData(data: Transaction) {
  try {
    await api.put<Transaction>(`/finances/${data.id}`, data)
  } catch (error) {
    console.log(error)
  }
}
