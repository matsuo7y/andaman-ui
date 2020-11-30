import {
  TradeRunType,
  TradeRunState,
} from '../enums'

export interface TradeRun {
  tradeRunID: number
  type: TradeRunType
  state: TradeRunState
  createdAt: number
  startAt: number
  finishAt: number
}

export function newTradeRun(init: any): TradeRun {
  return {
    tradeRunID: init.tradeRunID,
    type: init.type,
    state: init.state,
    createdAt: init.createdAt,
    startAt: init.startAt,
    finishAt: init.finishAt,
  }
}