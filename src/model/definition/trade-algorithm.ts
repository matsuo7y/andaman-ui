import {
  TradeAlgorithmType,
  TradeDirection,
} from '../enums'

export interface TradeAlgorithm {
  type: TradeAlgorithmType
  tradeDirection: TradeDirection
}

export function newTradeAlgorithm(init: any): TradeAlgorithm {
  return {
    type: init.type,
    tradeDirection: init.tradeDirection,
  }
}