import { TradeSetType } from '../enums'
import 'model/extension'

export interface TradeSet {
  name: string
  version: number
  type: TradeSetType
  createdAt: number | string
}

export const tradeSetCustomizer = (resp: TradeSet) => {
  resp.createdAt = (resp.createdAt as number).toDateString()
  return resp
}
