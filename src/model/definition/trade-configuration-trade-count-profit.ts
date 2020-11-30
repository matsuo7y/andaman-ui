import { TradeConfigurationDetail } from "./trade-configuration-detail";
import { TradeCountProfit } from "./trade-count-profit";

interface base {
  tradeConfiguration: TradeConfigurationDetail
}

export type TradeConfigurationTradeCountProfit = TradeCountProfit & base