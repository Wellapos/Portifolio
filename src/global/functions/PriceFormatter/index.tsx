interface PriceProps {
  price: number
}

export function PriceFormatter({ price }: PriceProps) {
  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
  return priceFormatted
}
