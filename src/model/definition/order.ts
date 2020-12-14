import { TradeDirection, OrderState } from '../enums'

export interface Order {
  tradeRunId: number
  orderID: number
  units: number
  tradeDirection: TradeDirection
  state: OrderState
  profit: number
  timeAtOpen: number
  priceAtOpen: number
  timeAtClose: number
  priceAtClose: number
}
