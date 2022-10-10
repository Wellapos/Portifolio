import { Controller, UseFormReturn } from 'react-hook-form'

import { ArrowDown, ArrowUp } from 'global/icons'
import { Button, Stack, Typography } from '@mui/material'
import { IFormInput } from 'global/interfaces/IFormInput'

interface IProps {
  control: any
  field: string
  FormHook: UseFormReturn<IFormInput, any>
}

export function ControllerCustomButtons({ control, field, FormHook }: IProps) {
  return (
    <Controller
      name={field}
      control={control}
      render={({ field: { onChange }, formState: { errors } }) => (
        <Stack>
          <Stack direction="row" spacing={1}>
            <Button
              variant={
                FormHook.watch('type') === 'deposit' ? 'outlined' : 'text'
              }
              color="success"
              onClick={() =>
                onChange(() => FormHook.setValue('type', 'deposit'))
              }
              fullWidth
            >
              <ArrowUp size="small" />
              <Typography variant="body1" sx={{ textTransform: 'none' }}>
                Entrada
              </Typography>
            </Button>
            <Button
              variant={
                FormHook.watch('type') === 'withdraw' ? 'outlined' : 'text'
              }
              color="error"
              onClick={() =>
                onChange(() => FormHook.setValue('type', 'withdraw'))
              }
              fullWidth
            >
              <ArrowDown size="small" />
              <Typography variant="body1" sx={{ textTransform: 'none' }}>
                Saída
              </Typography>
            </Button>
          </Stack>
          {errors.type && (
            <Typography variant="body2" color="error">
              {errors.type.message as string}
            </Typography>
          )}
        </Stack>
      )}
    />
  )
}
