import { TradeConfigurationDetail, newTradeConfigurationDetail } from "./trade-configuration-detail";
import { TradeSummary, newTradeSummary } from './trade-summary' 

interface base {
  tradeConfiguration: TradeConfigurationDetail
}

export type TradeConfigurationTradeSummary = TradeSummary & base

export function newTradeConfigurationTradeSummary(init: any): TradeConfigurationTradeSummary {
  return {
    ...newTradeSummary(init),
    tradeConfiguration: newTradeConfigurationDetail(init.tradeConfiguration)
  }
}