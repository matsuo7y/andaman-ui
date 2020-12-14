import { TradePair, Timezone, TradeDirection, TradeAlgorithmType } from '../enums'

export interface TradeConfigurationGroup {
  tradePair: TradePair
  timezone: Timezone
  tradeDirection: TradeDirection
  tradeAlgorithmType: TradeAlgorithmType
}
