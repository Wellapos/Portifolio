import { TextField, TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

type ComponentProps = {
  control: any
  label?: string
  field: string
} & TextFieldProps

export function ControllerCustom({
  control,
  label,
  field,
  ...args
}: ComponentProps) {
  return (
    <Controller
      name={field}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          margin="normal"
          size="medium"
          label={label}
          error={!!error}
          helperText={error?.message}
          {...field}
          {...args}
        />
      )}
    />
  )
}
