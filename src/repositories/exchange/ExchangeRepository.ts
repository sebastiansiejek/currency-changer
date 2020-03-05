import exchangeSlice from 'store/slices/exchangeSlice'
import queryString from 'query-string'
import store from 'store/store'
import { ILatestParams } from './IExchangeRepository'
export default class ExchangeRepository {
  static api_url = 'https://api.exchangeratesapi.io'

  static async getLatest(params?: ILatestParams) {
    store.dispatch(exchangeSlice.actions.fetchLatestRates({ payload: true }))
    const queryParams = params ? `?${queryString.stringify(params)}` : ''

    return await fetch(this.api_url + `/latest${queryParams}`).then(res => {
      store.dispatch(exchangeSlice.actions.fetchLatestRates({ payload: false }))
      res.json()
    })
  }
}
