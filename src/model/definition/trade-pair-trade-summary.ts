import { TradePair } from '../enums'
import { TradeSummary } from './trade-summary'

interface base {
  tradePair: TradePair
}

export type TradePairTradeSummary = TradeSummary & base
