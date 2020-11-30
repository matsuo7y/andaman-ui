import {
  Order,
  OffsetPaging,

  newOrder,
  newOffsetPaging,
} from "../definition";

export interface OrdersResponse {
  orders: [Order]
  totalProfit: number
  paging: OffsetPaging
}

export function newOrdersResponse(init: any): OrdersResponse {
  return {
    orders: init.orders.map((x: any) => newOrder(x)),
    totalProfit: init.totalProfit,
    paging: newOffsetPaging(init.paging),
  }
}