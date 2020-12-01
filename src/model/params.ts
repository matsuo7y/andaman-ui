import {
  OrderState,
  Timezone,
  TradeAlgorithmType,
  TradeDirection,
  TradePair,
  TradeRunType,
  TradeSetType,
} from './enums'

export type TradeRunsParam = {
  type: TradeRunType,
  count: number,
  offset: number,
}

export type TradeSetsParam = {
  type: TradeSetType,
  count: number,
  offset: number,
}

export type TradeSetParam = {
  name: string,
  version: number,
}

export type OrdersParam = {
  tradeRunId: number,
  orderState: OrderState,
  tradePair: TradePair,
  timezone: Timezone,
  tradeDirection: TradeDirection,
  algorithmType: TradeAlgorithmType,
  count: number,
  offset: number,
}

export type TradeSummariesAParam = {
  tradeRunId: number,
  start: number,
}

export type TradeSummariesBParam = {
  tradeRunId: number,
  tradePair: TradePair,
  timezone: Timezone,
  start: number,
}

export type TradeCountProfitsParam = {
  tradeRunId: number,
  tradePair: TradePair,
  timezone: Timezone,
  tradeDirection: TradeDirection,
  algorithmType: TradeAlgorithmType,
}

export type TradeConfigurationGroupSummariesParam = {
  tradeRunId: number,
  count: number,
  offset: number,
}

export type AddTradeSetByPresetData = {
  name: string,
}

export type CreateTradeData = {
  tradeSetName: string,
  version: number,
  type: TradeRunType,
  start: number,
  end: number,
  parallel: number,
}