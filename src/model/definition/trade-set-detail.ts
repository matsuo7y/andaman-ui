import { TradeSet, newTradeSet } from './trade-set'
import { TradeConfigurationDetail, newTradeConfigurationDetail } from './trade-configuration-detail'

interface base {
  configurations: [TradeConfigurationDetail]
}

export type TradeSetDetail = TradeSet & base

export function newTradeSetDetail(init: any): TradeSetDetail {
  return {
    ...newTradeSet(init),
    configurations: init.configurations.map((x: any) => newTradeConfigurationDetail(x)),
  }
}