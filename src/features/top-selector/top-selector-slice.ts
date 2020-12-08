import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  TradeRunType,
  TradeSetType,
} from 'model/enums'

type TopSelectorState = {
  topOption: TopOption,
  showOption: ShowOption,
  runOption: RunOption,
}

enum TopOption {
  Show = 'show',
  Run = 'run',
}

type ShowOption = {
  type: TradeRunType,
}

type RunOption = {
  type: TradeSetType,
}

const initialTopSelectorState: TopSelectorState = {
  topOption: TopOption.Show,
  showOption: {
    type: TradeRunType.OandaTrade,
  },
  runOption: {
    type: TradeSetType.Trade,
  },
}

const topSelector = createSlice({
  name: 'top-selector',
  initialState: initialTopSelectorState,
  reducers: {
    setTopOption(state, { payload }: PayloadAction<string>) {
      state.topOption = payload as TopOption
    },
    setShowOption(state, { payload }: PayloadAction<string>) {
      state.showOption.type = payload as TradeRunType
    },
    setRunOption(state, { payload }: PayloadAction<string>) {
      state.runOption.type = payload as TradeSetType
    },
  }
})

export const {
  setTopOption,
  setShowOption,
  setRunOption,
} = topSelector.actions

export default topSelector.reducer