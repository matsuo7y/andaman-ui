import axios, { AxiosInstance, AxiosResponse } from 'axios'
import camelcaseKeys from 'camelcase-keys'
import { APIBaseURL, APIKey } from './const-local'

export type OnSuccess<T> = (resp: T) => void
export type OnError = (code: number, message: string) => void

export type ResponseHandler<T> = {
  onSuccess: OnSuccess<T>,
  onError: OnError,
}

export class APIClient {
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
      baseURL: APIBaseURL,
      headers: {'API-KEY': APIKey}
    })
  }

  private success<T>(handler: OnSuccess<T>): (resp: AxiosResponse) => void {
    return (resp) => {
      const data = camelcaseKeys(resp.data, {deep: true}) as T
      handler(data)
    }
  }

  private error(handler: OnError): (error: any) => void {
    return (error) => {
      let result: [number, string]

      if (error.response) {
        const data = error.response.data
        if (data.code && data.message) {
          result = [data.code, data.message]
        } else {
          result = [error.response.status, data]
        }
      } else if (error.request) {
        result = [500, error.request]
      } else {
        result = [500, error.message]
      }

      handler(result[0], result[1])
    }
  }
  
  private get<T>(path: string, params: any, handler: ResponseHandler<T>) {
    this.instance.get(path, {params: params})
      .then(this.success(handler.onSuccess))
      .catch(this.error(handler.onError))
  }

  private post<T>(path: string, data: any, handler: ResponseHandler<T>) {
    this.instance.post(path, {data: data})
      .then(this.success(handler.onSuccess))
      .catch(this.error(handler.onError))
  }
}
