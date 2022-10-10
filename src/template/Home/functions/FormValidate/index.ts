import * as yup from 'yup'

export const FormValidate = yup.object().shape({
  title: yup.string().required('Nome é obrigatório').trim(),
  amount: yup
    .number()
    .required('Valor é obrigatório')
    .positive('Valor deve ser positivo')
    .typeError('Valor deve ser um número'),
  category: yup.string().required('Categoria é obrigatória').trim(),
  date: yup.date().required('Data é obrigatório'),
  type: yup
    .string()
    .oneOf(['deposit', 'withdraw'])
    .required('Tipo de transação é obrigatório')
    .trim()
})
