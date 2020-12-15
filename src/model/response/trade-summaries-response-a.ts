import { TradePairTradeSummary } from '../definition'

export interface TradeSummariesResponseA {
  unrealizedProfit: number
  realizedProfit: number
  tradeSummaries: TradePairTradeSummary[]
}
