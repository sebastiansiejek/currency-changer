export default class ExchangeRepository {
  static api_url = 'https://api.exchangeratesapi.io'

  static async getLatest() {
    return await fetch(this.api_url + '/latest').then(res => res.json())
  }
}
