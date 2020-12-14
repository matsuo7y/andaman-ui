export interface TradeCount {
  positiveProfitCount: number
  negativeProfitCount: number
}

export function newTradeCount(init: any): TradeCount {
  return {
    positiveProfitCount: init.positiveProfitCount,
    negativeProfitCount: init.negativeProfitCount
  }
}
