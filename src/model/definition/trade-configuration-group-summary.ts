import { TradeConfigurationGroup } from './trade-configuration-group'
import { TradeConfigurationTradeCountProfit } from './trade-configuration-trade-count-profit'
import { TradeCount } from './trade-count'

export interface TradeConfigurationGroupSummary {
  tradeConfigurationGroup: TradeConfigurationGroup
  tradeCount: TradeCount
  firstTradeConfiguration: TradeConfigurationTradeCountProfit
}
