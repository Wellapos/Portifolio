import { Box, Button, Modal, Stack, Typography } from '@mui/material'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormValidate } from 'template/Home/functions/FormValidate'
import { ControllerCustom } from 'components/Home/ControllerCustom'
import { onSubmit } from 'template/Home/functions/onSubmit'
import { ControllerCustomButtons } from 'components/Home/ControllerCustomButtons'

import { IFormInput } from 'global/interfaces/IFormInput'
import { Dispatch, SetStateAction } from 'react'

import { ModalStyle } from 'global/styles/modal'

interface IModalCustom {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function ModalCustom({ open, setOpen }: IModalCustom) {
  const handleClose = () => setOpen(false)

  const FormHook = useForm<IFormInput>({
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
      date: new Date().toISOString().slice(0, 10),
      type: undefined
    },
    resolver: yupResolver(FormValidate)
  })

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={ModalStyle}
        component="form"
        autoComplete="off"
        onSubmit={FormHook.handleSubmit(onSubmit)}
      >
        <Stack spacing={2}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Cadastrar transação
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
            Cadastrar
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
