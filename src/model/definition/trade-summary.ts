import { TradeCountProfit } from "./trade-count-profit";

export interface TradeSummary {
  open: TradeCountProfit
  closed: TradeCountProfit
}

export function newTradeSummary(init: any): TradeSummary {
  return {
    open: init.open,
    closed: init.closed,
  }
}