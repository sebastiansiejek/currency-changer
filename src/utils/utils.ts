export const currencyFormat = (value: number, label: string): string => `${value.toFixed(2)} ${label}`

export const sortCurrencies = (currencies: object): any => {
  const setCollection = new Set()

  setCollection.add('EUR')
  setCollection.add('GBP')
  setCollection.add('USD')
  setCollection.add('PLN')

  Object.keys(currencies)
    .sort()
    .forEach(key => setCollection.add(key))

  return setCollection
}
