import {
  TradeDirection,
  OrderState,
} from '../enums'

export interface Order {
  tradeRunID: number
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