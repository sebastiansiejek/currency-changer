export type ExchangeStoreType = {
  latestRates: {
    base: string
    date: string
    rates: Object
  }
  isFetchLatestRates: boolean
}
