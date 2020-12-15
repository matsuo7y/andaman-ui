import { TradeConfigurationTradeSummary } from '../definition'

export interface TradeSummariesResponseB {
  unrealizedProfit: number
  realizedProfit: number
  tradeSummaries: TradeConfigurationTradeSummary[]
}
