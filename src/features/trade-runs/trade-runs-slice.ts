import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TradeRunDetailsResponse, ErrorResponse } from 'model/response'

type TradeRunsState = {
  response: TradeRunDetailsResponse
  error?: ErrorResponse
  fetched: boolean
}

const initialTradeRunsState: TradeRunsState = {
  response: {
    tradeRuns: [],
    paging: {
      all: 0,
      count: 10,
      offset: 0
    }
  },
  fetched: false
}

const tradeRuns = createSlice({
  name: 'trade-runs',
  initialState: initialTradeRunsState,
  reducers: {
    setResponse(state, { payload }: PayloadAction<TradeRunDetailsResponse>) {
      state.response = payload
      state.fetched = true
    },
    setError(state, { payload }: PayloadAction<ErrorResponse>) {
      state.error = payload
    }
  }
})

export const { setResponse, setError } = tradeRuns.actions

export default tradeRuns.reducer
