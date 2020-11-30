import { TradeRun, newTradeRun } from './trade-run'
import { TradeSet, newTradeSet } from './trade-set'

interface base {
  tradeSet: TradeSet
}

export type TradeRunDetail = TradeRun & base

export function newTradeRunDetail(init: any): TradeRunDetail {
  return {
    ...newTradeRun(init),
    tradeSet: newTradeSet(init.tradeSet),
  }
}