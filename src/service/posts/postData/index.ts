import { IFormInput } from 'global/interfaces/IFormInput'
import { Transaction } from 'global/interfaces/Transaction'
import { api } from 'service/api'

export async function postData(data: IFormInput) {
  try {
    await api.post<Transaction>('/finances', data)
  } catch (error) {
    console.log(error)
  }
}
