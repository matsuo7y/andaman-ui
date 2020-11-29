import axios, { AxiosInstance } from 'axios'
import { APIBaseURL, APIKey } from './const-local'

class APIClient {
  static client?: APIClient

  static get shared(): APIClient {
    if(APIClient.client == null) {
      APIClient.client = new APIClient()
    }
    return APIClient.client
  }

  private instance?: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: APIBaseURL,
      headers: {'API-KEY': APIKey}
    })
  }
}

export default APIClient
