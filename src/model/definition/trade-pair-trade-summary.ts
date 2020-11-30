import { TradePair } from "../enums";
import { TradeSummary, newTradeSummary } from "./trade-summary";

interface base {
  tradePair: TradePair
}

export type TradePairTradeSummary = TradeSummary & base

export function newTradePairTradeSummary(init: any): TradePairTradeSummary {
  return {
    ...newTradeSummary(init),
    tradePair: init.tradePair,
  }
}