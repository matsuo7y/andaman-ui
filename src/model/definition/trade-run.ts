import {
  TradeRunType,
  TradeRunState,
} from '../enums'

export interface TradeRun {
  tradeRunId: number
  type: TradeRunType
  state: TradeRunState
  createdAt: number
  startAt: number
  finishAt: number
}