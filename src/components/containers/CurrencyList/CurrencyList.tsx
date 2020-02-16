import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setLatestRates } from 'actions/actions'

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setLatestRates: res => setLatestRates(res)
    },
    dispatch
  )

const CurrencyList = ({ setLatestRates }: ReturnType<typeof mapDispatchToProps>) => {
  ExchangeRepository.getLatest().then(res => setLatestRates({ payload: res }))
  return <h2>Lista</h2>
}

export default connect(null, mapDispatchToProps)(CurrencyList)
