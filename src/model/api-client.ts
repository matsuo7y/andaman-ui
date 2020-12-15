import axios, { AxiosInstance, AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'
import { APIBaseURL, APIKey } from './const-local'
import { Customizer } from 'model/extension'
import {
  TradeRunsParam,
  TradeSetsParam,
  TradeSetParam,
  OrdersParam,
  TradeSummariesAParam,
  TradeSummariesBParam,
  TradeCountProfitsParam,
  TradeConfigurationGroupSummariesParam,
  AddTradeSetByPresetData,
  CreateTradeData
} from './params'
import {
  ErrorResponse,
  OrdersResponse,
  SuccessResponse,
  TradeConfigurationGroupSummariesResponse,
  TradeCountProfitsResponse,
  TradeRunDetailsResponse,
  TradeSetDetailResponse,
  TradeSetsResponse,
  TradeSummariesResponseA,
  TradeSummariesResponseB
} from './response'

export type OnSuccess<T> = (resp: T) => void
export type OnError = (error: ErrorResponse) => void

export type ResponseHandler<T> = {
  onSuccess: OnSuccess<T>
  onError: OnError
  customizer: Customizer<T>
}

export default class APIClient {
  static client?: APIClient

  static get shared(): APIClient {
    if (APIClient.client == null) {
      APIClient.client = new APIClient()
    }
    return APIClient.client
  }

  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: `${APIBaseURL}/api`,
      headers: { 'API-KEY': APIKey }
    })
  }

  private success<T>(handler: OnSuccess<T>, customizer: Customizer<T>): (resp: AxiosResponse) => void {
    return (resp) => {
      const data = camelcaseKeys(resp.data, { deep: true }) as T
      handler(customizer(data))
    }
  }

  private error(handler: OnError): (error: any) => void {
    return (error) => {
      let result: ErrorResponse

      if (error.response) {
        const data = error.response.data
        if (data.code && data.message) {
          result = { statusCode: data.code, message: data.message }
        } else {
          result = { statusCode: error.response.status, message: data }
        }
      } else if (error.request) {
        result = { statusCode: 500, message: error.request }
      } else {
        result = { statusCode: 500, message: error.message }
      }

      handler(result)
    }
  }

  private get<T>(path: string, params: any, handler: ResponseHandler<T>) {
    params = snakecaseKeys(params, { deep: true })
    this.instance
      .get(path, { params: params })
      .then(this.success(handler.onSuccess, handler.customizer))
      .catch(this.error(handler.onError))
  }

  private post<T>(path: string, data: any, handler: ResponseHandler<T>) {
    data = snakecaseKeys(data, { deep: true })
    this.instance
      .post(path, { data: data })
      .then(this.success(handler.onSuccess, handler.customizer))
      .catch(this.error(handler.onError))
  }

  public tradeRuns(params: TradeRunsParam, handler: ResponseHandler<TradeRunDetailsResponse>) {
    this.get('/trade_runs', params, handler)
  }

  public traseSets(params: TradeSetsParam, handler: ResponseHandler<TradeSetsResponse>) {
    this.get('/trade_sets', params, handler)
  }

  public tradeSet(params: TradeSetParam, handler: ResponseHandler<TradeSetDetailResponse>) {
    this.get('/trade_set', params, handler)
  }

  public orders(params: OrdersParam, handler: ResponseHandler<OrdersResponse>) {
    this.get('/orders', params, handler)
  }

  public tradeSummariesA(params: TradeSummariesAParam, handler: ResponseHandler<TradeSummariesResponseA>) {
    this.get('/trade_summaries_a', params, handler)
  }

  public tradeSummariesB(params: TradeSummariesBParam, handler: ResponseHandler<TradeSummariesResponseB>) {
    this.get('/trade_summaries_b', params, handler)
  }

  public tradeCountProfits(params: TradeCountProfitsParam, handler: ResponseHandler<TradeCountProfitsResponse>) {
    this.get('/trade_count_profits', params, handler)
  }

  public tradeConfigurationGroupSummaries(
    params: TradeConfigurationGroupSummariesParam,
    handler: ResponseHandler<TradeConfigurationGroupSummariesResponse>
  ) {
    this.get('/trade_configuration_group_summaries', params, handler)
  }

  public addTradeSetByPreset(data: AddTradeSetByPresetData, handler: ResponseHandler<SuccessResponse>) {
    this.post('/add_trade_set_by_preset', data, handler)
  }

  public createTrade(data: CreateTradeData, handler: ResponseHandler<SuccessResponse>) {
    this.post('/create_trade', data, handler)
  }
}
