import { IFormInput } from 'global/interfaces/IFormInput'
import { SubmitHandler } from 'react-hook-form'
import { postData } from 'service/posts/postData'

export const onSubmit: SubmitHandler<IFormInput> = async (data) => {
  try {
    await postData(data)
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
