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