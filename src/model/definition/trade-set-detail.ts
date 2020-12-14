import { TradeSet } from './trade-set'
import { TradeConfigurationDetail } from './trade-configuration-detail'

interface base {
  configurations: [TradeConfigurationDetail]
}

export type TradeSetDetail = TradeSet & base
