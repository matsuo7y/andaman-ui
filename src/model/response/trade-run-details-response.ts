import { TradeRunDetail, OffsetPaging } from '../definition'

export interface TradeRunDetailsResponse {
  tradeRuns: TradeRunDetail[]
  paging: OffsetPaging
}
