import { TradeConfigurationDetail, newTradeConfigurationDetail } from "./trade-configuration-detail";
import { TradeCountProfit, newTradeCountProfit } from "./trade-count-profit";

interface base {
  tradeConfiguration: TradeConfigurationDetail
}

export type TradeConfigurationTradeCountProfit = TradeCountProfit & base

export function newTradeConfigurationTradeCountProfit(init: any): TradeConfigurationTradeCountProfit {
  return {
    ...newTradeCountProfit(init),
    tradeConfiguration: newTradeConfigurationDetail(init.tradeConfiguration),
  }
}