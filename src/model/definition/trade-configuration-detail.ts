import { TradeConfiguration } from './trade-configuration'
import { TradeAlgorithmDetail } from './trade-algorithm-detail'

interface base {
  algorithm: TradeAlgorithmDetail
}

export type TradeConfigurationDetail = TradeConfiguration & base
