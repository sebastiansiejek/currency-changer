import React from 'react'
import { InputNumber } from 'antd'
import store from 'store/store'
import exchangeSlice from 'store/slices/exchangeSlice'

export default () => {
  return (
    <InputNumber
      min={0}
      step={1}
      placeholder="Value"
      onChange={value => {
        store.dispatch(exchangeSlice.actions.setCurrencyValue(value))
      }}
    />
  )
}
