import { TradeConfigurationTradeSummary, newTradeConfigurationTradeSummary } from "../definition";

export interface TradeSummariesResponseB {
  unrealizedProfit: number
  realizedProfit: number
  tradeSummaries: [TradeConfigurationTradeSummary]
}

export function newTradeSummariesResponseB(init: any): TradeSummariesResponseB {
  return {
    unrealizedProfit: init.unrealizedProfit,
    realizedProfit: init.realizedProfit,
    tradeSummaries: init.tradeSummaries.map((x: any) => newTradeConfigurationTradeSummary(x)),
  }
}