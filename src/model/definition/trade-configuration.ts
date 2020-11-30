import {
  TradePair,
  Timezone,
} from '../enums'

export interface TradeConfiguration {
  tradePair: TradePair,
  timezone: Timezone,
}

export function newTradeConfiguration(init: any): TradeConfiguration {
  return {
    tradePair: init.tradePair,
    timezone: init.timezone,
  }
}