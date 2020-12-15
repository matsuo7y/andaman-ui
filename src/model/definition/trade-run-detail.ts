import { TradeRun, tradeRunCustomizer } from './trade-run'
import { TradeSet, tradeSetCustomizer } from './trade-set'

interface base {
  tradeSet: TradeSet
}

export type TradeRunDetail = TradeRun & base

export const tradeRunDetailCustomizer = (resp: TradeRunDetail) => {
  tradeRunCustomizer(resp as TradeRun)
  tradeSetCustomizer(resp.tradeSet)
  return resp
}
