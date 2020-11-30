import { TradeSetType } from '../enums'

export interface TradeSet {
  name: string
  version: number
  type: TradeSetType
  createdAt: number
}

export function newTradeSet(init: any): TradeSet {
  return {
    name: init.name,
    version: init.version,
    type: init.type,
    createdAt: init.createdAt,
  }
}