import React from 'react'
import { TradeRunType, TradeSetType } from '../model/enums'
import { ButtonSelector } from './util'

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

export class TopSelector extends React.Component<TopSelectorProps, TopSelectorState> {
  constructor(props: TopSelectorProps) {
    super(props)
    this.state = {topOption: TopOption.Show}
  }

  private get topSelector() {
    return (
      <ButtonSelector
        options={[TopOption.Show, TopOption.Run]}
        initOption={TopOption.Show}
        onSelected = {this.onTopOptionSelected}
      />
    )
  }

  private detailSelector(option: TopOption) {
    switch (option) {
      case TopOption.Show:
        return (
          <ButtonSelector
            key='show'
            options={[TradeRunType.OandaTrade, TradeRunType.OandaSimulation]}
            initOption={this.state.showOption?.type ?? TradeRunType.OandaTrade}
            onSelected={this.onShowOptionSelected}
          />
        )
    
      default:
        return (
          <ButtonSelector
            key='run'
            options={[TradeSetType.Trade, TradeSetType.Simulation, TradeSetType.GridSearch]}
            initOption={this.state.runOption?.type ?? TradeSetType.Trade}
            onSelected={this.onRunOptionSelected}
          />
        )
    }
  }

  private onTopOptionSelected = (option: string) =>
    this.setState({topOption: option as TopOption})

  private onShowOptionSelected = (option: string) =>
    this.setState({showOption: {type: option as TradeRunType}})

  private onRunOptionSelected = (option: string) =>
    this.setState({runOption: {type: option as TradeSetType}})

  render() {
    return (
      <div>
        {this.topSelector}
        {this.detailSelector(this.state.topOption)}
      </div>
    )
  }
}

