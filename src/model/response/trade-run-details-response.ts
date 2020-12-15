import { TradeRunDetail, OffsetPaging, tradeRunDetailCustomizer } from '../definition'

export interface TradeRunDetailsResponse {
  tradeRuns: TradeRunDetail[]
  paging: OffsetPaging
}

export const tradeRunDetailsResponseCustomizer = (resp: TradeRunDetailsResponse) => {
  resp.tradeRuns.forEach((o) => tradeRunDetailCustomizer(o))
  return resp
}
