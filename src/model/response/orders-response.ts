import { Order, OffsetPaging } from '../definition'

export interface OrdersResponse {
  orders: Order[]
  totalProfit: number
  paging: OffsetPaging
}
