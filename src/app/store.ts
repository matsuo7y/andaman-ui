import { combineReducers, configureStore } from '@reduxjs/toolkit'

import topSelectorReducer from 'features/top-selector/top-selector-slice'

const rootReducer = combineReducers({
  topSelector: topSelectorReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
})

export default store