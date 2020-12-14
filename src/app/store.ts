import { combineReducers, configureStore } from '@reduxjs/toolkit'

import topSelectorReducer from 'features/top-selector/top-selector-slice'
import tradeRunsReducer from 'features/trade-runs/trade-runs-slice'

const rootReducer = combineReducers({
  topSelector: topSelectorReducer,
  tradeRuns: tradeRunsReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store
