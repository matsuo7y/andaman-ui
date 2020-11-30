import { TradePairTradeSummary, newTradePairTradeSummary } from "../definition";

export interface TradeSummariesResponseA {
  unrealizedProfit: number
  realizedProfit: number
  tradeSummaries: [TradePairTradeSummary]
}

export function newTradeSummariesResponseA(init: any): TradeSummariesResponseA {
  return {
    unrealizedProfit: init.unrealizedProfit,
    realizedProfit: init.realizedProfit,
    tradeSummaries: init.tradeSummaries.map((x: any) => newTradePairTradeSummary(x)),
  }
}