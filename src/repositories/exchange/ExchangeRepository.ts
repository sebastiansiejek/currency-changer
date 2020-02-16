import queryString from 'query-string'
import { ILatestParams } from './IExchangeRepository'
export default class ExchangeRepository {
  static api_url = 'https://api.exchangeratesapi.io'

  static async getLatest(params?: ILatestParams) {
    const queryParams = params ? `?${queryString.stringify(params)}` : ''
    return await fetch(this.api_url + `/latest${queryParams}`).then(res => res.json())
  }
}
