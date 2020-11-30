import {
  TradeConfigurationGroupSummary,
  OffsetPaging,
} from "../definition";

export interface TradeConfigurationGroupSummariesResponse {
  groupSummaries: [TradeConfigurationGroupSummary]
  paging: OffsetPaging
}