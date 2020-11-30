import { 
  TradeSet,
  OffsetPaging,

  newTradeSet,
  newOffsetPaging,
} from '../definition'

export interface TradeSetsResponse {
  tradeSets: [TradeSet]
  paging: OffsetPaging
}

export function newTradeSetsResponse(init: any): TradeSetsResponse {
  return {
    tradeSets: init.tradeSets.map((x: any) => newTradeSet(x)),
    paging: newOffsetPaging(init.paging),
  }
}