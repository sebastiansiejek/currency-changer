import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import { ExchangeReducerType } from 'store/types/reducerTypes'
import { Spin } from 'antd'

const CurrencyList = ({ isFetchLatestRates }: { isFetchLatestRates: boolean }) => {
  if (isFetchLatestRates) {
    return (
      <Row>
        <Col>
          <h2>test</h2>
        </Col>
      </Row>
    )
  }
  return <Spin />
}

const mapStateToProps = ({ exchange }: ExchangeReducerType) => ({
  isFetchLatestRates: exchange.isFetchLatestRates
})

export default connect(mapStateToProps)(CurrencyList)
