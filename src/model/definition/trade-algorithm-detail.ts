import { TradeAlgorithm, newTradeAlgorithm } from './trade-algorithm'

interface base {
  param: any
}

export type TradeAlgorithmDetail = TradeAlgorithm & base

export function newTradeAlgorithmDetail(init: any): TradeAlgorithmDetail {
  return {
    ...newTradeAlgorithm(init),
    param: init.param,
  }
}