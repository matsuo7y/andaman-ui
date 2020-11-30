import {
  TradePair,
  Timezone,
  TradeDirection,
  TradeAlgorithmType,
} from '../enums'

export interface TradeConfigurationGroup {
  tradePair: TradePair,
  timezone: Timezone,
  tradeDirection: TradeDirection,
  tradeAlgorithmType: TradeAlgorithmType,
}

export function newTradeConfigurationGroup(init: any): TradeConfigurationGroup {
  return {
    tradePair: init.tradePair,
    timezone: init.timezone,
    tradeDirection: init.tradeDirection,
    tradeAlgorithmType: init.tradeAlgorithmType,
  }
}