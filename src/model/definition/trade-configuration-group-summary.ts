import { TradeConfigurationGroup, newTradeConfigurationGroup } from "./trade-configuration-group";
import { TradeConfigurationTradeCountProfit, newTradeConfigurationTradeCountProfit } from "./trade-configuration-trade-count-profit";
import { TradeCount, newTradeCount } from "./trade-count";

export interface TradeConfigurationGroupSummary {
  tradeConfigurationGroup: TradeConfigurationGroup
  tradeCount: TradeCount
  firstTradeConfiguration: TradeConfigurationTradeCountProfit
}

export function newTradeConfigurationGroupSummary(init: any): TradeConfigurationGroupSummary {
  return {
    tradeConfigurationGroup: newTradeConfigurationGroup(init.tradeConfigurationGroup),
    tradeCount: newTradeCount(init.tradeCount),
    firstTradeConfiguration: newTradeConfigurationTradeCountProfit(init.firstTradeConfiguration),
  }
}