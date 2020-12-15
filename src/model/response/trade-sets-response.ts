import { TradeSet, OffsetPaging } from '../definition'

export interface TradeSetsResponse {
  tradeSets: TradeSet[]
  paging: OffsetPaging
}
