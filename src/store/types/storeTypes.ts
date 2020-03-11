export type ExchangeStoreType = {
  latestRates?: {
    base: string
    date: string
    rates: { [_: string]: number }
  }
  isFetchLatestRates?: boolean
  currencyValue?: number
}
