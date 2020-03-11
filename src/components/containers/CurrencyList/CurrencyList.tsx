import 'styles/currency-table.css'
import React from 'react'
import { ExchangeReducerType } from 'store/types/reducerTypes'
import { ExchangeStoreType } from 'store/types/storeTypes'
import { Spin } from 'antd'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { currencyFormat } from 'utils/utils'
import { sortCurrencies } from 'utils/utils'

const CurrencyList = ({ isFetchLatestRates, latestRates }: ExchangeStoreType) => {
  if (isFetchLatestRates && latestRates?.base) {
    const data: { key: string; currency: string; value: string }[] = []

    const { rates } = latestRates

    sortCurrencies(rates).forEach((rateKey: string) => {
      if (rates[rateKey]) {
        data.push({
          key: rateKey,
          currency: rateKey,
          value: currencyFormat(rates[rateKey], rateKey)
        })
      }
    })

    return (
      <Table
        className="currency-table"
        pagination={false}
        dataSource={data}
        columns={[
          {
            title: 'Currency',
            key: 'currency',
            dataIndex: 'currency',
            width: '50%'
          },
          {
            title: 'Value',
            key: 'value',
            dataIndex: 'value',
            width: '50%'
          }
        ]}
      />
    )
  }
  return <Spin />
}

const mapStateToProps = ({ exchange }: ExchangeReducerType) => ({
  isFetchLatestRates: exchange.isFetchLatestRates,
  latestRates: exchange.latestRates
})

export default connect(mapStateToProps)(CurrencyList)
