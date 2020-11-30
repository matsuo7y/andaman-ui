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

export function newOrder(init: any): Order {
  return {
    tradeRunID: init.tradeRunID,
    orderID: init.orderID,
    units: init.units,
    tradeDirection: init.tradeDirection,
    state: init.state,
    profit: init.profit,
    timeAtOpen: init.timeAtOpen,
    priceAtOpen: init.priceAtOpen,
    timeAtClose: init.timeAtClose,
    priceAtClose: init.priceAtClose,
  }
}