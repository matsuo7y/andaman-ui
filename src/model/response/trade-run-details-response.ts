import {
  TradeRunDetail,
  OffsetPaging,

  newTradeRunDetail,
  newOffsetPaging,
} from '../definition'

export interface TradeRunDetailsResponse {
  tradeRuns: [TradeRunDetail]
  paging: OffsetPaging
}

export function newTradeRunDetailsResponse(init: any): TradeRunDetailsResponse {
  return {
    tradeRuns: init.tradeRuns.map(x => newTradeRunDetail(x)),
    paging: newOffsetPaging(init),
  }
}