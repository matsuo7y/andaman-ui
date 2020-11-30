import { TradeSetDetail, newTradeSetDetail } from "../definition";

export interface TradeSetDetailResponse {
  tradeSet: TradeSetDetail
}

export function newTradeSetDetailResponse(init: any): TradeSetDetailResponse {
  return {
    tradeSet: newTradeSetDetail(init.tradeSet),
  }
}