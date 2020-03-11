import React from 'react'
import ExchangeRepository from 'repositories/exchange/ExchangeRepository'
import { ExchangeReducerType } from 'store/types/reducerTypes'
import { Select } from 'antd'
import { connect } from 'react-redux'
import { ExchangeStoreType } from 'store/types/storeTypes'
import { sortCurrencies } from 'utils/utils'

const { Option } = Select

const CurrencySelect = ({ latestRates }: ExchangeStoreType & any) => {
  if (latestRates) {
    return (
      <Select
        defaultValue="EUR"
        style={{ width: 80 }}
        onChange={(value: string) => ExchangeRepository.getLatest({ base: value })}
      >
        {[...sortCurrencies(latestRates?.rates)].map(currency => (
          <Option value={currency} key={currency}>
            {currency}
          </Option>
        ))}
      </Select>
    )
  } else return <span></span>
}

const mapStateToProps = ({ exchange }: ExchangeReducerType) => ({
  latestRates: exchange.latestRates
})

export default connect(mapStateToProps)(CurrencySelect)
