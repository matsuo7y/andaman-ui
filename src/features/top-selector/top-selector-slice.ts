import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TradeRunType, TradeSetType } from 'model/enums'

type TopSelectorState = {
  topOption: TopOption
  showOption: ShowOption
  runOption: RunOption
}

export enum TopOption {
  Show = 'show',
  Run = 'run'
}

export type ShowOption = {
  type: TradeRunType
}

export type RunOption = {
  type: TradeSetType
}

const initialTopSelectorState: TopSelectorState = {
  topOption: TopOption.Show,
  showOption: {
    type: TradeRunType.OandaTrade
  },
  runOption: {
    type: TradeSetType.Trade
  }
}

const topSelector = createSlice({
  name: 'top-selector',
  initialState: initialTopSelectorState,
  reducers: {
    setTopOption(state, { payload }: PayloadAction<string>) {
      state.topOption = payload as TopOption
    },
    setShowOption(state, { payload }: PayloadAction<ShowOption>) {
      state.showOption = payload
    },
    setRunOption(state, { payload }: PayloadAction<RunOption>) {
      state.runOption = payload
    }
  }
})

export const { setTopOption, setShowOption, setRunOption } = topSelector.actions

export default topSelector.reducer
