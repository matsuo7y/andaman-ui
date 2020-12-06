import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { TradeRunType, TradeSetType } from '../model/enums'
import { ButtonSelector } from '../component'

type TopSelectorProps = {}
type TopSelectorState = {
  topOption: TopOption,
  showOption?: ShowOption,
  runOption?: RunOption,
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

export const TopSelector = (props: TopSelectorProps) => {
  const [topOption, setTopOption] = useState(TopOption.Show)
  const [showOption, setShowOption] = useState<ShowOption>({type: TradeRunType.OandaTrade})
  const [runOption, setRunOption] = useState<RunOption>({type: TradeSetType.Trade})

  const onTopOptionSelected = (option: string) =>
    setTopOption(option as TopOption)

  const onShowOptionSelected = (option: string) =>
    setShowOption({type: option as TradeRunType})

  const onRunOptionSelected = (option: string) =>
    setRunOption({type: option as TradeSetType})
  
  const topSelector = (
    <ButtonSelector
      options={[TopOption.Show, TopOption.Run]}
      initOption={TopOption.Show}
      onSelected = {onTopOptionSelected}
    />
  )

  const confirmButton = (
    <div className="d-flex justify-content-center">
      <Button className="m-2" variant="secondary" onClick={() => {}}>confirm</Button>
    </div>
  )

  const detailSelector = (option: TopOption) => {
    switch (option) {
      case TopOption.Show:
        return (
          <ButtonSelector
            key='show'
            options={[TradeRunType.OandaTrade, TradeRunType.OandaSimulation]}
            initOption={showOption.type}
            onSelected={onShowOptionSelected}
          />
        )
    
      default:
        return (
          <ButtonSelector
            key='run'
            options={[TradeSetType.Trade, TradeSetType.Simulation, TradeSetType.GridSearch]}
            initOption={runOption.type}
            onSelected={onRunOptionSelected}
          />
        )
    }
  }

  
  return (
    <div>
      {topSelector}
      {detailSelector(topOption)}
      {confirmButton}
    </div>
  )
}