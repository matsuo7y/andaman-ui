import { TradeConfigurationDetail } from "./trade-configuration-detail";
import { TradeSummary } from './trade-summary' 

interface base {
  tradeConfiguration: TradeConfigurationDetail
}

export type TradeConfigurationTradeSummary = TradeSummary & base