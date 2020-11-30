import {
  TradeAlgorithmType,
  TradeDirection,
} from '../enums'

export interface TradeAlgorithm {
  type: TradeAlgorithmType
  tradeDirection: TradeDirection
}