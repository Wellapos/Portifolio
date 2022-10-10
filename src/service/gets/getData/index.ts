import { Transaction } from 'global/interfaces/Transaction'
import { api } from 'service/api'

export async function getData() {
  try {
    const response = await api.get<Transaction[]>('/finances')

    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
