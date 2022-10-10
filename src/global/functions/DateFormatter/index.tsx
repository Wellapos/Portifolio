interface DateProps {
  date: string
}

export function DateFormatter({ date }: DateProps) {
  const dateFormatted = new Date(date).toLocaleDateString('pt-BR')
  return dateFormatted
}
