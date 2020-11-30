export interface TradeCountProfit {
  count: number
  profit: number
}

export function newTradeCountProfit(init: any): TradeCountProfit {
  return {
    count: init.count,
    profit: init.profit,
  }
}