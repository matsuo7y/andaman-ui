import { TradeRunType, TradeRunState } from '../enums'
import 'model/extension'

export interface TradeRun {
  tradeRunId: number
  type: TradeRunType
  state: TradeRunState
  createdAt: number | string
  startAt: number | string
  finishAt: number | string
}

export const tradeRunCustomizer = (resp: TradeRun) => {
  resp.createdAt = (resp.createdAt as number).toDateString()
  resp.startAt = (resp.startAt as number).toDateString()
  resp.finishAt = (resp.finishAt as number).toDateString()
  return resp
}
