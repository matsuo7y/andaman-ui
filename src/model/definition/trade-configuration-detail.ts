import { TradeConfiguration, newTradeConfiguration } from './trade-configuration'
import { TradeAlgorithmDetail, newTradeAlgorithmDetail } from './trade-algorithm-detail'

interface base {
  algorithm: TradeAlgorithmDetail  
}

export type TradeConfigurationDetail = TradeConfiguration & base

export function newTradeConfigurationDetail(init: any): TradeConfigurationDetail {
  return {
    ...newTradeConfiguration(init),
    algorithm: newTradeAlgorithmDetail(init.algorithm),
  }
}