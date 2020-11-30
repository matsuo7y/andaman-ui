import { TradeRun } from './trade-run'
import { TradeSet } from './trade-set'

interface base {
  tradeSet: TradeSet
}

export type TradeRunDetail = TradeRun & base