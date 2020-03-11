import React from 'react'
import { ExchangeReducerType } from 'store/types/reducerTypes'
import { ExchangeStoreType } from 'store/types/storeTypes'
import { Spin } from 'antd'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { currencyFormat } from 'utils/utils'

const CurrencyList = ({ isFetchLatestRates, latestRates }: ExchangeStoreType) => {
  if (isFetchLatestRates && latestRates?.base) {
    const data: { key: string; currency: string; value: string }[] = []

    for (let [key, value] of Object.entries(latestRates.rates)) {
      data.push({
        key,
        currency: key,
        value: currencyFormat(value, key)
      })
    }

    return (
      <Table
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
      ></Table>
    )
  }
  return <Spin />
}

const mapStateToProps = ({ exchange }: ExchangeReducerType) => ({
  isFetchLatestRates: exchange.isFetchLatestRates,
  latestRates: exchange.latestRates
})

export default connect(mapStateToProps)(CurrencyList)
