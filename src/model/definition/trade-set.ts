import { TradeSetType } from '../enums'

export interface TradeSet {
  name: string
  version: number
  type: TradeSetType
  createdAt: number
}