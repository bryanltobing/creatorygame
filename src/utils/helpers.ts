export const getCharacterText = (characterCode: 1 | 2) => {
  switch (characterCode) {
    case 1:
      return 'Wizard'
    case 2:
      return 'Elf'
    default:
      return 'Wizad'
  }
}

export const getCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}
