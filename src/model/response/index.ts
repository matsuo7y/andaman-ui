export type { ErrorResponse } from './error-response'
export type { OrdersResponse } from './orders-response'
export type { SuccessResponse } from './success-response'
export type { TradeConfigurationGroupSummariesResponse } from './trade-configuration-group-summaries-response'
export type { TradeCountProfitsResponse } from './trade-count-profits-response'
export type { TradeRunDetailsResponse } from './trade-run-details-response'
export type { TradeSetDetailResponse } from './trade-set-detail-response'
export type { TradeSetsResponse } from './trade-sets-response'
export type { TradeSummariesResponseA } from './trade-summaries-response-a'
export type { TradeSummariesResponseB } from './trade-summaries-response-b'

export { tradeRunDetailsResponseCustomizer } from './trade-run-details-response'

export const defaultCustomizer = <T>(resp: T) => resp
