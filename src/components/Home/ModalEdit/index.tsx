import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'
import { ControllerCustom } from 'components/Home/ControllerCustom'
import { ControllerCustomButtons } from 'components/Home/ControllerCustomButtons'
import { Transaction } from 'global/interfaces/Transaction'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'
import { FormValidate } from 'template/Home/functions/FormValidate'
import { onSubmitPut } from 'template/Home/functions/onSubmitPut'
import { ModalStyle } from 'global/styles/modal'

interface IModalCustom {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  id: number | undefined
  data: Transaction[]
  setId: Dispatch<SetStateAction<number | undefined>>
}

export function ModalEdit({ open, setOpen, id, data, setId }: IModalCustom) {
  const handleClose = () => {
    setOpen(false)
    setId(undefined)
  }

  const values = data && data.filter((item) => item.id === id)

  const FormHook = useForm<Transaction>({
    defaultValues: {
      id,
      title: values && values[0].title,
      amount: values && values[0].amount,
      category: values && values[0].category,
      date: new Date(values && values[0].date).toISOString().slice(0, 10),
      type: values && values[0].type
    },
    resolver: yupResolver(FormValidate)
  })

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={ModalStyle}
        component="form"
        autoComplete="off"
        onSubmit={FormHook.handleSubmit(onSubmitPut)}
      >
        <Stack spacing={2}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Editar transação
          </Typography>
          <ControllerCustom
            control={FormHook.control}
            label="Nome"
            field="title"
          />
          <ControllerCustom
            control={FormHook.control}
            label="Preço"
            field="amount"
            datatype="number"
          />
          <ControllerCustomButtons
            control={FormHook.control}
            field="type"
            FormHook={FormHook}
          />
          <ControllerCustom
            control={FormHook.control}
            label="Categoria"
            field="category"
          />
          <ControllerCustom
            control={FormHook.control}
            field="date"
            type={'date'}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: '#6933FF',
              borderRadius: '8px',
              color: '#fff'
            }}
          >
            Editar
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
