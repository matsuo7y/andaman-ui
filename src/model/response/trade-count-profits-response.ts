import {
  TradeConfigurationTradeCountProfit,
  TradeCount
} from "../definition";

export interface TradeCountProfitsResponse {
  tradeCount: TradeCount
  tradeCountProfits: [TradeConfigurationTradeCountProfit]
}